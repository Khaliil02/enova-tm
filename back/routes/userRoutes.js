const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Récupérer tous les utilisateurs
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Créer un utilisateur
router.post('/', async (req, res) => {
  const { name, email, is_admin } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO users (name, email, is_admin) VALUES ($1, $2, $3) RETURNING *',
      [name, email, is_admin]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

