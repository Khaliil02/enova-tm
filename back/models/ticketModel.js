const pool = require('../config/db');

const getTickets = async () => {
    const result = await pool.query('SELECT * FROM tickets');
    return result.rows;
}

const getTicketById = async (id) => {
    const result = await pool.query('SELECT * FROM tickets WHERE id = $1', [id]);
    return result.rows[0];
}

const getTicketByStatus = async (status) => {
    const result = await pool.query('SELECT * FROM tickets WHERE status = $1', [status]);
    return result.rows;
}

const getTicketByPriority = async (priority) => {
    const result = await pool.query('SELECT * FROM tickets WHERE priority = $1', [priority]);
    return result.rows;
};


const updateTicketStatus = async (id, status) => {
    const result = await pool.query(
        'UPDATE tickets SET status = $1, last_updated = NOW() WHERE id = $2 RETURNING *',
        [status, id]
    );
    return result.rows[0];
};

const deleteTicket = async (id) => {
    const result = await pool.query('DELETE FROM tickets WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
};

module.exports = {
    getTickets,
    getTicketById,
    getTicketByStatus,
    getTicketByPriority,
    updateTicketStatus,
    deleteTicket,
};