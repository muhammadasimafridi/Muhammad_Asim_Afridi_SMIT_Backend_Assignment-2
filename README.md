# Backend Assignment #2 – Express CRUD API (Notes Management System)

A simple Notes Management REST API built with **Node.js** and **Express.js**, fulfilling all assignment requirements using in-memory array storage.

---

## 📁 Project Structure

```text
assisgnment2/
│
├── node_modules/
├── .gitignore
├── package.json
├── README.md
└── server.js
```

---

## 🚀 How to Run the Server

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start the Server:**
   ```bash
   npm start
   ```

3. The server will run on:
   ```text
   http://localhost:5000
   ```

---

## 📌 API Endpoints & Testing with Postman

| Method | Endpoint | Description | Request Body |
| :--- | :--- | :--- | :--- |
| `GET` | `/notes` | Get all notes | None |
| `GET` | `/notes/:id` | Get note by ID | None |
| `POST` | `/notes` | Create a new note | `{ "title": "MongoDB", "content": "Learn schemas" }` |
| `PUT` | `/notes/:id` | Update a note | `{ "title": "Updated Title", "content": "Updated Content" }` |
| `DELETE` | `/notes/:id` | Delete a note | None |

---

## 🧪 Postman Examples

### 1. GET All Notes
- **URL**: `http://localhost:5000/notes`
- **Method**: `GET`
- **Response** `(200 OK)`:
  ```json
  [
    {
      "id": 1,
      "title": "Learn Express",
      "content": "Practice CRUD APIs",
      "createdAt": "2026-05-12"
    }
  ]
  ```

### 2. POST Create Note
- **URL**: `http://localhost:5000/notes`
- **Method**: `POST`
- **Headers**: `Content-Type: application/json`
- **Body (raw JSON)**:
  ```json
  {
    "title": "MongoDB",
    "content": "Learn schemas"
  }
  ```
- **Response** `(201 Created)`:
  ```json
  {
    "message": "Note created successfully",
    "note": {
      "id": 2,
      "title": "MongoDB",
      "content": "Learn schemas",
      "createdAt": "2026-11-05"
    }
  }
  ```

### 3. POST Validation Challenge (Missing Fields)
- **URL**: `http://localhost:5000/notes`
- **Method**: `POST`
- **Body**: `{ "title": "No Content" }`
- **Response** `(400 Bad Request)`:
  ```json
  {
    "message": "All fields are required"
  }
  ```

### 4. GET Single Note
- **URL**: `http://localhost:5000/notes/1`
- **Method**: `GET`
- **Response** `(200 OK)`:
  ```json
  {
    "id": 1,
    "title": "Learn Express",
    "content": "Practice CRUD APIs",
    "createdAt": "2026-05-12"
  }
  ```

### 5. PUT Update Note
- **URL**: `http://localhost:5000/notes/1`
- **Method**: `PUT`
- **Headers**: `Content-Type: application/json`
- **Body (raw JSON)**:
  ```json
  {
    "title": "Updated Title",
    "content": "Updated Content"
  }
  ```
- **Response** `(200 OK)`:
  ```json
  {
    "message": "Note updated successfully",
    "note": {
      "id": 1,
      "title": "Updated Title",
      "content": "Updated Content",
      "createdAt": "2026-05-12"
    }
  }
  ```

### 6. DELETE Note
- **URL**: `http://localhost:5000/notes/1`
- **Method**: `DELETE`
- **Response** `(200 OK)`:
  ```json
  {
    "message": "Note deleted successfully"
  }
  ```

