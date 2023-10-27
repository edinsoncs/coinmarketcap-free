//DEXI 
//DEV ECS
import fetch from 'node-fetch';


//get coinmarketcap
export const getCoinmarketDefault = () => { 
    const api_website_pro = 'https://www.dexi.tools/coinmarketcap';

    return fetch(api_website_pro)
        .then(response => response.json())
        .then((data) => {
            return data;
        });
}

getCoinmarketDefault();