# Task Management Project - Backend

Welcome to the Task Management project! This is a full-stack application designed to manage tasks efficiently. The project is built using the MERN (MongoDB, Express.js, React, Node.js) stack, ensuring a robust and scalable solution for task-related activities.

## Project Overview

The primary goal of this project is to facilitate the management of tasks through a user-friendly interface. Tasks can be created, updated, and deleted, providing a seamless experience for users looking to organize their work.

## Technology Stack

- **MongoDB:** A NoSQL database used to store and manage task data.
- **Express.js:** A web application framework for Node.js, simplifying the development of robust APIs.
- **React:** A JavaScript library for building user interfaces, utilized for the frontend.
- **Node.js:** An asynchronous event-driven JavaScript runtime, serving as the backend platform.

## Project Features

- **Task Creation:** Easily create new tasks with titles and descriptions.
- **Task Updates:** Update existing tasks with modified titles and descriptions.
- **Task Deletion:** Remove tasks that are no longer needed.

## Project Structure (TO DO)

The main codebase resides in the `main` branch, encompassing the entire project, including the main logic. The `Stubs` branch is provided for candidates to fill in the code in the `taskController.js` file under the `controllers` folder.

## Getting Started

To run the server, ensure you have the latest Node.js installed on your system, as well as MongoDB. Follow these steps:

1. Clone the repository and switch to the `Stubs` branch.
2. Install the required Node modules by running `npm install`.

## Project Architecture (BACKEND)

The project follows the MVC (Model-View-Controller) architecture:

- **Model:** The `Model` folder contains the task model definition.
- **Controller:** The `controllers` folder houses the main logic for tasks.
- **View (Routes):** The `routes` folder in the `routes` directory handles routing.

## Writing Code

Navigate to the `taskController.js` file under the `controllers` folder in the `Stubs` branch. This is where you will be writing your code.

## Testing

After writing your code, ensure its correctness by running:

```bash
npm test

This command will execute tests on the controllers to validate the functionality of your code.

# Test Cases (1 suite, 5 test cases)
1. Should get all tasks ✅
2. Should create a new task ✅
3. Should update an existing task ✅
4. Should delete an existing task ✅
5. Should get a specific task by ID ✅
