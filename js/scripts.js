'use strict';

const createList = document.querySelectorAll('.listItem');
const getListItemButton = document.querySelector('#getInputList');
const myListDiv = document.querySelector('#myList');

function makeList(list) {
    const listElement = document.createElement('ul');

    list.forEach(function(input){
        const listItem = document.createElement('li');
        listItem.innerHTML = input.value;
        listElement.appendChild(listItem);
    });
    return listElement;
}


getListItemButton.addEventListener('click', function(event){
    event.preventDefault();
    const theList = makeList(createList);
    myListDiv.appendChild(theList);
});

