import mysql from 'mysql2';

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'ideabox_be'
}).promise()

export async function getNotes() {
  const [rows] = await pool.query("SELECT * FROM ideas");
  return rows;
}

export async function getNote(id) {
  const [rows] = await pool.query("SELECT * FROM ideas WHERE id = ?", [id]);
  return rows[0];
}

export async function createNote(title, content) {
  const [result] = await pool.query(`
  INSERT INTO ideas (title, content)
  VALUES( ?, ? )
  `, [title, content])
  const id = result.insertId
  return getNote(id);
}

export async function updateNote(id, title, content) {
  await pool.query(`
  UPDATE ideas
  SET title = ?, content = ?
  WHERE id = ?;
  `, [title, content, id])
  return getNote(id);
}

export async function deleteNote(id) {
  await pool.query(`
    DELETE FROM ideas WHERE id = ?;
  `, [id])
  return;
}

// const stuff = await createNote('some stuff', 'the description')
// console.log('stuff', stuff)

const update = await updateNote(3, 'title', 'content')
console.log('updated', update)

// const note = await getNote(1);
// console.log('note', note)
const notes = await getNotes();
console.log('notes', notes)
