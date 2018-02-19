import marvel from './marvelapi'

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

//Add Event Listener
searchForm.addEventListener('submit', e =>{
    let searchTerm = searchInput.value;

    if(searchTerm === ''){
        showMsg('Please enter a Marvel Character!', 'alert-danger')
    }

    //Search Marvel API
    marvel.search(searchTerm)
    .then(results => {
        let output = `<div class="card card-columns">`
        results.forEach(hero => {
            output +=
                    `<div class="card>"
                        <img class="card-img top" src=" " alt="Card img top">
                        <h5 class="card-title">${hero.name}</h5>
                        <p class="card-text">${hero.description}</p>`;
        });

        output += `</div>`;
        document.getElementById('result').innerHTML = output;
    });

    e.preventDefault();
});


function showMsg(message, className) {
    let div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    let searchContainer = document.getElementById('search-container');
    let search = document.getElementById('search');

    //Insert msg
    searchContainer.insertBefore(div, search);

    //Timeout alert
    setTimeout(() => document.querySelector('.alert').remove(), 5000);
}