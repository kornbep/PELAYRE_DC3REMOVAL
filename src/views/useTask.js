import { ref } from 'vue'

export function useTask() {
  const tasks = ref([])

  function addTask(task) {
    if (task == null) return
    tasks.value.push(task)
  }

  function removeTask(id) {
    tasks.value = tasks.value.filter(record => record.id !== id)
  }

  return {
    tasks,
    addTask,
    removeTask
  }
}
