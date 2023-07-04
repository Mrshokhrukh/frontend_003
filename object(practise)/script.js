let userRegister = {
    name: '',
    surname: '',
    email: '',
    password: ''
}

function signUp() {
    let name = document.getElementById('name').value
    let surname = document.getElementById('surname').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    userRegister.name = name
    userRegister.surname = surname
    userRegister.password = password
    userRegister.email = email
    if (name && surname && email && password) {
        if (password.length < 6) {
            document.querySelectorAll('p')[0].innerText = 'at least 6 characters    '
        }
        else {
            document.querySelectorAll('p')[0].innerText = 'Success Register'
            document.querySelectorAll('p')[0].style.color = 'green'
        }
    }
    else {
        document.querySelectorAll('p')[0].innerText = 'Register Failed'
        document.querySelectorAll('p')[0].style.color = 'red'
    }
}


let loginUser = {}

function signIn() {
    let name = document.querySelector('.name').value
    let email = document.querySelector('.email').value
    let password = document.querySelector('.password').value
    loginUser.name = name
    loginUser.email = email
    loginUser.password = password
    check()
}

function check() {
    if (loginUser.email ===
        userRegister.email &&
        loginUser.password === userRegister.password) {
        document.querySelectorAll('p')[1].innerText = 'Success Login'
        document.querySelectorAll('p')[1].style.color = 'green'
    } else {
        document.querySelectorAll('p')[1].innerText = 'Login Failed'
        document.querySelectorAll('p')[1].style.color = 'red'
    }
}