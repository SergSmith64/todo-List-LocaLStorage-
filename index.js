window.onload = function() {

    // __ чтобы хранить список дел создаем глобальный пустой массив
    var todoList = [];

    // __ проверяю: есть ли что-то в localStorage
    if (localStorage.getItem('todo') != undefined) {
        // __ тогда достаем из него, преобразовав из строки __
        // __ в массив с помощью JSON.parse __
        todoList = JSON.parse(localStorage.getItem('todo'));
        // __ и все что там есть - выводим на страницу в OUT __
        out();
    }

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


        // console.log("__d__что здесь_?__ ", d);
        // console.log("__что здесь__d.value_?__ ", d.value);
        console.log("__массив TEMP__ ", temp);
        console.log("__i__что здесь_?__ ", i);

        // __ важно -- список дел добавляется в массив -- to-do list is added to the array __
        console.log("__ToDoList__что здесь_?__ ", todoList);
        // __ добавляю сюда функцию что идет ниже ___
        // __ СПИСОК ГОТОВ -- the list is ready and displayed on the page __
        out();

        // __ добавляю LocalStorage, предварительно преобразовав массив __
        // __ в строку с помощью функции JSON.stringify __
        // __ при нажатии кнопки делаю:
        localStorage.setItem( 'todo', JSON.stringify(todoList) );
    }

    // __ делаю вывод ДЕЛ, введенных через INPUT __
    // __ функция будет перебирать массив и формировать строку вывода
    function out() {
        // __ сначала делаю пустую строку, потом цикл
        var out = '';
        for (var key in todoList) {
            // __ добавляю чек-боксы ___
            // __ сначала проверяем состояние поле поля ЧЕК: temp.check = false;
            if(todoList[key].check == true) {
                // __ тогда вывожу в OUT __
                out += '<input type="checkbox" checked>';
            }
            else {
                out += '<input type="checkbox">';
            }

            // __ сначала вывожу сформировавшийся список дел __
            out += todoList[key].todo + '<br>';

            // __ теперь записываю его в Айди OUT на странице __
            document.getElementById('out').innerHTML = out;
        }
    }

    // ___ СТЕРЕТЬ ВСЕ ___
    document.getElementById('removeAll').onclick = function() {
        console.log("ВСЕ СТИРАЮ!!!");
        localStorage.clear();
        window.location.reload();
    }


    // onclick='window.location.reload()'

    // out += '<a href="#">WWWWWWWWW</a>';
}

