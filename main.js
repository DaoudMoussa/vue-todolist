const app = new Vue({
    el: '#root',
    data: {
        todoList: [
            'studiare',
            'leggere',
            'palestra'
        ],
        doneList: [],
        // input: [],
        nextTodoItem: "",
        statusArray: [],
        // itemStatus: ""
    },
    methods: {
        addItem() {
            this.todoList.push(this.nextTodoItem);
            this.statusArray.push("not-done");
            this.nextTodoItem = "";
        },
        addItemWEnter(event) {
            if(event.keyCode == 13) this.addItem();
        },
        toggleItem(index) {
            console.log(index);
            console.log(this.statusArray[index]);

            if (this.statusArray[index] == "not-done") {
                this.statusArray[index] = "done";
            } else {
                this.statusArray[index] = "not-done";
            }

            console.log(this.statusArray[index]);
            // Perché non cambia classe???
        }
    },
    created() {
        this.todoList.forEach(() => this.statusArray.push("not-done"))

    }
});
