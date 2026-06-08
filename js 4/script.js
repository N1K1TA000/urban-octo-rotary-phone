"use strict";

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.querySelector("#addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        
        console.log("Додано завдання:", taskText);
        
        taskInput.value = "";
    }
});

taskList.addEventListener("click", function(event) {
    if (event.target.nodeName === "LI") {
        console.log("Видалено завдання:", event.target.textContent);
        event.target.remove();
    }
});