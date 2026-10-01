function addSubmit(btn) {
    var input = document.querySelector('input')
    var add = btn.nextElementSibling.nextElementSibling

    add.innerHTML += `<li>
    <span>${input.value}</span> <br>
    <button onclick="upDate(this)" class="green2">Update</button>
    <button onclick="delTdo(this)" class="delete2">Delete</button>
    </li>`

    input.value = ""
}

function del(btn) {
    var add = btn.nextElementSibling
    add.innerHTML = ""
}

function upDate(btn) {
    var list = btn.parentElement
    var oldText = list.querySelector("span").innerText
    var newList = prompt("Enter new List", oldText)

    if (newList) {
        list.querySelector("span").innerText = newList
    }
}

function delTdo(btn) {
    var old = btn.parentElement
    old.remove()
}

function enter(event) {
    if (event.key === "Enter") {
        addSubmit(document.querySelector(".green"))
    }
}