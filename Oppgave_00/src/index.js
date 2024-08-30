// Oppgave 1
let btn1 = document.querySelector('#remove-btn');
btn1.addEventListener('click', () => {
    let content = document.getElementById('remove');
    content.textContent = '';
    // To remove the element itself: content.remove();
})
// Oppgave 2
let btn2 = document.querySelector('#change-btn');
btn2.addEventListener('click', () => {
    let content = document.getElementById("change");
    content.textContent = 'Different!'
})
// Oppgave 3
let inputField = document.querySelector('#input');
inputField.addEventListener('input', (e) => {
    let field = e.data;
    let output = document.getElementById('input-text');
    let string = output.textContent;
    if (e.data == null) {
        let strlen = string.length;
        console.log(strlen);
        string = string.slice(0, strlen-1);
    }
    else {
        string += field;
    }
    output.textContent = string;
})
// Oppgave 4
const myList = ['item one', 'item two', 'item three'];
let ulPropogated = false;
let btnList = document.querySelector('#write-list');
btnList.addEventListener('click', () => {
    if (ulPropogated === true) return;
    const ul = document.getElementById('ul');
    for (let i = 0; i < myList.length; i++) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(myList[i]));
        ul.appendChild(li);
    }
    ulPropogated = true;
})
// Oppgave 5
// Lag lytterene og funksjonene som gjør at du kan lage et et HTML element (gjerne fra en nedtrekkslist med id #select) 
// og tekst fra inputboksen med id #text. Bruk knappen med id #create. Legg teksten til elementet med id #placeholder
let dropDown = document.querySelector('#select'); // #select
/* Stupid but I'll keep it here for future reference.
let dropDownSelection = 'h2';
dropDown.addEventListener('change', () => {
    console.log(dropDown.value);
    dropDownSelection = dropDown.value;
}) 
*/ 
// let textString = '';
let textField = document.querySelector('#text'); // #text
/* Same naive thing going on here as earlier lol
textField.addEventListener('input', (e) => {
    if (e.data === null) {
        let strlen = textString.length;
        textString = textString.slice(0, strlen-1);
    } else {
        let content = e.data;
        textString += content;
        console.log(textString);
    }
})
*/
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
let textCreate = document.querySelector('#create') // #create
textCreate.addEventListener('click', () => {
    const placeholder = document.querySelector('#placeholder');
    const createdElement = document.createElement(dropDown.value);
    const elementContent = document.createTextNode(textField.value);
    createdElement.appendChild(elementContent);
    placeholder.appendChild(createdElement);
})
// Oppgave 6
// Oppgave 7
// Oppgave 8
