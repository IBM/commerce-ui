#!/bin/bash

#-----------------------------------------------------------------
# Licensed Materials - Property of IBM
#
# WebSphere Commerce
#
# (C) Copyright IBM Corp. 2018 All Rights Reserved.
#
# US Government Users Restricted Rights - Use, duplication or
# disclosure restricted by GSA ADP Schedule Contract with
# IBM Corp.
#-----------------------------------------------------------------

# Check to see if the file denoting non-initial runs exists
if [ ! -f /SETUP/bin/nonInitialHC.txt ]; then
    # Create the file
    touch /SETUP/bin/nonInitialHC.txt

    # Exit erroneously to immediately fail the first container health check
    exit 1
fi

PORT=8001
#Wget the web-server stats
HTTP_RESPONSE=`wget -qO- --no-check-certificate https://localhost:$PORT/server-status?auto`
EXIT_CODE=$?
if [ $EXIT_CODE != 0 ]; then
        echo "Error: $EXIT_CODE, wget failed to get server status."
fi

#Construct the JSON response
JSON_RESPONSE=`printf "$HTTP_RESPONSE" | awk 'BEGIN { FS=": " } NR == 1 { print "{\n\"ServerName\": \""$1"\", "} NR != 1 && !/Scoreboard/ {print "\""$1"\": \""substr($0, index($0, $2))"\", "} END { print "\""$1"\": \""substr($0, index($0, $2))"\"} "}'`
EXIT_CODE=$?
if [ $EXIT_CODE != 0 ]; then
        echo "Error: $EXIT_CODE, failed to construct json."
else
    echo $JSON_RESPONSE > /proc/1/fd/1
fi