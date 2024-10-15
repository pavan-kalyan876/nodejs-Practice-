let tasks = [];
let idCounter = 1;
function addTask(title) {
  const task = {
    id: idCounter++,
    title,
    completed: false,
  };
  tasks.push(task);
  console.log(`Task added: ${task.title}`);
}
function completeTask(id) {
  const task = tasks.find((task) => task.id == id);
  if (task) {
    task.completeTask = true;
    console.log(`task completed:${task.title}`);
  } else {
    console.log(`task with id ${id} not found`);
  }
}
function deleteTask(id) {
  const index = tasks.findIndex((task) => task.id === id);
  if (index != -1) {
    const removedTask = tasks.splice(index, 1);
    console.log(`task deleted:${removedTask[0].title}`);
  } else {
    console.log(`Task with Id ${id} not found`);
  }
}
function listTasks() {
  console.log("Current tasks");
  tasks.forEach((task) => {
    console.log(`[${task.completed ? "x" : " "}] ${task.id}: ${task.title}`);
  });
}
module.exports = { addTask, completeTask, deleteTask, listTasks };
