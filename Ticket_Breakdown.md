# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## Ticket 1 - Gather/Confirm the facts

### Accpetance Criteria

Ensure necessary details are confirmed from client, e.g the nature of the custom-id required for each agent, preferred length (if any).

### Time Estimates

0 - 1 hour

### Implementation Details

Communicate with the client depending on preferred mode of communication with client.

## Ticket 2 - Prepare tests

### Accpetance Criteria

A test suite must be created. it must:

- Ensure that any record from Agent table has the custom agent id field
- Ensure that A test that each record in the response from the function getShiftsByFacility, contains the custom agent id alongside other metadata already being retrieved.
- Ensure that new Agent record contains a custom agent id.

### Time Estimates

0 - 1 hour

### Implementation Details

Prepare test cases for the acceptance criteria

## Ticket 3 - Prepare the database migrations & Implement Code changes to make tests pass

### Accpetance Criteria

- A database migration is prepared in a way that older records are not affected.
- The list returned by the function getShiftsByFacility must contain the custom agent id
- The Agent create/edit form must include custom agent id

### Time Estimates

- 2 - 3 hours

### Implementation Details

- We need to prepare a migration that will alter the Agent table to include an extra field
  name - customAgentId
  type - string
  maxLength - 20
  required - false
  default - empty string
- Make code changes to include custom agent id as part of the new record when new agent record is created (agent creation form)
- Make code changes to include custom agent id as part of the existing record when old agent record is edited (agent update form)
- Make code changes to retrieve custom agent id within the getShiftsByFacility function
- Make code changes to use the custom agent id within the generateReport function

## Ticket 4 - Deploy changes

### Accpetance Criteria

- A deployment with no errors
- A deployment with the requested feature implemented

### Time Estimates

0 - 1 hour

### Implementation Details

- Push code the the repository and let CICD handle the rest
