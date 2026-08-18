<script setup>
const props = defineProps({
  name: String,
  studentId: Number,
  email: String,
  course: Number,
  yearLevel: String,
  confirmation: Boolean,
  reason: String
})
</script>


<template>
<div>
    <p>Name: {{ props.name }}</p>
    <p>Student ID: {{ props.studentId }}</p>
    <p>Email: {{ props.email }}</p>
    <p>Course: {{ props.course }}</p>
    <p>Year Level: {{ props.yearLevel }}</p>
    <p>Confirmation: {{ props.confirmation }}</p>
    <p>Reason: {{ props.reason }}</p>
  </div>
</template>