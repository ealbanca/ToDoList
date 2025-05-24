// Create container div
const container = document.createElement('div');
container.className = 'container';

// Create todo-list div
const todoList = document.createElement('div');
todoList.className = 'todo-list';

// Create and append, added h2
const heading = document.createElement('h2');
heading.textContent = 'To Do List';

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
todoList.appendChild(entry);
todoList.appendChild(taskList);

//append todo-list to the container
container.appendChild(todoList);

//Append container to the body
document.body.appendChild(container);

button.addEventListener('click', function () {
    if (input.value === '') {
        alert('Please enter a task');
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        taskList.appendChild(li);
    }
    input.value = '';
    //saveTask();
});

// Function to remove tasks from the todo list

todoList.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
}, false);

