##################################################################
# IBM Confidential
#
# OCO Source Materials
#
# WebSphere Commerce
#
# (C) Copyright IBM Corp. 2016
#
# The source code for this program is not published or otherwise
# divested of its trade secrets, irrespective of what has
# been deposited with the U.S. Copyright Office.
##################################################################
#
# Dockerfile will create a Commerce transaction server image

FROM wcnexus.torolab.ibm.com/commerce-base/ihs:9.0.0.9-latest

COPY SETUP /SETUP/
RUN chmod -R 555 /SETUP/bin
COPY labels/ SETUP/labels/
