let userForm = document.getElementById('userForm');
let firstNameInput = document.getElementById('firstNameInput');
let lastNameInput = document.getElementById('lastNameInput');
let emailInput = document.getElementById('emailInput');
let userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];


userForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let email = emailInput.value;

    let newRow = userTable.insertRow();
    let nameCell = newRow.insertCell();
    let lastNameCell = newRow.insertCell();
    let emailCell = newRow.insertCell();

    nameCell.innerText = firstName;
    lastNameCell.innerText = lastName;
    emailCell.innerText = email;

    firstNameInput.value = '';
    lastNameInput.value = '';
    emailInput.value = '';
});