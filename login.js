const username = document.getElementById('username');
const password = document.getElementById('password');
const login = document.getElementById('submit');

const submitForm = () => {
    let user = username.value;
    let pass = password.value;
    let message = '';
    if(user && pass) {
        message = `
            Username : ${user}
            Password: ${pass}
        `
    } else {
        message = `Data tidak valid!`;
    }

    alert(message);
}


login.addEventListener('click' , submitForm);