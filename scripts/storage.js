export function saveList() {
    localStorage.setItem('taskList', document.getElementById('taskList').innerHTML);
}