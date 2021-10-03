const fetch = require('node-fetch');

const rootAPIurl = 'https://www.refugerestrooms.org';

const fetchData = async () => {
    const allAddress = await fetch(`${rootAPIurl}/api/v1/restrooms`);
    const res = await allAddress.json();
    return res;  
};

module.exports = fetchData; 
