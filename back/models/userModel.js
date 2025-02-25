const pool = require('../config/db');

const getUsers = async () => {
  const result = await pool.query('SELECT * FROM users');
  return result.rows;
};

const getUserById = async (id) => {
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows[0];
};

const createUser = async (name, email, is_admin) => {
  const result = await pool.query('INSERT INTO users (name, email, is_admin) VALUES ($1, $2, $3) RETURNING *', [name, email, is_admin]);
  return result.rows[0];
};

const updateUser = async (id, name, email, is_admin) => {
  const result = await pool.query('UPDATE users SET name = $1, email = $2, is_admin = $3 WHERE id = $4 RETURNING *', [name, email, is_admin, id]);
  return result.rows[0];
};

const deleteUser = async (id) => {
  const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};