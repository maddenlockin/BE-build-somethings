import fetch from 'node-fetch';

//link to api: https://cat-fact.herokuapp.com
const rootAPIurl = 'https://cat-fact.herokuapp.com/facts';

export const fetchRandom = async () => {
    const randomFact = await fetch(`${rootAPIurl}/random`);
    const fact = await randomFact.json();
    return fact;
}