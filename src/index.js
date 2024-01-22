document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formInput = document.getElementById("new-task-description").value;
    const newTaskItem = document.createElement("li");
    newTaskItem.textContent = formInput;
    taskList.appendChild(newTaskItem);
    document.getElementById("new-task-description").value = "";
  });
});
