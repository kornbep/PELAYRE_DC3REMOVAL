<script setup>
import { ref } from 'vue'

const message = ref('Hello World!')

function changeMessage() {
  message.value = 'Hi World!'
}

function clear() {
  message.value = ''
}
</script>
<template>
  <div>
    <h1>Compostion API</h1>
    <h2>{{ message }}</h2>

    <button @click="changeMessage">Change Message</button>
    <button @click="clear">Clear</button>
  </div>
</template>