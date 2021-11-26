const lightSwitch = document.getElementById("light-switch");
const newTodo = document.getElementById("new-task");
const listEl = document.getElementById("list");
const remainingTasks = document.getElementById("remaining");
const clearBtn = document.getElementById("clear");
const showAll = document.getElementById("filter-all");
const showActive = document.getElementById("filter-active");
const showCompleted = document.getElementById("filter-completed");

const list = [
  { completed: false, title: "Buy turkey" },
  { completed: false, title: "Make stuffing" },
  { completed: true, title: "Buy booze" },
];

updateList();

function updateList() {
  let remainingCount = list.length;
  list.forEach((task) => {
    if (task.completed == true) {
      remainingCount--;
    }
    let item = document.createElement("li");
    item.classList.add("main__list-item");
    item.innerHTML = `
        ${checkCompleted(task)}
        <button class="main__delete" onclick="deleteTodo()">
            <img
                src="images/icon-cross.svg"
                alt="delete todo"
                class="main__cross"
            />
        </button>
    `;
    listEl.appendChild(item);
  });
  remainingTasks.innerHTML = remainingCount + " items left";
}

function checkCompleted(task) {
  return task.completed == true
    ? ` 
        <button class="main__circle main__circle--completed">
            <img src="images/icon-check.svg" alt="completed" />
        </button>
        <p class="main__task-name main__task-name--completed">${task.title}</p>
    `
    : `
        <button class="main__circle"></button>
        <p class="main__task-name">${task.title}</p>
        `;
}
