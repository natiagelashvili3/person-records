let form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let errors = 0;

    let inputs = document.getElementsByClassName('required');

    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            errors++;

            if(!inputs[i].parentNode.classList.contains('error')) {
                inputs[i].parentNode.classList.add('error');
                let span = document.createElement('span');
                span.innerText = "*Required Field";
                inputs[i].parentNode.appendChild(span);
            }

        } else {
            inputs[i].parentNode.classList.remove('error');
            if (inputs[i].parentNode.querySelector('span')) {
                inputs[i].parentNode.querySelector('span').remove();
            }
        }
    }

    if(errors == 0) {
        form.submit();
    }

});
