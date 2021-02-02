let form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let errors = [];

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let repeat_password = document.getElementById('repeat_password').value;
    
    if (!username) {
        errors.push("Username is empty");
    }

    if (!password) {
        errors.push("Password is empty");
    }

    if (!repeat_password) {
        errors.push("Repeat Password is empty");
    }

    if (password !== repeat_password) {
        errors.push("Passwords does not match");
    }

    if (errors.length > 0) {
        document.getElementById('errors').innerText = errors.join(", ");
    } else {
        form.submit();
    }

});
