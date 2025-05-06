document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.querySelector("#newtask input");
    const taskSection = document.querySelector('.tasks');
    const pushButton = document.getElementById('push');


    pushButton.onclick = createTask;

    function createTask() {
        if (taskInput.value.trim().length === 0) {
            alert("The task field is blank. Enter a task name and try again.");
            return;
        }

        // Create task element
        const taskHTML = `
            <div class="task">
                <label id="taskname">
                    <input onclick="{updateTask(this)}" type="checkbox" class="check-task">
                    <p>${taskInput.value}</p>
                </label>
                <div class="delete">
                    <i class="uil uil-trash delete-btn" style="cursor: pointer;"></i>
                   
                </div>
            </div>
        `;

       taskSection.innerHTML += taskHTML;

        // Clear input
        taskInput.value = "";

        attachDeleteEvents();

    }

     // Attach delete event to all delete buttons again
     function attachDeleteEvents() {
     const deleteButtons = document.querySelectorAll(".delete");
     deleteButtons.forEach(button => {
         button.onclick = function () {
             this.parentNode.remove();
         };
     });
    }

    function updateTask(task) {
        let taskItem = task.nextElementSibling; // Refers to <p>
        if (task.checked) {
            taskItem.classList.add("checked");
        } else {
            taskItem.classList.remove("checked");
        }
    }
  });