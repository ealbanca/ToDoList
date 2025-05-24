//Created an exportable saveList function to save the list to local storage (will be called on the script.js file)
export function saveList(taskList) {
    localStorage.setItem('data', taskList.innerHTML);
}

//Created an exportable loadList function to load the  saved list from local storage (will be called on the script.js file)
export function loadList(taskList) {
    taskList.innerHTML = localStorage.getItem('data') || "";
}