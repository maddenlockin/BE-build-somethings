const pool = require('../utils/pool.js');

module.exports = class Address {
    // id;
    // street;
    // name;
    // state;
    // city;

    constructor(row) {
        this.id = row.id;
        this.street = row.street;
        this.name = row.name;
        this.state = row.state;
        this.city = row.city;
    }
    // create/insert
    static async insert({ street, name, state, city }) {
        //console.log('hey model');
        const { rows } = await pool.query(
            'INSERT INTO Address (street, name, state, city) VALUES ($1, $2, $3, $4) RETURNING *',
            [street, name, state, city]
        );

        return new Address(rows[0]);
    }

    static async getAll() {
        const { rows } = await pool.query('SELECT * FROM Address');
        return rows.map((row) => new Address(row));
    }

    static async getById(id) {
        const { rows } = await pool.query(
            'SELECT * FROM Address WHERE id = $1',
            [id]
        );
        return new Address(rows[0]);
    }

    static async updateEntry(id, street, name, state, city) {
        const { rows } = await pool.query(
            'UPDATE Address SET street=$2, name=$3, state=$4, city=$5 WHERE id=$1 RETURNING *', [id, street, name, state, city]
        );
        return new Address(rows[0]);
    }
};

