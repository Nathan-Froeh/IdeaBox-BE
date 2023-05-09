import mysql from 'mysql2';

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'ideabox_be'
}).promise()

const [rows] = await pool.query("SELECT * FROM ideas");
console.log('rows', rows)
