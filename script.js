document.querySelector("#addTask").onclick = function () {
  if (document.querySelector("#newTask input").value.length == 0) {
    alert("Task Cannot be Empty.");
  } else {
    document.querySelector("#tasks").innerHTML += `
          <div class="task">
              <span id="taskname">
                  ${document.querySelector("#newTask input").value}
              </span>
              <button class="delete">
                  Delete
              </button>
          </div>
      `;

    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    document.querySelector("#newTask input").value = "";
  }
};
