const express = require('express');
const router = express.Router();
const {
  getAllTickets,
  getTicket,
  getTicketsByStatus,
  getTicketsByPriority,
  modifyTicketStatus,
  removeTicket,
} = require('../controllers/ticketController');

// Récupérer tous les tickets
router.get('/', getAllTickets);

// Récupérer un ticket par ID
router.get('/:id', getTicket);

// Récupérer des tickets par statut
router.get('/status/:status', getTicketsByStatus);

// Récupérer des tickets par priorité
router.get('/priority/:priority', getTicketsByPriority);

// Mettre à jour le statut d'un ticket
router.put('/:id/status', modifyTicketStatus);

// Supprimer un ticket
router.delete('/:id', removeTicket);

module.exports = router;

