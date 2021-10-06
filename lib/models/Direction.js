const pool = require('../utils/pool.js');

module.exports = class Direction {
    id;
    direction;
    address_name;

    constructor(row) {
        this.id = row.id;
        this.direction = row.direction;
        this.addressName = row.address_name;
    }

    static async create({ direction, addressName }) {
        const { rows } = await pool.query(
            'INSERT INTO directions (direction, address_name) VALUES ($1, $2) RETURNING *', [direction, addressName]
        );

        return new Direction(rows[0]);
    }
};