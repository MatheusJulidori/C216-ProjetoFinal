import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || 'db',
  user: process.env.MYSQL_USER || 'carro_user',
  password: process.env.MYSQL_PASSWORD || 'senha123',
  database: process.env.MYSQL_DATABASE || 'carro_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;