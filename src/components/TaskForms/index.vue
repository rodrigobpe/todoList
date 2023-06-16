
<script setup>
import { ref } from "vue";
import { useTaskStore } from "../../store/TaskStore";
const taskStore = useTaskStore();
const newTask = ref('');
const handleSubmit = () => {
  if (newTask.value.length > 0) {
    taskStore.addTask({
      title: newTask.value,
      isFav: false,
      isFinished:false,
      id: Math.floor(Math.random() * 10000),
    });
    newTask.value = ''
  }
};
</script>
<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="I need to..." v-model="newTask" />
    <button>Add</button>

  </form>
</template>

<style>
form{
    max-width: 400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 10px;
    margin: 2rem 0 2rem 0;
}

form input{
    padding: 1rem;
    outline: none;
    border-radius: 0.6rem;
    color: #555;
    font-size: 1.8rem;
    border:0;
}

form button{
    background-color: var(--color-yellow);
    border: 0;
    padding: 10px;
    border-radius: 0.6rem;
    cursor: pointer;
    font-size: 1.8rem;
}
</style>