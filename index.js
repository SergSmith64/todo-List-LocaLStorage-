window.onload = function() {

    // __ чтобы хранить список дел создаем глобальный пустой массив
    var todoList = [];

    let a = todoList.length;
    console.log("__длина массива__ = ", a);

    document.getElementById('add').onclick = function() {
        // __ получаю значение из INPUT __
        // __ это то дело, которое нужно добавить __
        var d = document.getElementById('in').value;

        // __ добавлять дела буду в виде ассоциативного массива
        // { todo : Добавить дело, check: true / false }
        // __ сначала создаю промежуточный массив TEMP __
        var temp = {};
        // __ добавляю дело, которое я считал __
        temp.todo = d;
        temp.check = false;

        var i = todoList.length;
        todoList[i] = temp;


        console.log("__d__что здесь_?__ ", d);
        console.log("__что здесь__d.value_?__ ", d.value);
        console.log("__массив TEMP__ ", temp);
        console.log("__i__что здесь_?__ ", i);

        // __ важно -- список дел добавляется в массив -- to-do list is added to the array __
        console.log("__ToDoList__что здесь_?__ ", todoList);
    }
}