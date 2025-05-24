export function saveList() {
    localStorage.setItem('data', taskList.innerHTML);
}

export function loadList() {
    taskList.innerHTML = localStorage.getItem('data') || "";
}