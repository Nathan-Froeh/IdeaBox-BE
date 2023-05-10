import mysql from 'mysql2';

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'ideabox_be'
}).promise()

async function getNotes() {
  const [rows] = await pool.query("SELECT * FROM ideas");
  return rows;
}

async function getNote(id) {
  const [rows] = await pool.query("SELECT * FROM ideas WHERE id = ?", [id]);
  return rows[0];
}

const note = await getNote(1);
console.log('note', note)
