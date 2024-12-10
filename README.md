# MERN Task API

## Description
This is a RESTful API built with Node.js, Express.js, and MongoDB. It provides user authentication using JWT and supports full CRUD operations for managing tasks. Environment variables are managed using dotenv.

---

## Features
- **User Authentication**:
  - Signup (`POST /signup`): Register a new user.
  - Login (`POST /login`): Authenticate user and return a JWT.
- **CRUD Operations for Tasks**:
  - `GET /tasks`: Fetch all tasks.
  - `POST /tasks`: Create a new task (requires authentication).
  - `GET /tasks/:id`: Fetch a task by ID (requires authentication).
  - `PUT /tasks/:id`: Update an entire task (requires authentication).
  - `PATCH /tasks/:id`: Update specific fields of a task (requires authentication).
  - `DELETE /tasks/:id`: Delete a task by ID (requires authentication).
- **Middleware**:
  - JWT-based authentication to protect routes.
- **MongoDB Integration**:
  - Tasks and users stored in a MongoDB database.

---

## Setup Instructions
Follow these steps to set up and run the project:

### 1. Clone the Repository
```bash
git clone https://github.com/muzammaldev/mern-task-api.git
cd mern-task-api
