    function addTaskToList() {
        var wordInput = document.getElementById('wordInput');
        var taskList = document.getElementById('taskList');

        if (wordInput.value.trim() !== '') {
            // Buat objek tugas
        var task = {
            text: wordInput.value,
            completed: false
        };

        // Simpan tugas ke dalam Local Storage
        saveTaskToLocalStorage(task);

        // Buat elemen li untuk tugas baru
        var newTask = createTaskElement(task);

        // Tambahkan elemen tugas baru ke dalam daftar
        taskList.appendChild(newTask);

        // Reset nilai input
        wordInput.value = '';
        }
    }

    function saveTaskToLocalStorage(task) {
        // Ambil tugas-tugas yang sudah ada dari Local Storage (jika ada)
        var existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
        // Tambahkan tugas baru ke dalam array tugas
        existingTasks.push(task);
    
        // Simpan array tugas ke dalam Local Storage
        localStorage.setItem('tasks', JSON.stringify(existingTasks));
    }

    function createTaskElement(task) {
        // Buat elemen li untuk tugas baru
        var newTask = document.createElement('li');
    
        // Checkbox untuk menandai selesai
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
    
        // Teks tugas
        var textNode = document.createTextNode(task.text);
    
        // Tombol hapus
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            // Hapus tugas dari Local Storage
            deleteTaskFromLocalStorage(task);
    
            // Hapus elemen li dari daftar
            taskList.removeChild(newTask);
        };
    
        newTask.appendChild(checkbox);
        newTask.appendChild(textNode);
        newTask.appendChild(deleteButton);
    
        return newTask;
    }

    function deleteTaskFromLocalStorage(task) {
        // Ambil tugas-tugas yang sudah ada dari Local Storage
        var existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
        // Hapus tugas yang sesuai dari array tugas
        var updatedTasks = existingTasks.filter(function (item) {
            return item.text !== task.text;
        });
    
        // Simpan array tugas yang diperbarui ke dalam Local Storage
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
