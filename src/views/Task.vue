<script setup>
import {useTask} from './useTask.js';
import { reactive } from 'vue'

const taskForm = reactive({
  name: '',
  description: '',
  priority: '',
  dueDate: ''
})

const tasks = reactive([])
const errors = reactive({})

const validateForm = () => {
  const newErrors = {}

  if (!taskForm.name.trim()) {
    newErrors.name = 'Task name is required.'
  }

  if (!taskForm.description.trim()) {
    newErrors.description = 'Description is required.'
  }

  if (!taskForm.priority) {
    newErrors.priority = 'Priority is required.'
  }

  if (!taskForm.dueDate) {
    newErrors.dueDate = 'Due date is required.'
  }

  Object.keys(errors).forEach((key) => delete errors[key])
  Object.assign(errors, newErrors)

  return Object.keys(newErrors).length === 0
}

const addTask = () => {
  if (!validateForm()) {
    return
  }

  tasks.push({
    id: Date.now(),
    name: taskForm.name.trim(),
    description: taskForm.description.trim(),
    priority: taskForm.priority,
    dueDate: taskForm.dueDate
  })

  taskForm.name = ''
  taskForm.description = ''
  taskForm.priority = ''
  taskForm.dueDate = ''

  Object.keys(errors).forEach((key) => delete errors[key])
}
</script>

<template>
  <div class="task-page">
    <h1>Task Page</h1>
    <p>This is About Task</p>

    <form @submit.prevent="addTask" class="task-form">
      <div class="form-group">
        <label for="task-name">Task Name: </label>
        <input id="task-name" v-model="taskForm.name" type="text" placeholder="Enter task name" />
        <small v-if="errors.name" class="error">{{ errors.name }}</small>
      </div>

      <div class="form-group">
        <label for="task-description">Description: </label>
        <textarea id="task-description" v-model="taskForm.description" placeholder="Short description"></textarea>
        <small v-if="errors.description" class="error">{{ errors.description }}</small>
      </div>

      <div class="form-group">
        <label for="task-priority">Priority: </label>
        <select id="task-priority" v-model="taskForm.priority">
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <small v-if="errors.priority" class="error">{{ errors.priority }}</small>
      </div>

      <div class="form-group">
        <label for="task-due-date">Due Date: </label>
        <input id="task-due-date" v-model="taskForm.dueDate" type="date" />
        <small v-if="errors.dueDate" class="error">{{ errors.dueDate }}</small>
      </div>

      <button type="submit">Add Task</button>
    </form>

    <div class="task-list">
      <h2>Tasks</h2>
      <ul v-if="tasks.length">
        <li v-for="task in tasks" :key="task.id" class="task-item">
          <strong>{{ task.name }}</strong>
          <p>{{ task.description }}</p>
          <span>Priority: {{ task.priority }}</span>
          <span>Due: {{ task.dueDate }}</span>
        </li>
      </ul>
      <p v-else>No tasks added yet.</p>
    </div>
  </div>
</template>