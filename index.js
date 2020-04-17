window.onload = function() {

    var todoList = [];
    let a = todoList.length;
    console.log("__длина массива__ = ", a);

    document.getElementById('add').onclick = function() {
        var d = document.getElementById('in').nodeValue;
        console.log(d);
    }
}