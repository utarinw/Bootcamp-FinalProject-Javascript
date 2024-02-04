    function addTaskToList() {
        var wordInput = document.getElementById('wordInput');
        var taskList = document.getElementById('taskList');

        if (wordInput.value.trim() !== '') {
            var task ={
                text: wordInput.value,
                completed: false
            };

            savedTask(task);

            var newTask = document.createElement('li');

            // Checkbox for completion
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';

            // Task text
            var textNode = document.createTextNode(wordInput.value);

            // Delete button
            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = function () {
                taskList.removeChild(newTask);
            };

            newTask.appendChild(checkbox);
            newTask.appendChild(textNode);
            newTask.appendChild(deleteButton);

            taskList.appendChild(newTask);

            wordInput.value = '';
        }
    }

    function SavedTask(task){
        let savedTasks = localStorage.getItem("tasks") || '[]';
        let savedTasksArray = JSON.parse(savedTasks);
        savedTasksArray.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(savedTasksArray));    
    }
