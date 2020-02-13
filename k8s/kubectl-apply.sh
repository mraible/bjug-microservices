#!/bin/bash
# Files are ordered in proper order with needed wait for the dependent custom resource definitions to get initialized.
# Usage: bash kubectl-apply.sh

logSummary() {
    echo ""
    echo "#####################################################"
    echo "Please find the below useful endpoints,"
    echo "JHipster Console - http://jhipster-console.default.35.193.119.22.nip.io"
    echo "#####################################################"
}

kubectl apply -f registry/
kubectl label namespace default istio-injection=enabled --overwrite=true
kubectl apply -f blog/
kubectl apply -f gateway/
kubectl apply -f store/
kubectl apply -f console/

logSummary
