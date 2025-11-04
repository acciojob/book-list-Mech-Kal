// Event Listener for adding a book
document.getElementById('book-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission

    // Get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Validate (optional, since inputs have 'required' in HTML, but good practice)
    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields');
        return;
    }

    // Create new table row element
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');

    // Insert columns (tds) into the row
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">X</button></td>
    `;

    // Add the new row to the table body
    list.appendChild(row);

    // Clear the form fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
});

// Event Listener for deleting a book (Event delegation)
document.getElementById('book-list').addEventListener('click', function(e) {
    // Check if the clicked element has the class 'delete'
    if (e.target.classList.contains('delete')) {
        // The delete button is inside a <td>, which is inside a <tr> (the row we want to remove)
        e.target.parentElement.parentElement.remove();
    }
});