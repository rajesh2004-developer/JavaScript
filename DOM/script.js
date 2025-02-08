const pre = document.querySelector('.preview');
const firstLi = document.querySelector('li');
const ul = document.querySelector('ul');
const h1 = document.querySelector('h1');

// Inner Elements

console.log(pre.innerHTML);
console.log(pre.innerText);
console.log(pre.textContent);

//Class

console.log(pre.classList);

// Siblings

console.log(firstLi.parentElement);
console.log(firstLi.nextElementSibling.textContent);

//style

console.log(h1.style);

// Element Management
// create element

const h2 = document.createElement('h2');
h2.innerHTML = 'This is a subtopic Tag';
console.log(h2);

// appendchild

const body = document.body;
body.appendChild(h2);

//insertBefore

const li = document.createElement('li');
li.innerText = '0';
ul.insertBefore(li, firstLi);

// insertAdjacentElement

const p = document.querySelector('p');
const i = document.createElement('i');
i.innerText = "I'm Italic";

p.insertAdjacentElement('beforeBegin', i);
p.insertAdjacentElement('afterBegin', i);
p.insertAdjacentElement('beforeEnd', i);
p.insertAdjacentElement('afterEnd', i);

//append

const div = document.querySelector('div');
const span = (document.createElement('span').innerText = 'I am a span element');
div.style.backgroundColor = 'blue';
div.append(span);

//prepend

div.prepend(span);

//removeChild

ul.removeChild(li);

// remove

ul.remove();

//events

pre.addEventListener('mousedown', () => {
  pre.classList.toggle('color-pre');
});
