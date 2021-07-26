const username = document.getElementById('username');
const password = document.getElementById('password');
const login = document.getElementById('submit');

const submitForm = () => {
    let user = username.value;
    let pass = password.value;

    alert(`
        Username : ${user}
        Password: ${pass}
    `);
}


login.addEventListener('click' , submitForm);