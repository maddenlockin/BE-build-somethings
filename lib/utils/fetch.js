import fetch from 'node-fetch';

const rootAPIurl = 'https://www.refugerestrooms.org/api';

export const fetchData = async () => {
    const allAddresses = await fetch(`${rootAPIurl}/v1/restrooms`);
    const res = await allAddresses.json();
    return res;
};
