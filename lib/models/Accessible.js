const pool = require('../utils/pool.js');

module.exports = class Accessible {
    id;
    accessible;

    constructor(row) {
        this.id = row.id;
        this.accessible = row.accessible;
    }

    static async create({ accessible }) {
        const { rows } = await pool.query(
            'INSERT INTO access (accessible) VALUES ($1) RETURNING *', [accessible]
        );

        return new Accessible(rows[0]);
    }
};
