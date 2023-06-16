<script setup>
import { useTaskStore } from "../../store/TaskStore";

const { task } = defineProps(["task"]);
const taskStore = useTaskStore();
</script>
<template>
  <div class="task-container">
    <p
      @dblclick="taskStore.toggleFinished(task.id)"
      :class="{ 'line-throught': task.isFinished }"
    >
      {{ task.title }}
    </p>
    <div class="icons">
      <span
        @click="taskStore.deleteTask(task.id)"
        class="material-symbols-outlined"
      >
        delete
      </span>
      <span
        @click="taskStore.toggleFav(task.id)"
        class="material-symbols-outlined"
        :class="{ active: task.isFav }"
      >
        favorite
      </span>
    </div>
  </div>
</template>

<style>
.task-container {
  background-color: #fff;
  margin: 10px 0 0 0;
  border-radius: 4px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 20px;
}

.task-container p {
  margin: 0;
  color: #777;
  padding: 10px;
}

.task-container p.line-throught {
  text-decoration: line-through;
}

.task-container .icons {
  text-align: right;
}

.task-container .icons span {
  margin: 0 0 0 0.6rem;
  color: #bbb;
  cursor: pointer;
}
.task-container .icons span.active {
  color: red;
}
</style>