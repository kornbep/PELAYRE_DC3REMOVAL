<script setup>
defineProps({
  studentName: String,
  studentID: String,
  email: String,
  course: String,
  yearLevel: String
})
</script>

<template>
  <div>
    <h1>Student Details</h1>
  <p>Name: {{ studentName }}</p>
  <p>Student ID: {{ studentID }}</p>
  <p>Course: {{ course }}</p>
  <p>Year Level: {{ yearLevel }}</p>
  <p>Email: {{ email }}</p>
    
  </div>
</template>