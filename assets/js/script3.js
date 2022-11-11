'use strict';

const table = document.querySelector('#bagua-table');
const buttons = document.querySelector('.cell-buttons');
const ok = document.querySelector('.button-ok');
const cancel = document.querySelector('.button-cancel');

let currentCell;

table.addEventListener('click', event => {
    if (currentCell) {
        if (currentCell.firstElementChild.tagName == 'TEXTAREA') return;
    }

    if (event.target.tagName != 'TD') return;

    currentCell = event.target;

    const initialContent = currentCell.innerHTML.replace(/\n+/g, '');
    
    currentCell.innerHTML = `<textarea>${initialContent}</textarea>`
    
    const txta = currentCell.querySelector('textarea');
    txta.focus();
    
    buttons.style.display = '';
    currentCell.appendChild(buttons);

    ok.onclick = () => {
        currentCell.innerHTML = txta.value;
        buttons.style.display = 'none';
    }

    cancel.onclick = () => {
        currentCell.innerHTML = initialContent;
        buttons.style.display = 'none';
    }
})
