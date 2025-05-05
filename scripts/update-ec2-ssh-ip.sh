#!/bin/bash

set -a
source "$(dirname "$0")/../.env"
set +a

read -a FRONTEND_PORTS <<< "$PORTS_FRONTEND"
read -a BACKEND_PORTS <<< "$PORTS_BACKEND"

IP=$(curl -s https://checkip.amazonaws.com)
echo "Detected IP: $IP"

update_group() {
    SG_ID=$1
    PORTS=("${!2}")

    echo "Updating security group: $SG_ID"

    for PORT in "${PORTS[@]}"; do
        echo "Updating port $PORT for $IP"
    
        aws ec2 revoke-security-group-ingress \
            --group-id "$SG_ID" \
            --protocol tcp \
            --port "$PORT" \
            --cidr 0.0.0.0/0 > /dev/null 2>&1

        aws ec2 authorize-security-group-ingress \
            --group-id "$SG_ID" \
            --protocol tcp \
            --port "$PORT" \
            --cidr "$IP/32" 2>&1 | grep -v "InvalidPermission.Duplicate"
    done

    echo "Updated $SG_ID"
}

update_group "$SECURITY_GROUP_ID_FRONTEND" FRONTEND_PORTS[@]
update_group "$SECURITY_GROUP_ID_BACKEND" BACKEND_PORTS[@]