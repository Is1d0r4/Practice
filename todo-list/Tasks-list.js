const tasks = [
  {
    id: 0,
    title: "Task 1",
    isDone: false,
  },
  {
    id: 1,
    title: "Task 2",
    isDone: true,
  },
  {
    id: 2,
    title: "Task 3",
    isDone: true,
  },
];

render(tasks);

function render(data) {
  const list = document.getElementById("tasksList");

  const listItemElements = data.map((task) => {
    return `
      <li class="tasks-list--item__${task.isDone ? "done" : "undone"}">
        <input type="checkbox" ${
          task.isDone ? "checked" : ""
        } onclick="toggleTaskStatus('${task.id}')"/>
        <label>${task.title}</label>
      </li>
    `;
  });

  list.innerHTML = listItemElements.join("");
}

function toggleTaskStatus(taskId) {
  tasks[taskId].isDone = !tasks[taskId].isDone;

  render(tasks);
}
