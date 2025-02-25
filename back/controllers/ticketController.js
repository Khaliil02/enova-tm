const {
    getTickets,
    getTicketById,
    getTicketByStatus,
    getTicketByPriority,
    createTicket,
    updateTicketStatus,
    deleteTicket,
} = require('../models/ticketModel');

const getAllTickets = async (req, res) => {
  try {
    const tickets = await getTickets();
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getTicket = async (req, res) => {
  const { id } = req.params;
  try {
    const ticket = await getTicketById(id);
    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }
    res.json(ticket);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getTicketsByStatus = async (req, res) => {
  const { status } = req.params;
  try {
    const tickets = await getTicketByStatus(status);
    if (tickets.length === 0) {
      return res.status(404).json({ error: 'No tickets found with the given status' });
    }
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getTicketsByPriority = async (req, res) => {
  const { priority } = req.params;
  try {
    const tickets = await getTicketByPriority(priority);
    if (tickets.length === 0) {
      return res.status(404).json({ error: 'No tickets found with the given priority' });
    }
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const modifyTicketStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const updatedTicket = await updateTicketStatus(id, status);
    if (!updatedTicket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }
    res.json(updatedTicket);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const removeTicket = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTicket = await deleteTicket(id);
    if (!deletedTicket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }
    res.json(deletedTicket);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllTickets,
  getTicket,
  getTicketsByStatus,
  getTicketsByPriority,
  modifyTicketStatus,
  removeTicket,
};