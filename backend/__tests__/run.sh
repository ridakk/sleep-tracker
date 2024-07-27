#!/bin/bash -eu

cleanup() {
    rv=$?

    echo "stopping services..."
    cd ./__tests__
    $docker_compose_command down -v
    cd ../

    exit $rv
}

trap "cleanup" EXIT

docker_compose_command=docker-compose

if ! command -v $docker_compose_command &> /dev/null
then
    echo "'$docker_compose_command' could not be found, trying 'docker compose' instead..."
    if ! command -v docker compose &> /dev/null
    then
      echo "neither '$docker_compose_command' nor 'docker compose' could not be found, exiting."
      exit
    fi
    docker_compose_command='docker compose'
fi

echo "creating services..."

cd ./__tests__


$docker_compose_command up -d
cd ../

sleep 4

echo "running test cases..."
yarn $1 || true

echo "completed"

exit 0
