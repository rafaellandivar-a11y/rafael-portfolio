const tasks = document.querySelectorAll(".task");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const resetButton = document.querySelector("#resetButton");

function loadSavedProgress() {
  tasks.forEach(function(task, index) {
    const savedValue = localStorage.getItem("task-" + index);

    if (savedValue === "true") {
      task.checked = true;
    }
  });
}

function saveProgress() {
  tasks.forEach(function(task, index) {
    localStorage.setItem("task-" + index, task.checked);
  });
}

function updateProgress() {
  let completedTasks = 0;

  tasks.forEach(function(task) {
    if (task.checked) {
      completedTasks++;
    }
  });

  const totalTasks = tasks.length;
  const percentage = (completedTasks / totalTasks) * 100;

  progressText.textContent = completedTasks + " von " + totalTasks + " Aufgaben erledigt";
  progressBar.style.width = percentage + "%";

  saveProgress();
}

tasks.forEach(function(task) {
  task.addEventListener("change", updateProgress);
});

resetButton.addEventListener("click", function() {
  tasks.forEach(function(task, index) {
    task.checked = false;
    localStorage.removeItem("task-" + index);
  });

  updateProgress();
});

loadSavedProgress();
updateProgress();