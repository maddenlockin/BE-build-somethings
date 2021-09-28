import pool from '../utils/pool';

export default class Address {
    constructor(row) {
        this.id = row.id;
        this.address = row.street;
        this.place = row.name;
        this.state = row.state;
        this.city = row.city;
    }
// create/insert  
    static async insert({ address, place, state, city }) {
        console.log('hey model');
        const { rows } = await pool.query(
            'INSERT INTO restrooms (address, place, state, city) VALUES ($1, $2, $3, $4) RETURNING *',
            [address, place, state, city]
        );

        return new Address(rows[0]);
    }
}

