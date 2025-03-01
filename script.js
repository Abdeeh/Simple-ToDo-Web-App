const todoInput = document.querySelector('#todo-input');
const todoAddBtn = document.querySelector('#todo-add-btn');
const todoList = document.querySelector('#todo-list');
const todosCounterText = document.querySelector('#todos-counter');
let todosCounter = 0;

document.addEventListener('DOMContentLoaded', () => {
    todoAddBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if(!todoInput.value.trim()) {
            alert('Your input is empty!');
        } else {

        // increment todos counter
        todosCounter++;
        todosCounterText.textContent = todosCounter;

        // creation of the li + its attributes
        const todoListItem = document.createElement('li');
        todoListItem.classList.add('todo-item');

        // creation of the label + its attributes
        const todoLabel = document.createElement('label');
        todoLabel.classList.add('todo-item');
        todoLabel.setAttribute('for', `todo-${todosCounter}`);
        
        // creation of the checkbox + its attributes
        const todoCheckbox = document.createElement('input');
        todoCheckbox.setAttribute('id', `todo-${todosCounter}`);
        todoCheckbox.setAttribute('type', 'checkbox');

        // creation of the todo text container
        const todoTextSpan = document.createElement('span');
        todoTextSpan.textContent = todoInput.value;

        // preparing the todo to be added to the html
        todoLabel.appendChild(todoCheckbox);
        todoLabel.appendChild(todoTextSpan);

        todoListItem.appendChild(todoLabel);
        
        // add the todo to the html
        todoList.appendChild(todoListItem);


        // reset input
        todoInput.value = '';
        }
    });
});