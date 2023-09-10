import "./assets/main.css"

import {createApp} from "vue"
import App from "./App.vue"

const app = Vue.createApp({
    data(){
        return{
            todolist:[],
            todo_item:"",
            select_index:-1,
        }
    },
    setup(){
        console.log("created");
    },
    methods:{
        insert_item(){
            this.todolist.push(this.todo_item);
            console.log(this.todolist);
            this.todo_item = "";
        },
        update_select_index(index, model){
            if (model == 'unchecked'){
                this.select_index = index;
            }
            else{
                this.select_index = -1;
            }
            
            console.log(index)
        },
        
        remove(){
            this.todolist.splice(this.select_index, 1)
            this.select_index = -1;
        }
    },

})

app.mount("#app")
//createApp(App).mount("#app")
