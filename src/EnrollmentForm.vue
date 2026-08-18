<script setup>
import {ref} from 'vue'

const name= ref('')
const StudentID = ref('')
const Email = ref('')
const Course = ref('')
const Year = ref('')
const confirmation = ref('')
const Reason = ref('')

</script>

<template>
    <form @submit.prevent="submitForm">
        <input v-model="name" type="text" placeholder="Enter your Student Name" /><br>
        <input v-model="StudentID" type="text" placeholder="Enter your Student ID" /><br>
        <input v-model="Email" type="email" placeholder="Enter your Email" /><br>
        <select v-model="Course">
            <option value="">Select your Course</option>
            <option value="IT">BSIT</option>
            <option value="CS">BSCS</option>
            <option value="IS">BSIS</option>
        </select><br>
        <input v-model="Year" type="radio" value="1" /> 1st Year<br>
        <input v-model="Year" type="radio" value="2" /> 2nd Year<br>
        <input v-model="Year" type="radio" value="3" /> 3rd Year<br>
        <input v-model="Year" type="radio" value="4" /> 4th Year<br>
        <input v-model="confirmation" type="checkbox" /> I confirm that I want to enroll in this Course<br>
        <input v-model="Reason" type="textbox" placeholder="Reason for Enrollment" /><br>
        <button type="submit">Submit</button>
    </form>

    <h4>Name: {{ field }} </h4>
    <h4>Student Name: {{ StudentName }} </h4>
    <h4>Student ID: {{ StudentID }} </h4>
    <h4>Email: {{ Email }} </h4>
    <h4>Course: {{ Course }} </h4>
    <h4>Year Level: {{ Year }} </h4>
    <h4>Reason for Enrollment: {{ Reason }}</h4>
</template>