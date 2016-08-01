var todoList = document.getElementById("todoList");
var todoItemInput = document.getElementById("todoItemInput");
var addItemBtn = document.getElementById("addItemBtn");
var todoArray = ["Learn Vanilla JS", "Practice", "Practice More", "PRACTICE EVEN MORE"];

addItemBtn.onclick = function() {
    todoList.innerHTML = "";
    todoArray.push(todoItemInput.value);
    for (var i = 0; i < todoArray.length; i++) {
        todoList.innerHTML += "<li>" + todoArray[i] + "</li>";
    }
}
