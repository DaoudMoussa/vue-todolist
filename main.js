const app = new Vue({
    el: '#root',
    data: {
        todoList: [
            'studiare',
            'leggere',
            'palestra'
        ],
        doneList: [],
        input: [],
        nextTodoItem: ""
    },
    methods: {
        addItem() {
            this.todoList.push(this.nextTodoItem);
            this.nextTodoItem = "";
        },
        addItemWEnter(event) {
            if(event.keyCode == 13) this.addItem();
        }
    }
});
