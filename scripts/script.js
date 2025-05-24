import { removeTask } from "./removeTask.js";
import { addTask } from "./addTask.js";
import { saveList, loadList } from "./storage.js";

// Create container div
const container = document.createElement('div');
container.className = 'container';

// Create todo-list div
const todoList = document.createElement('div');
todoList.className = 'todo-list';

// Create and append, added h2
const heading = document.createElement('h2');
heading.textContent = 'To Do List';

// My name
const name = document.createElement('h3');
name.textContent = 'By: Hared Albancando Robles';

//Added Instructions
const instructions = document.createElement('p');
instructions.textContent = 'Please enter a new task. If you have already enter tasks, you can click on a task to mark it as completed, or click the "X" to remove a task. Remember to keep your list always updated.';

//Create entry div
const entry = document.createElement('div');
entry.className = 'entry';

// Create input field
const input = document.createElement('input');
input.type = 'text';
input.id = 'inputBox';
input.placeholder = 'Add a new task';

// Create add button
const button = document.createElement('button');
button.id = 'addButton';
button.textContent = 'Add';

//Append input field and Button to the entry div
entry.appendChild(input);
entry.appendChild(button);

// Create ul for tasks
const taskList = document.createElement('ul');
taskList.id = 'taskList';

//Add elements to the todo-list
todoList.appendChild(heading);
todoList.appendChild(name);
todoList.appendChild(instructions);
todoList.appendChild(entry);
todoList.appendChild(taskList);

//append todo-list to the container
container.appendChild(todoList);

//Append container to the body
document.body.appendChild(container);

loadList(taskList);

button.addEventListener('click', function () {
    addTask(input, taskList);
    saveList(taskList);

});

// Function to remove tasks from the todo list
todoList.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
        saveList(taskList);
    }
    else {
        removeTask(e, taskList);
    }
}, false);



