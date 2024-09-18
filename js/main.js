'use strict';

//1
console.log(document.body.firstElementChild);
let element = document.body.firstElementChild;
let ulElem = element.nextElementSibling;
console.log(ulElem);
let liElem = ulElem.lastElementChild;
console.log(liElem);


//2

for(let i = 0; i<ulElem.childElementCount; i++){
    console.log(ulElem.children[i])
    ulElem.children[i].classList.add('list-item')
}

// 3

let count = +prompt('Введите число', 0);

for (let i = 0; i < count; i++) {
    let div = document.createElement('div');
    div.className ='krug';
    div.innerHTML = `${i+1} блок`;
    document.body.append(div);
}

// 4

let form = document.createElement('form');
let name1 = document.createElement('input');
let email = document.createElement('input');
let btn = document.createElement('button');

name1.placeholder = 'Имя';
email.placeholder = 'Email';
btn.innerHTML = 'Отправить';

document.body.append(form);
document.body.lastElementChild.append(name1);
document.body.lastElementChild.append(email);
document.body.lastElementChild.append(btn);

