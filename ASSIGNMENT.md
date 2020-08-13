# Assignment

## Rules, notes, hints

- Make sure you can explain what you did, copy & paste from stack overflow might not be your friend ;-)
- If you cannot finish one task don't give up, just try other tasks and see if you can
- There is not the one right way to complete a task. There are always different ways to do so, different packages, different frameworks and so on. Just pick the one that you think is best for you
- The look and feel of the UI is ugly. I know. ;-) Feel free to change it as needed.

## How to work on this

I recommend to simply fork this repository and push everything to the new repo. If that is not feasible for any reason you may also zip the repo and send it back.

## Tasks

### 1. Show existing real estate data

**Story**: As a user of the UI I want to be able to see existing real estate data
**Acceptance Criteria**:

- When the "Show existing real estates" button is clicked at least two entries for existing real estates should be shown
- The entries should contain the address and the area

**Notes**:

- The look and feel is up to you
- At this point it is totally ok to work with fake data without any backend loading

### 2. Pull existing real estate data from the backend

**Story**: As a user of the UI I want to see "real" real estate data
**Acceptance Criteria**:

- The data shown on the existing real estate page should not be fake anymore
- The backend must deliver the real estate data
- The UI pulls the real estate data from the backend and shows it

**Notes**:

- The backend may deliver static hard coded data at this point, no database is necessary
- The obvious way to solve this is through HTTP GET, however there may be other tools such as GraphQL. The latter would be a big bonus, but is at no means required. Do whatever gets the job done.

### 3. Enable creation of new real estates

Story: As a user of the UI I want to be able to create new real estates
Acceptance Criteria:

- On the page for creating a new real estate I want to be able to enter my data
- The data should be stored in a database
- The database and connection to database must be part of the docker-compose setup for easy development

Notes:

- Again the obvious way for transmitting the data is HTTP POST, however there is other tooling like GraphQL. The latter would be a big bonus, but is at no means required. Do whatever gets the job done.
- MongoDB is recommended, but any DB will do.

### 4. Show existing real estate data from the database

Story: As a user of the UI I want to see my newly created estate in the list of existing estates
Acceptance Criteria:

- Any real estate should be loaded from the database and sent to the UI on request (see task #2)
- Any newly created real estate should be visible on the page of existing real estates

Notes:

- This is basically the extension of task #2