# To-Do Application

## Overview

This is a simple to-do application built with React and Redux. The application allows users to add, display, and manage tasks. Tasks can be searched by name, and their deadlines are highlighted if they have passed.

## Features

- **Add New Task**: Users can add a new task with a description and deadline.
- **Task List**: Displays a list of tasks with descriptions and deadlines.
- **Search Tasks**: Filter tasks by their names using the search component.
- **Task State Management**: Tasks have a "pending" state and a distinct appearance if their deadlines have passed.
- **State Management with Redux**: The application state is managed using Redux.

## Project Structure

- `src/components`
  - `Header.js`: Contains a button to toggle the visibility of the `TaskInput` component.
  - `TaskInput.js`: Contains an input field, date and time picker, and a "Save Task" button.
  - `TaskList.js`: Displays the list of tasks, each with a description, deadline, and a "Delete" button.
  - `Search.js`: Contains an input field to filter tasks by their descriptions.
- `src/redux`
  - `actions.js`: Contains Redux action types and action creators.
  - `reducers.js`: Contains the Redux reducer to handle state changes.
  - `store.js`: Configures the Redux store.
- `src/App.js`: The main entry point of the application.
- `src/index.js`: The entry point file where the Redux store is provided to the React app.

## Installation and Setup

### Prerequisites

- Node.js and npm installed on your machine.

### Steps

1. Clone the repository:
    ```sh
        git clone https://github.com/Abhishekbtech/To-Do.git
        cd todo-app
    ```
2. Install dependencies:
    ```sh
        npm install
    ```
3. Start the development server
    ```sh
        npm start
    ```

4. The application will be available at `http://localhost:3000`

## Deploy on Vercel

Deployment link of my project `https://to-do-for-quadb-tech.vercel.app/`
