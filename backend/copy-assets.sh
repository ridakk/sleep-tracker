#!/bin/bash -e

cp -r './config' './dist/config'
cp -r './routes/swagger' './dist/routes'
cp -r './routes/v1/reports/swagger.yaml' './dist/routes/v1/reports/swagger.yaml'
cp -r './routes/v1/sleeps/swagger.yaml' './dist/routes/v1/sleeps/swagger.yaml'
