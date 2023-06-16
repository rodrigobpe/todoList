import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks:[
            {id:0,title:"Get a job",isFav:false,isFinished:false},
            {id:1,title:"Study 1hour per day of vue",isFav:true,isFinished:false},
        ],
    }),
    getters: {
        favs(){
            return this.tasks.filter(t => t.isFav)
        },
        favsCount(){
            return this.tasks.reduce((t,c) => {return c.isFav ? t+1 : t},0)
        },
        totalCount:(state) =>{
            return state.tasks.length
        }
    },
    actions: {
        addTask(task){
            return this.tasks.push(task)
        },
        deleteTask(id){
            this.tasks = this.tasks.filter(t => {
                return t.id != id
            })
        },
        toggleFav(id){
            const task = this.tasks.find(t => t.id === id)
            task.isFav = !task.isFav
        },
        toggleFinished(id){
            const task = this.tasks.find(t => t.id === id)
            task.isFinished = !task.isFinished
        }

    }
    
})