const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUser,
  addUser,
  modifyUser,
  removeUser,
} = require('../controllers/userController');

// Récupérer tous les utilisateurs
router.get('/', getAllUsers);

// Récupérer un utilisateur par ID
router.get('/:id', getUser);

// Créer un utilisateur
router.post('/', addUser);

// Mettre à jour un utilisateur
router.put('/:id', modifyUser);

// Supprimer un utilisateur
router.delete('/:id', removeUser);

module.exports = router;

