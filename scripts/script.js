// Create container div
const container = document.createElement('div');
container.className = 'container';

// Create todo-list div
const todoList = document.createElement('div');
todoList.className = 'todo-list';

// Create and append, added h2
const heading = document.createElement('h2');
heading.textContent = 'To Do List';
todoList.appendChild(heading);

//Create entry div
const entry = document.createElement('div');
entry.className = 'entry';

// Create input field
const input = document.createElement('input');
input.type = 'text';
input.id = 'input';
input.placeholder = 'Add a new task';

// Create add button
const button = document.createElement('button');
button.id = button;
button.textContent = 'Add';

//Append input field and Button to the entry div
entry.appendChild(input);
entry.appendChild(button);

//Append entry to the todo-list div
todoList.appendChild(entry);

//append todo-list to the container
container.appendChild(todoList);

//Append container to the body
document.body.appendChild(container);

// Create ul for tasks
const taskList = document.createElement('ul');
taskList.id = 'taskList';

//Create li element
const li = document.createElement('li');
li.textContent = 'Task 1';
li.className = 'completed';

//append li to the taskList and todo-list div
taskList.appendChild(li);
todoList.appendChild(taskList);
