export function saveList(taskList) {
    localStorage.setItem('data', taskList.innerHTML);
}

export function loadList(taskList) {
    taskList.innerHTML = localStorage.getItem('data') || "";
}