function createElements() {
    let body = document.querySelector('body');
    let input = document.createElement('input');
    input.placeholder = 'Enter Text Here';
    let button = document.createElement('button');
    button.textContent = 'Submit for changes';
    button.addEventListener('click', function () {
        changeLetters(input.value, body);
    });
    body.appendChild(input);
    body.appendChild(button);
}

function changeLetters(submit, body) {
    let text = document.createElement('h2');
    if (submit.length <= 3) {
        if (submit === submit.toUpperCase()) {
            text.textContent = submit.toLowerCase();
        } else if (submit === submit.toLowerCase()) {
            text.textContent = submit.toUpperCase();
        }
    } else {
        text.textContent = submit.toLowerCase();
    }
    body.appendChild(text);
}

createElements();
