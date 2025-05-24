// Imported all needed functions from other js files
import { removeTask } from "./removeTask.js";
import { addTask } from "./addTask.js";
import { saveList, loadList } from "./storage.js";

// Create container div, this will hold the todo-list
const container = document.createElement('div');
container.className = 'container';

// Create todo-list div, this will hold the heading, name, instructions, entry and task list
const todoList = document.createElement('div');
todoList.className = 'todo-list';

// Create and append, added h2
const heading = document.createElement('h2');
heading.textContent = 'To Do List';

// Added my name
const name = document.createElement('h3');
name.textContent = 'By: Hared Albancando Robles';

//Added Instructions at the top of the list
const instructions = document.createElement('p');
instructions.textContent = 'Please enter a new task. If you have already enter tasks, you can click on a task to mark it as completed, or click the "X" to remove a task. Remember to keep your list always updated.';

//Create entry div ( will hold the input field and button)
const entry = document.createElement('div');
entry.className = 'entry';

// Create input field (to enter new tasks)
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

//Load the list from local storage
loadList(taskList);

// Add event listener to the button to add entered tasks by user
button.addEventListener('click', function () {
    addTask(input, taskList);
    saveList(taskList);

});

// Function to remove existing tasks from the todo list
todoList.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
        saveList(taskList);
    }
    else {
        removeTask(e, taskList);
    }
}, false);



