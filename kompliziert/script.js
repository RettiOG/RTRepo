let tasks = [];

function addTask() {
  const taskInput = document.getElementById('new-task');
  const taskName = taskInput.value.trim();
  
  if (taskName) {
    tasks.push({ id: Date.now(), name: taskName, completed: false });
    taskInput.value = '';
    renderTasks();
  } else {
    alert("Bitte eine Aufgabe eingeben.");
  }
}

function toggleTaskCompletion(taskId) {
  tasks = tasks.map(task =>
    task.id === taskId ? { ...task, completed: !task.completed } : task
  );
  renderTasks();
}

function deleteTask(taskId) {
  tasks = tasks.filter(task => task.id !== taskId);
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const taskElement = document.createElement('div');
    taskElement.className = `task ${task.completed ? 'completed' : ''}`;
    
    const taskName = document.createElement('span');
    taskName.className = 'task-name';
    taskName.textContent = task.name;
    taskName.onclick = () => toggleTaskCompletion(task.id);
    
    const taskButtons = document.createElement('div');
    taskButtons.className = 'task-buttons';
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.onclick = () => deleteTask(task.id);

    taskButtons.appendChild(deleteButton);
    taskElement.appendChild(taskName);
    taskElement.appendChild(taskButtons);
    taskList.appendChild(taskElement);
  });
}

renderTasks();
