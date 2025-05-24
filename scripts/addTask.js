//imported the saveList function from storage.js
import { saveList } from "./storage.js";

//created an exportable addtask function, since it will be called on the script.js file
export function addTask(input, taskList) {
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
    saveList(taskList);
}