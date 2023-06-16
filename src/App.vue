<script setup>
import { ref } from 'vue';
import { useTaskStore } from './store/TaskStore';
import TaskDetails from './components/TaskDetails/index.vue'
import TaskForms from './components/TaskForms/index.vue'
const TaskStore = useTaskStore()
const filter = ref('all')
</script>

<template>
  <main>
    <header> 
      <div class="container">
        <h1>My Tasks</h1>
        <TaskForms/>
      </div>
    </header>

    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>
    <div class="task-list" v-if="filter === 'all'">
      <p>You Have {{ TaskStore.totalCount }} tasks left to do</p>
      <TaskDetails v-for="task in TaskStore.tasks" :key="task.id" :task="task"/>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ TaskStore.favsCount }} tasks left to do</p>
      <TaskDetails v-for="task in TaskStore.favs" :key="task.id" :task="task"/>
    </div>
  </main>
</template>

<style>
header{
  display: flex;
  height: 15rem;
  background-color: var(--color-gray);
  justify-content: center;
}

.container{
  margin: 4rem 0 0 0;
  text-align: center;
}
h1{
  margin: 0;
  color: #777;
  font-size: 3.6rem;
  font-weight: bold;
}

.task-list{
  max-width: 640px;
  margin: 20px auto;
}
main{
  background-color: var(--color-light-gray);
  height: 100vh;
}

p{
  font-size: 1.8rem;
  font-weight: 500;
}

.filter{
  width: 640px;
  margin: 10px auto;
  text-align: right;
}

.filter button{
  display: inline-block;
  margin-left: 10px;
  background: #fff;
  border: 2px solid #555;
  border-radius: 0.4rem;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 1em;

}
</style>
