# AlgoCode-Problem-Service

AlgoCode-Problem-Service is a RESTful API for managing coding problems, including their descriptions, test cases, and code stubs. It is built with Node.js, Express, and MongoDB.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
  - [Ping](#ping)
  - [Create Problem](#create-problem)
  - [Get All Problems](#get-all-problems)
  - [Get Problem by ID](#get-problem-by-id)
  - [Update Problem](#update-problem)
  - [Delete Problem](#delete-problem)
- [Error Handling](#error-handling)
- [Logging](#logging)

---

## Features

- Add, retrieve, update, and delete coding problems.
- Each problem includes title, description (with markdown sanitization), difficulty, test cases, code stubs, and editorial.
- Centralized error handling and logging (console, file, MongoDB).
- Modular code structure for easy maintenance.

---

## Project Structure

```
src/
  index.js
  config/
    db.config.js
    logger.config.js
    server.config.js
  controllers/
    index.js
    problem.controller.js
  error/
    badRequest.js
    BaseError.js
    InternalServer.error.js
    not_implemented.error.js
    notFoundError.js
  models/
    index.js
    problem.model.js
  repositories/
    index.js
    problem.repository.js
  routes/
    index.js
    v1/
      index.js
      problem.routes.js
  services/
    index.js
    problem.service.js
  utils/
    ErrorHandler.js
    index.js
    markdownSanitizer.js
  validators/
.env
app.log
package.json
README.md
```

---

## Getting Started

1. **Clone the repository**
   ```sh
   git clone <repo-url>
   cd AlgoCode-Problem-Service
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root directory:
   ```
   PORT=8000
   ATLAS_DB_URL="your-mongodb-url"
   LOG_DB_URL="your-mongodb-log-url"
   NODE_ENV="development"
   ```

4. **Start the server**
   ```sh
   npm run dev
   ```

   The server will run on `http://localhost:8000` by default.

---

## Environment Variables

- `PORT`: Port number for the server (default: 8000)
- `ATLAS_DB_URL`: MongoDB connection string for problems database
- `LOG_DB_URL`: MongoDB connection string for logging
- `NODE_ENV`: Environment (e.g., development, production)

---

## API Documentation

All endpoints are prefixed with `/api/v1`.

### 1. Ping

**GET** `/api/v1/problems/ping`

- **Description:** Health check endpoint.
- **Response:**
  ```json
  {
    "message": "Ping controller is up"
  }
  ```

---

### 2. Create Problem

**POST** `/api/v1/problems/`

- **Description:** Create a new coding problem.
- **Request Body:**
  ```json
  {
    "title": "Two Sum",
    "description": "Given an array of integers...",
    "difficulty": "easy",
    "testcases": [
      { "input": "[2,7,11,15], 9", "output": "[0,1]" }
    ],
    "codeStubs": [
      {
        "language": "CPP",
        "startCode": "vector<int> twoSum(vector<int>& nums, int target) {",
        "endCode": "}",
        "userCode": "// write your code here"
      }
    ],
    "editorial": "Use a hash map to store..."
  }
  ```
- **Response:**
  - **Status:** 201 Created
  ```json
  {
    "message": "Success",
    "error": {},
    "data": {
      "_id": "6614ee86165c626e4dfd3f41",
      "title": "Two Sum",
      "description": "Given an array of integers...",
      "difficulty": "easy",
      "testcases": [
        { "input": "[2,7,11,15], 9", "output": "[0,1]" }
      ],
      "codeStubs": [
        {
          "language": "CPP",
          "startCode": "vector<int> twoSum(vector<int>& nums, int target) {",
          "endCode": "}",
          "userCode": "// write your code here"
        }
      ],
      "editorial": "Use a hash map to store...",
      "__v": 0
    }
  }
  ```

---

### 3. Get All Problems

**GET** `/api/v1/problems/`

- **Description:** Retrieve all coding problems.
- **Response:**
  - **Status:** 200 OK
  ```json
  {
    "success": true,
    "message": "successfully fetched all the problems",
    "error": {},
    "data": [
      {
        "_id": "6614ee86165c626e4dfd3f41",
        "title": "Two Sum",
        "description": "Given an array of integers...",
        "difficulty": "easy",
        "testcases": [
          { "input": "[2,7,11,15], 9", "output": "[0,1]" }
        ],
        "codeStubs": [
          {
            "language": "CPP",
            "startCode": "vector<int> twoSum(vector<int>& nums, int target) {",
            "endCode": "}",
            "userCode": "// write your code here"
          }
        ],
        "editorial": "Use a hash map to store...",
        "__v": 0
      }
    ]
  }
  ```

---

### 4. Get Problem by ID

**GET** `/api/v1/problems/:id`

- **Description:** Retrieve a specific problem by its ID.
- **Response:**
  - **Status:** 200 OK
  ```json
  {
    "success": true,
    "message": "successfully fetched the problem",
    "error": {},
    "data": {
      "_id": "6614ee86165c626e4dfd3f41",
      "title": "Two Sum",
      "description": "Given an array of integers...",
      "difficulty": "easy",
      "testcases": [
        { "input": "[2,7,11,15], 9", "output": "[0,1]" }
      ],
      "codeStubs": [
        {
          "language": "CPP",
          "startCode": "vector<int> twoSum(vector<int>& nums, int target) {",
          "endCode": "}",
          "userCode": "// write your code here"
        }
      ],
      "editorial": "Use a hash map to store...",
      "__v": 0
    }
  }
  ```
- **Error Response:** (if not found)
  - **Status:** 404 Not Found
  ```json
  {
    "success": "False",
    "message": "The requested resource: Problem with value 6614ee86165c626e4dfd3f41 is not found",
    "error": {
      "resourceName": "Problem",
      "resourceValue": "6614ee86165c626e4dfd3f41"
    },
    "data": {}
  }
  ```

---

### 5. Update Problem

**PUT** `/api/v1/problems/:id`

- **Description:** Update an existing problem.
- **Request Body:** (same as create)
- **Response:**
  - **Status:** 200 OK
  ```json
  {
    "success": true,
    "message": "Problem with id: 6614ee86165c626e4dfd3f41 is successfully updated",
    "error": {},
    "data": {
      "_id": "6614ee86165c626e4dfd3f41",
      "title": "Updated Title",
    }
  }
  ```

---

### 6. Delete Problem

**DELETE** `/api/v1/problems/:id`

- **Description:** Delete a problem by its ID.
- **Response:**
  - **Status:** 200 OK
  ```json
  {
    "success": true,
    "message": "Problem with id 6614ee86165c626e4dfd3f41 is successfully deleted",
    "error": {},
    "data": {
      "_id": "6614ee86165c626e4dfd3f41",
      "title": "Two Sum",
    }
  }
  ```
- **Error Response:** (if not found)
  - See [Get Problem by ID](#get-problem-by-id) error response.

---

## Error Handling

- All errors are handled by a centralized error handler.
- Custom error classes for NotFound, BadRequest, InternalServer, and NotImplemented.
- Error responses include `success`, `message`, `error`, and `data` fields.

---

## Logging

- Logs are written to the console, a file (`app.log`), and a MongoDB collection.
- Errors such as "Problem not found" are logged with timestamps and severity.

---

## Notes

- The `description` field is sanitized for safe markdown/HTML content.
- All endpoints expect and return JSON.
- For more details, see the source code in the respective folders.

---

For any issues or contributions, please open an issue or pull request.