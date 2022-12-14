const todoListElem = document.querySelector('#todo-container');

let todos = [{ content: "중간 프로젝트 DUE 2022-10-24 23:59"}];

const paintTodo = (todo) => {   
    const todoItemElem =document.createElement('div');
    todoItemElem.classList.add(...['todo-item','col',
    'col-12','p-2','input-group']);

    const todoElem = document.createElement('input');
    todoElem.type = "text";
    todoElem.disabled = true;
    todoElem.classList.add(...['todo','form-control']);
    todoElem.value = todo.content;
    todoItemElem.appendChild(todoElem);
    todoListElem.appendChild(todoItemElem);
}
const paintTodos = () => {
    todoListElem.innerHTML = null;
    todos.forEach(todo => { paintTodo(todo); });
}

const todoInputElem = document.querySelector('#todo-input');
const todoAddBtnElem = document.querySelector("#todo-btn-add");

const appendTodos = (text) => {
    const newTodos = todos.concat({ content: text });
    todos = newTodos;
    paintTodos();
}

const init = () => {
    todoAddBtnElem.addEventListener("click", () => {
        appendTodos(todoInputElem.value); todoInputElem.value = 
        '';
    });

    todoInputElem.addEventListener('keypress', (e) =>{
        if (e.key === 'Enter') {
            appendTodos(e.target.value); todoInputElem.value =
            '';
        }
    });
    paintTodos();
}

(function () {
    init();
})();



document.getElementById('toggle').onclick = function() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var checkbox of checkboxes) {
        checkbox.checked = !checkbox.checked;
    }
}





const createDeleteButton = (tableRecord) => {
    var index = tableRecord.rowIndex-1;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    deleteButton.addEventListener('click', () => {
      todos.splice(index, 1);
      showTodos();
    });
    return deleteButton;
  };


const deleteButton = document.createElement('button');
deleteButton.innerHTML = 'Delete';
listItem.appendChild(deleteButton);

deleteButton.addEventListener('click', evt => {
    evt.preventDefault();
    deleteTasks(deleteButton);
  });

const deleteTasks = (deleteButton) => {
    const chosenTask = deleteButton.closest('li');
    taskList.removeChild(chosenTask);
  };


  