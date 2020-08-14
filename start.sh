#!/bin/sh

echo "\n\nInstalling dependencies in ui...\n\n"
cd ui
npm ci
cd ..

echo "\n\nInstalling dependencies in backend...\n\n"
cd backend
npm ci
cd ..

echo "\n\nBuilding development docker images\n\n"
docker-compose build

echo "\n\nStarting development docker images\n\n"
docker-compose up -d

echo "\n\nDone. To stop the application from running use 'docker-compose down'\n\n."