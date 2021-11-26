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
  //clear list element
  while (listEl.firstChild) {
    listEl.removeChild(listEl.firstChild);
  }
  let remainingCount = list.length;
  //replace list element with current list array contents
  list.forEach((task, index) => {
    if (task.completed == true) {
      remainingCount--;
    }
    let item = document.createElement("li");
    item.setAttribute("data-index", index);
    item.classList.add("main__list-item");
    item.innerHTML = `
        ${checkCompleted(task)}
        <button class="main__delete" onclick="deleteTodo(this)">
            <img
                src="images/icon-cross.svg"
                alt="delete todo"
                class="main__cross"
            />
        </button>
    `;
    listEl.appendChild(item);
    index++;
  });
  remainingCount == 1
    ? (remainingTasks.innerHTML = remainingCount + " item left")
    : (remainingTasks.innerHTML = remainingCount + " items left");
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

function deleteTodo(item) {
  list.splice(item.parentNode.dataset.index, 1);
  updateList();
}

function clearCompleted() {
  list.forEach((item) => {
    if (item.completed == true) {
      list.splice(list.indexOf(item), 1);
    }
    updateList();
  });
}

function filterList(filter) {
  const listItems = document.querySelectorAll(".main__list-item");
  if (filter == showAll) {
    updateList();
  } else if (filter == showActive) {
    listItems.forEach((item) => {
      if (item.querySelector(".main__circle--completed")) {
        item.style.display = "none";
      } else {
        item.style.display = "flex";
      }
    });
  } else if (filter == showCompleted) {
    listItems.forEach((item) => {
      if (!item.querySelector(".main__circle--completed")) {
        item.style.display = "none";
      } else {
        item.style.display = "flex";
      }
    });
  }
}

function filterHandler(filter) {
  filterList(filter);
  document
    .querySelector(".main__filter")
    .querySelectorAll("button")
    .forEach((filter) => {
      filter.classList.remove("main__filter__selected");
    });
  filter.classList.add("main__filter__selected");
}

function addTodo() {
  const newTitle = newTodo.value.trim();
  list.push({ completed: false, title: newTitle });
  updateList();
  newTodo.value = "";
}

clearBtn.addEventListener("click", clearCompleted);

showAll.addEventListener("click", () => {
  filterHandler(showAll);
});
showActive.addEventListener("click", () => {
  filterHandler(showActive);
});
showCompleted.addEventListener("click", () => {
  filterHandler(showCompleted);
});

newTodo.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    addTodo();
  }
});
