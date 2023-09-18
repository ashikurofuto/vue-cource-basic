Vue.createApp({
    data() {
        return {
            place : "Введите название заметки",
            title : 'Список заметок',
            inputValue : "",
            notes: []
        }
    },
    methods: {
        inputChangeHandler(e){
            this.inputValue = e.target.value;
        },
        addNewNote() {
            if(this.inputValue !== "") {
            this.notes.push(this.inputValue);
            this.inputValue = "";
            } 
        },
        removeNode(note)
        {
            this.notes = this.notes.filter(x => x !== notes);
        },
        toUpperCase(item) {
            return item.toUpperCase();
        }
    },
    computed : {
        doubleCountComputed()
        {
            return nodes.length * 2;
        }
    }, 
    watch: {
        inputValue(value) {
            console.log("InputValue change :" ,value);
        }
    }
}
).mount('#application');

