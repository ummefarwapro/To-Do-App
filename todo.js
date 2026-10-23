

function addSubmit() {
    var input = document.getElementById('TodoInput')

    var task = input.value

    if (task === "") {
        return; 
    }

    var taskId = saveTask(task);

    var ul = document.getElementById("TodoList")

    var li = document.createElement("li")

    li.setAttribute("data-id", taskId);

    li.innerHTML = `
    <span>${task}</span>
        <button onclick="del(this)" class="delete2"> Delete
    </button>
    <button onclick="upDate(this)" class="green2" >
        Update
    </button>

    `

    ul.appendChild(li)
    
    input.value = ""


}

function enter(e) {

   if (e.key === "Enter") {
    
    addSubmit()

   } 

}


function deleteAll() {

    document.getElementById("TodoList").innerHTML = "";

    remove(ref(database, "tasks/"));

}



function del(btn) {

    var li = btn.parentElement

    var taskId = li.getAttribute("data-id");

    li.remove();

    deleteTask(taskId);
}


function upDate(btn) {

    var li = btn.parentElement;

    var oldTask = li.querySelector("span").innerText;

    var newTask = prompt("Enter new task", oldTask);

    if (newTask !== null && newTask !== "") {

        li.querySelector("span").innerText = newTask;

        var taskId = li.getAttribute("data-id");

        updateTask(taskId, newTask);
    }
}































