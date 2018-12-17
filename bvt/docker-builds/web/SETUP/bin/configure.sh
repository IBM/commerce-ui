#!/bin/bash

# Checking if parameters are empty
if [[ -z $TENANT ]] ; then
  echo "TENANT has no value."; exit 1
fi
if [[ -z $ENVIRONMENT ]] ; then
  echo "ENVIRONMENT has no value."; exit 1
fi
if [[ -z $ENVTYPE ]] ; then
  echo "ENVTYPE has no value."; exit 1
fi

function nslookupList()
{
  nslookupStatus=0

  for host in "${@}"
  do
    nslookup ${host}
    if [ $? -ne 0 ] ; then
      echo "nslookup failed for ${host}."
      nslookupStatus=1
    fi
  done

  return ${nslookupStatus}
}

#Log container's local IP
IPADDR="$(hostname -I)"
CURRENT_TIME="$(date '+[%D %T:%3N %Z]')"
THREAD_ID="00000000"
LOG_LEVEL="A"
echo "${CURRENT_TIME} ${THREAD_ID}  ${LOG_LEVEL} [ audit=ibm ] ts-web IP Address SRC=${IPADDR}"

WC_HOST="${MARATHON_VIP_PRE}ts-app.marathon.l4lb.thisdcos.directory"

sleepTimeout=30
nslookupRetryCount=2

# Resolve the hostnames within the retry count
for i in `seq 1 $nslookupRetryCount`
do
  nslookupList ${WC_HOST}
  nslookupListStatus=$?
  if [ ${nslookupListStatus} -ne 0 ] ; then
    echo "nslookup failed. Attempt ${i} of ${nslookupRetryCount}: retrying in ${sleepTimeout} seconds..."
    if [ ${i} -lt ${nslookupRetryCount} ] ; then
      sleep ${sleepTimeout}
    fi
  else
    break
  fi
done

if [ ${nslookupListStatus} -ne 0 ] ; then
  echo "nslookup failed to resolve after ${nslookupRetryCount} attempt(s), error."
  exit ${nslookupListStatus}
fi

# Run commands
run add-node ${WC_HOST}-5443
if [ $? -ne 0 ] ; then
  echo "add-node ts-app.marathon returned error."; exit 1
fi

