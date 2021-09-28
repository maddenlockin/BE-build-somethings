import fetch from 'node-fetch';

const rootAPIurl = 'https://www.refugerestrooms.org/api';

export const fetchRandom = async () => {
    const randomFact = await fetch(`${rootAPIurl}/v1/restrooms`);
    const fact = await randomFact.json();
    return fact;
    console.log('hey utils fact');
};
