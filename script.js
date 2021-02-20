let customSelect = document.querySelector('.custom-select');

// Create Custom Container For Ul
let customSelectContainer = document.createElement('div');
customSelectContainer.classList.add('custom-select-container');

// დავაგენერიროთ ჰედერი
let customSelectHead = document.createElement('div');
customSelectHead.classList.add('custom-select-head');
customSelectHead.innerText = customSelect.querySelector('select').getAttribute('data-title');
console.log(customSelectHead);
customSelectHead.addEventListener('click', function() {
    // გაქრეს ან გამოჩდენს ul აითემი
    this.parentNode.querySelector('ul').classList.toggle('visible');
});

// append head into the container
customSelectContainer.appendChild(customSelectHead);

// append container into the box
customSelect.append(customSelectContainer);

// დავაგენერიროთ ul ლისტი select-ის დახმარებით
let customUl = document.createElement('ul');
customUl.classList.add('custom-select-list');

// დავაგენერიროთ li აითემები
let options =customSelect.querySelectorAll('select option');
for (let i = 0; i < options.length; i++) {
    let customLi = document.createElement('li');
    customLi.innerText = options[i].innerText;
    customLi.setAttribute('data-value', options[i].getAttribute('value'));

    customLi.addEventListener('click', function() {
        let value = this.getAttribute('data-value');
        customSelect.querySelector('select option[value="'+value+'"]').selected = true;

        customSelectHead.innerText = this.innerText;
        this.parentNode.classList.remove('visible');
    });

    customUl.appendChild(customLi);
}

// მივამაგროთ ul კონტეინერს
customSelectContainer.appendChild(customUl);
