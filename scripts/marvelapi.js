
export default {
    search: function(searchTerm){
      return  fetch(`https://gateway.marvel.com:443/v1/public/characters?name=deadpool&apikey=`) //API KEY GOES HERE.
        .then(response => response.text())
        .then(text =>{
            try{
                const data = JSON.parse(text);
            } catch(err){
                console.log(err);
            }
        })
    }
}