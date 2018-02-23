import creds from './creds/creds.js';
import marvel from './marvelapi';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

//Add Event Listener
searchForm.addEventListener('submit', e => {
    let searchTerm = searchInput.value;

    if (searchTerm === '') {
        showMsg('Please enter a Marvel Character!', 'alert-danger')
    }

    marvel.search(searchTerm)
        .then(results => {
            let output = `<div class="card-columns">`
            //Loop thru results
            results.forEach(post => {
                output += `
                    <div class="card">
                        <h5 class="card-title">${post.name}</h5>
                        <img class="card-img-top" src="${post.thumbnail.path}.${post.thumbnail.extension}" alt="Card Image Cap">
                        <p class="card-text">${post.description}</p>
                    </div>
                `
            }, this);
        })

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
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
}