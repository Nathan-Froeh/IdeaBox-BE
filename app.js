import express from 'express';
import {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote
} from './database.js';

const app = express();

app.use(express.json())

app.get("/notes", async (req, res) => {
  const notes = await getNotes();
  res.send(notes)
})

app.get("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const note = await getNote(id);
  res.send(note)
})

app.post("/notes", async (req, res) => {
  const { title, content } = req.body;
  const note = await createNote(title, content)
  res.status(201).send(note)
})

app.put("/notes/:id", async (req, res) => {
  const { title, content } = req.body;
  const id = req.params.id;
  const note = await updateNote(id, title, content);
  res.send(note)
})

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const request = await deleteNote(id);
  res.status(204).send(request)
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(8080, () => {
  console.log('server is running on port 8080')
})