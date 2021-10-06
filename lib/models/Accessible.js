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

    static async getAll() {
        const { rows } = await pool.query(
            'SELECT * FROM access'
        );
        console.log(rows);
        return rows.map(row => {
            return new Accessible(row)
        });
    }

    static async getById(id) {
        const { rows } = await pool.query(
            'SELECT * FROM access WHERE id = $1',
            [id]
        );
        return new Accessible(rows[0]);
    }

    static async updateEntry(id, accessible) {
        const { rows } = await pool.query(
            'UPDATE access SET accessible=$2  WHERE id=$1 RETURNING *', [id, accessible]
        );
        return new Accessible(rows[0]);
    }

    static async deleteEntry(id) {
        const { rows } = await pool.query(
            'DELETE FROM access WHERE id=$1', 
            [id],
        );
        return rows[0];
    }
};
