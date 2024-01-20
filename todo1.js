document.addEventListener("DOMContentLoaded", function() {
    const addTaskBtn = document.getElementById("addTaskBtn");
    addTaskBtn.addEventListener("click", addTask);
  });
  
  function addTask() {
    const taskInput = document.getElementById("taskInput").value.trim();
    const timeInput = document.getElementById("timeInput").value.trim();
    const taskList = document.getElementById("taskList");
  
    if (taskInput !== '') {
      const li = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "task-checkbox";
      const taskContent = document.createElement("span");
      taskContent.className = "task-content";
      taskContent.textContent = `${taskInput} - ${timeInput}`;
      const editButton = document.createElement("button");
      editButton.textContent = "✎";
      editButton.className = "edit-btn";
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "❌";
      deleteButton.className = "delete-btn";
  
      li.appendChild(checkbox);
      li.appendChild(taskContent);
      li.appendChild(editButton);
      li.appendChild(deleteButton);
      taskList.appendChild(li);
  
      clearInputFields();
  
      checkbox.addEventListener("change", function() {
        taskContent.style.textDecoration = checkbox.checked ? "line-through" : "none";
      });
  
      editButton.addEventListener("click", function() {
        editTask(li, taskContent);
      });
  
      deleteButton.addEventListener("click", function() {
        li.remove();
      });
    } else {
      alert("Please enter a task!");
    }
  }
  
  function clearInputFields() {
    document.getElementById("taskInput").value = '';
    document.getElementById("timeInput").value = '';
  }
  
  function editTask(li, taskContent) {
    const newTask = prompt("Edit task:", taskContent.textContent);
    if (newTask !== null) {
      taskContent.textContent = newTask;
    }
  }
  