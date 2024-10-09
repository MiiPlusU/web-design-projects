# Todo App (React & Django)

Welcome to the **Todo App**, a full-stack web application built with **React** for the frontend and **Django** for the backend. This project is designed to manage tasks (to-dos), allowing users to create, update, and mark tasks as complete.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Setup and Installation](#setup-and-installation)
4. [Frontend Setup (React)](#frontend-setup-react)
5. [Backend Setup (Django)](#backend-setup-django)
6. [Usage](#usage)
7. [Contributing](#contributing)
8. [License](#license)

---

## Features

- **Add new tasks**: Easily add new to-do items.
- **View tasks**: Toggle between viewing completed and incomplete tasks.
- **Edit tasks**: Modify the title, description, or completion status of tasks.
- **Delete tasks**: Remove tasks from the list.
- **Responsive Design**: Uses **Bootstrap** for a fully responsive design.

---

## Technologies Used

- **Frontend**: React, Bootstrap, Axios
- **Backend**: Django REST Framework
- **Database**: SQLite (default, but can be swapped with PostgreSQL or others)
- **Styling**: Bootstrap 5
- **State Management**: React's built-in state handling

---

## Setup and Installation

To get started with the project locally, follow these steps.

### Prerequisites

Ensure that you have the following installed:
- **Python 3.x**
- **Django 3.x+**
- **Node.js & npm**
- **React**
- **Bootstrap**

---

## Frontend Setup (React)

1. Clone the repository and navigate to the `frontend` directory:
    ```bash
    git clone https://github.com/your-username/todo-app.git
    cd todo-app/frontend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Run the React development server:
    ```bash
    npm start
    ```

The React app will be running on `http://localhost:3000`.

---

## Backend Setup (Django)

1. Navigate to the backend directory:
    ```bash
    cd ../backend
    ```

2. Create and activate a virtual environment:
    ```bash
    python3 -m venv myenv
    source myenv/bin/activate  # On Windows: myenv\Scripts\activate
    ```

3. Install the required Python packages:
    ```bash
    pip install -r requirements.txt
    ```

4. Apply the migrations:
    ```bash
    python manage.py migrate
    ```

5. Run the Django development server:
    ```bash
    python manage.py runserver
    ```

The Django API will be running on `http://localhost:8000`.

---

## Usage

1. **Add a task**: Use the "Add task" button in the UI to create new tasks.
2. **Toggle task completion**: Use the tabs to switch between viewing **Completed** and **Incomplete** tasks.
3. **Edit tasks**: Click the **Edit** button next to a task to modify its details.
4. **Delete tasks**: Remove a task from the list by clicking the **Delete** button.

---

## Project Structure
/todo-app ├── frontend │ ├── src │ ├── public │ ├── package.json │ └── README.md ├── backend │ ├── todo │ ├── manage.py │ ├── db.sqlite3 │ ├── requirements.txt │ └── README.md └── README.md

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new feature branch: `git checkout -b feature-branch-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-branch-name`
5. Open a pull request.

