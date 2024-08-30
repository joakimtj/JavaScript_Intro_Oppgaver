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
let dropDown = document.querySelector('#select');
let inputField5 = document.querySelector('#text');
inputField5.addEventListener('input', (e) => {
    return;
})
// Oppgave 6
// Oppgave 7
// Oppgave 8
