import creds from './creds/creds.js';

export default {
    search : function (searchTerm) {
        return fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=thor&apikey='${creds.apiKey}`)
            .then(res => res.json())
            .then(data => data.data.children.map(data => data.data))
            .catch(error => console.log(error))
    }
};