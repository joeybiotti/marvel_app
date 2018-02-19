// import creds from './creds/creds.js'

export default{
    search: function(searchTerm){
       return fetch(`http://gateway.marvel.com/v1/public/characters?name=${searchTerm}&apikey=${creds.apiKey}`)
        .then(res => res.json())
        .then(data =>  {
            return Response.data.children.map(data => data.data)
        })
        .catch(err => console.log(err));
    }
}