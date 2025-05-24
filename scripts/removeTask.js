

export function removeTask(e) {
    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveList(taskList);
    }
}