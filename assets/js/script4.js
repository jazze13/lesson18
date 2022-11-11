'use strict';

const form = document.forms.calc;
const sumInput = document.querySelector('#initial');
const termInput = document.querySelector('#term');
const stakeInput = document.querySelector('#stake');
const result = document.querySelector('#result');

form.addEventListener('change', () => {
    let sum = parseInt(sumInput.value);
    let term = parseInt(termInput.value);
    let stake = parseFloat(stakeInput.value) / 100;

    result.textContent = parseInt( sum * (1 + stake / 12) ** term );
})