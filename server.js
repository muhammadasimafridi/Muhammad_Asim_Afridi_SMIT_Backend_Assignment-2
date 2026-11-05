// Backend Assignment #2: Notes Management System

const express = require("express");
const app = express();
const PORT = 5000;

// Task 8: Express Middleware to parse incoming JSON bodies
app.use(express.json());

// Task 2: In-memory Notes Array
let notes = [
  {
    id: 1,
    title: "Learn Express",
    content: "Practice CRUD APIs",
    createdAt: "2026-05-12"
  }
];

let nextId = 2;

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Notes Management API! Use /notes endpoint." });
});

// Task 3: GET /notes - Return all notes
app.get("/notes", (req, res) => {
  res.status(200).json(notes);
});

// Task 5: GET /notes/:id - Get a single note by ID
app.get("/notes/:id", (req, res) => {
  const noteId = parseInt(req.params.id);
  const note = notes.find((n) => n.id === noteId);

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  res.status(200).json(note);
});

// Task 4 & Task 9: POST /notes - Create a new note
app.post("/notes", (req, res) => {
  const { title, content } = req.body;

  // Task 9: Validation check
  if (!title || !content) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newNote = {
    id: nextId++,
    title: title.trim(),
    content: content.trim(),
    createdAt: new Date().toISOString().split("T")[0] // Format: YYYY-MM-DD
  };

  notes.push(newNote);

  res.status(201).json({
    message: "Note created successfully",
    note: newNote
  });
});

// Task 6: PUT /notes/:id - Update note title/content
app.put("/notes/:id", (req, res) => {
  const noteId = parseInt(req.params.id);
  const { title, content } = req.body;

  const note = notes.find((n) => n.id === noteId);

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  if (title !== undefined) {
    note.title = title.trim();
  }
  if (content !== undefined) {
    note.content = content.trim();
  }

  res.status(200).json({
    message: "Note updated successfully",
    note: note
  });
});

// Task 7: DELETE /notes/:id - Delete a note by ID
app.delete("/notes/:id", (req, res) => {
  const noteId = parseInt(req.params.id);
  const noteIndex = notes.findIndex((n) => n.id === noteId);

  if (noteIndex === -1) {
    return res.status(404).json({ message: "Note not found" });
  }

  notes.splice(noteIndex, 1);

  res.status(200).json({
    message: "Note deleted successfully"
  });
});

// Task 1: Start Express Server on PORT 5000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

