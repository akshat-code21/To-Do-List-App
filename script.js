console.log("this is script.js");

const addItems = document.getElementById("addItems");
const addBtn = document.getElementById("addBtn");
const displayList = document.getElementById("display-list");
let tasks = [];
addBtn.addEventListener("click", () => {
  let task = addItems.value.trim(); 
  if (task === "") {
    alert("Please enter a task");
    return;
  }
  if (tasks.includes(task)) {
    alert("Task already exists!");
    addItems.value = ""; 
    return;
  }
  addItems.value = "";
  tasks.push(task); 
  const newTask = createTaskElement(task);
  displayList.appendChild(newTask);
  setupTaskListeners(newTask);
});

function checkDuplicate(task) {
  document.querySelectorAll("li").forEach((e) => {
    console.log(e);
    if (e === task) {
      alert("This task already exists");
    }
  });
}

function createTaskElement(task) {
  const li = document.createElement("li");
  li.className =
    "relative mt-[10px] ml-[13px] mb-[10px] p-[px] text-[20px] cursor-pointer unchecked";
  li.textContent = task;

  const button = document.createElement("button");
  button.className = "absolute right-1 top-1/2 transform -translate-y-1/2";
  button.innerHTML =
    '<img src="src/cancel-01-stroke-rounded.svg" alt="Cancel" class="h-5 w-5" />';
  button.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(button);
  return li;
}


function setupTaskListeners(taskElement) {
  taskElement.addEventListener("click", toggleTask);
}


function toggleTask() {
  this.classList.toggle("checked");
  this.classList.toggle("unchecked");
}
