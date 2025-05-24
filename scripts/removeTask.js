//imported the saveList function from storage.js to keep the list updated
import { saveList } from './storage.js';

//created an exportable removeTask function, since it will be called on the script.js file
export function removeTask(e) {
    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveList(taskList);
    }
}