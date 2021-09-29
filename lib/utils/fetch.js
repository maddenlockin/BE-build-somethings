import fetch from 'node-fetch';

const rootAPIurl = 'https://www.refugerestrooms.org';

export const fetchData = async () => {
    const allWhereData = await fetch(`${rootAPIurl}/api/v1/restrooms`);
    const res = await allWhereData.json();
    return res;
};
