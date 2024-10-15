const tasks = require("./task");
tasks.addTask("Learn Node js");
tasks.addTask("build a task manager");
tasks.addTask("Read a book on javascript");

tasks.listTasks();
tasks.completeTask(2);
tasks.listTasks();
tasks.deleteTask(1);
tasks.listTasks();
