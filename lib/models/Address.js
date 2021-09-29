import pool from '../utils/pool.js';

export default class Address {
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
            'INSERT INTO wheredata (street, name, state, city) VALUES ($1, $2, $3, $4) RETURNING *',
            [street, name, state, city]
        );

        return new Address(rows[0]);
    }

    static async getAll() {
        const { rows } = await pool.query('SELECT * FROM wheredata');
        return rows.map((row) => new Address(row));
    }
}
