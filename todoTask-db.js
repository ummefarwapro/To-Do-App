
console.log("Firebase file loaded");

import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";

import {
    getDatabase,
    ref,
    set,
    get,
    update,
    remove

} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyDvibRTTwHkzGGAdhaS-DGDmCsyMrgmot8",
    authDomain: "tododatabase-web.firebaseapp.com",
    projectId: "tododatabase-web",
    databaseURL: "https://tododatabase-web-default-rtdb.firebaseio.com/",
    storageBucket: "tododatabase-web.firebasestorage.app",
    messagingSenderId: "1087795172266",
    appId: "1:1087795172266:web:2355358d028fc2be7851d3",
    measurementId: "G-616581FQ9N"
};


const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

console.log("Database connected:", database);


// create

window.saveTask = function(task) {

    var taskId = Date.now();

    var taskRef = ref(database, "tasks/" + taskId);

    set(taskRef, {
        task: task
    });

    return taskId;
}

// read

window.readTasks = function () {

    var tasksRef = ref(database, "tasks");

    get(tasksRef).then(function(snapshot) {

        var data = snapshot.val();

        var ul = document.getElementById("TodoList");

        ul.innerHTML = "";

        if (data) {

            for (var key in data) {

                var li = document.createElement("li");

                li.setAttribute("data-id", key);

                li.innerHTML = `
                    <span>${data[key].task}</span>

                    <button onclick="del(this)" class="delete2">
                        Delete
                    </button>

                    <button onclick="upDate(this)" class="green2">
                        Update
                    </button>
                `;

                ul.appendChild(li);
            }
        }

    }).catch(function(error) {

        console.log("Error:", error);

    });
}

readTasks()

// update

window.updateTask = function(taskId, newTask) {

    var taskRef = ref(database, "tasks/" + taskId);

    update(taskRef, {
        task: newTask
    });

}

// delete

window.deleteTask = function (taskId) {
    
    remove(ref(database, "tasks/" + taskId));

}

// delete All

window.deleteAll = function () {

    document.getElementById("TodoList").innerHTML = "";

    remove(ref(database, "tasks/"));

}























