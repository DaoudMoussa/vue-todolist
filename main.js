const app = new Vue({
    el: '#root',
    data: {
        todoList: [
            'studiare',
            'leggere',
            'palestra'
        ],
        nextTodoItem: "",
        statusArray: [],
    },
    methods: {
        addItem() {
            if(this.nextTodoItem.length > 3) {
                this.todoList.push(this.nextTodoItem);
                this.statusArray.push("not-done");
            } else {
                alert("l'item dev'essere di almeno 4 caratteri!!")
            }
            this.nextTodoItem = "";
        },
        addItemWEnter(event) {
            if(event.keyCode == 13) this.addItem();
        },
        toggleItem(index) {

            let checkbox = document.getElementById('checkbox' + index);
            if (this.statusArray[index] == "not-done") {
                Vue.set(this.statusArray, index, 'done')
                checkbox.checked = true;
            } else {
                Vue.set(this.statusArray, index, 'not-done')
                checkbox.checked = false;
            }

        },
        getCheckboxId(index) {
            return "checkbox" + index;
        }
    },
    created() {
        this.todoList.forEach(() => this.statusArray.push("not-done"))
    }
});
