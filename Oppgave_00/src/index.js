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
// Originally had solved this with eventlisteners for dropdown (change) and textfield (input).
// Both would store the content in their own string variables.
// Then I figured out that was really dumb lol
const dropDown = document.querySelector('#select'); // #select
const textField = document.querySelector('#text'); // #text
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
const textCreate = document.querySelector('#create') // #create
textCreate.addEventListener('click', () => {
    if (textField.value === '') {
        alert(`Please input something..... :(`);
        return;
    }
    const placeholder = document.querySelector('#placeholder');
    const createdElement = document.createElement(dropDown.value);
    const elementContent = document.createTextNode(textField.value);
    createdElement.appendChild(elementContent);
    placeholder.appendChild(createdElement);
})
// Oppgave 6
// Lag lytteren til knappen med id #remove-li og funksjonen som gjør 
// at du ved hvert klikk sletter et og et li element fra ul med id #list
const removeButton = document.querySelector('#remove-li');
removeButton.addEventListener('click', () => {
    // Could also simply select the list itself (#list) and then do listItemToRemove.lastChild.remove
    // but when doing that, it requires two clicks to delete an item and I can't be bothered to debug it.
    const listItemToRemove = document.querySelector('#list li');
    if (listItemToRemove === null) {
        console.log('li returned null.')
        console.log('List likely empty.')
    } else listItemToRemove.remove();
})
// Oppgave 7
// Oppgave 8
