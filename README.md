# Code Test Project

This project aims to be a little coding test with some assignments. It basically allows a user to create a new real estate in the backend with the two properties - address and size in m².

## Requirements

- node >= 12 / npm
- docker / docker-compose

## How to run

- Clone this repo

### Docker Compose

- `docker-compose build`
- `docker-compose up -d`

After building the UI will be available at `http://localhost:3000` - however note it may take a while before the components are built
The backend will be available on port 4000 with an example route /ping, i.e. `http://localhost:4000/ping`.

Note that this is solely meant as a development platform, therefore the source code folders have been mounted to the docker containers and are watched, **so all code changes should be visible in real time**.

### UI only

- Navigate to the `./ui` subfolder
- `npm ci`
- `npm start`

### Backend only

- Navigate to the `./backend` subfolder
- `npm ci`
- `npm start`

## Tooling used

### UI

- React app through create-react-app
- Uses [formik](https://formik.org/) for forms
- Meant to be used alongside with React hooks but any technique will do
- Eslint for code linting

### Backend

- Simple [hapi web server](https://hapi.dev/)
- Eslint for code linting

### Overall

- Docker images for both UI and backend
- docker-compose for orchestration

## Assignment

For details on the assignments see [ASSIGNMENT.md](./ASSIGNMENT.md).