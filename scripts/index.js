const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

//Add Event Listener
searchForm.addEventListener('submit', e => {
    let searchTerm = searchInput.value;

    if (searchTerm === '') {
        showMsg('Please enter a Marvel Character!', 'alert-danger')
    }

    //Search Function will go here.

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