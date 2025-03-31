#!/bin/bash

# Variables
BUCKET_NAME="cineverse-frontend"
BUILD_DIR="../client/build"

# Remove all files from S3
aws s3 rm s3://$BUCKET_NAME --recursive

# Upload new build files
aws s3 cp $BUILD_DIR s3://$BUCKET_NAME --recursive

echo "✅ Deployment to S3 completed successfully!"
