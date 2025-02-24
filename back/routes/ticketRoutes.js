const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Récupérer tous les tickets
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tickets');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Créer un ticket
router.post('/', async (req, res) => {
  const { title, description, priority, created_by } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO tickets (title, description, status, priority, created_by)
       VALUES ($1, $2, 'open', $3, $4) RETURNING *`,
      [title, description, priority, created_by]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Mettre à jour le statut d'un ticket
router.put('/:id/status', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const result = await pool.query(
      'UPDATE tickets SET status = $1, last_updated = NOW() WHERE id = $2 RETURNING *',
      [status, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

