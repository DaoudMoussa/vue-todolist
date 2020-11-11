const app = new Vue({
    el: '#root',
    data: {
        todoList: [
            'studiare',
            'leggere',
            'palestra'
        ],
        doneList: [],
        nextTodoItem: "",
    },
    methods: {
        addItem() {
            if(this.nextTodoItem.length > 3) {
                this.todoList.push(this.nextTodoItem);
            } else {
                alert("l'item dev'essere di almeno 4 caratteri!!")
            }
            this.nextTodoItem = "";
        },
        addItemWEnter(event) {
            if(event.keyCode == 13) this.addItem();
        },
        todoToDone(item, index) {
            this.doneList.push(this.todoList[index]);
            this.todoList.splice(index, 1);
        },
        doneToTodo(item, index) {
            this.todoList.push(this.doneList[index]);
            this.doneList.splice(index, 1);
        }
    }
});
