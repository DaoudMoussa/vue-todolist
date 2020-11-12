const app = new Vue({
    el: '#root',
    data: {
        todoList: [
            {
                text: 'studiare',
                status: 'not-done'
            },
            {
                text: 'leggere',
                status: 'not-done'
            },
            {
                text: 'palestra',
                status: 'not-done'
            }
        ],
        nextTodoItem: "",
    },
    methods: {
        addItem() {
            this.nextTodoItem = this.nextTodoItem.trim();
            if(this.nextTodoItem.length > 3) {
                let newTodoObject = { text: this.nextTodoItem, status: 'not-done'}
                this.todoList.push(newTodoObject);
            } else {
                alert("l'item dev'essere di almeno 4 caratteri!!")
            }
            this.nextTodoItem = "";
        },
        toggleItem(index) {

            let checkbox = document.getElementById('checkbox' + index);
            if (this.todoList[index].status == "not-done") {
                // Vue.set(this.statusArray, index, 'done');
                this.todoList[index].status = 'done';
                checkbox.checked = true;
            } else {
                this.todoList[index].status = 'not-done';

                // Vue.set(this.statusArray, index, 'not-done');
                checkbox.checked = false;
            }

        },
        getCheckboxId(index) {
            return "checkbox" + index;
        }
    }
});
