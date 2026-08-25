<script setup>
import { ref } from 'vue'

const studentName = ref('')
const studentID = ref('')
const course = ref('')
const yearLevel = ref('')
const email = ref('')

const emit = defineEmits(['student-submitted'])

function submitForm() {
  emit('student-submitted', {
    studentName: studentName.value,
    studentID: studentID.value,
    email: email.value,
    yearLevel: yearLevel.value,
    course: course.value

  
  })
}
</script>

<template>
  <div>
    <h1>Student Information Form</h1>
  </div>

  <form @submit.prevent="submitForm">
    <input type="text" v-model="studentName" placeholder="Student Name" required><br>
    <input type="text" v-model="studentID" placeholder="Student ID" required><br>
    <input type="email" v-model="email" placeholder="Email" required><br>
    <select v-model="course" required>
      <option value="">Select Course</option>
      <option value="BSIT">BSIT</option>
      <option value="BSCS">BSCS</option>
      <option value="BSIS">BSIS</option>
    </select><br>
    <input v-model="yearLevel" type="radio" value="1" /> 1st Year<br>
    <input v-model="yearLevel" type="radio" value="2" /> 2nd Year<br>
    <input v-model="yearLevel" type="radio" value="3" /> 3rd Year<br>
    <input v-model="yearLevel" type="radio" value="4" /> 4th Year<br>
    

    <button type="submit">Submit Student</button>
  </form>

  <hr>

  <p>Name: {{ studentName }}</p>
  <p>Student ID: {{ studentID }}</p>
  <p>Course: {{ course }}</p>
  <p>Year Level: {{ yearLevel }}</p>
  <p>Email: {{ email }}</p>

</template>