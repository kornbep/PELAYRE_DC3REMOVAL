<script setup>
import { ref } from 'vue'

const name = ref('')
const age = ref('')
const address = ref('')
const course = ref('')
const year = ref('')

const fName = ref('')
const lName = ref('')
const mI = ref('')
const address2 = ref('')
const email = ref('')
const birthdate = ref('')
const sd = ref('')

</script>

<template>
    <form @submit.prevent="submitForm">
        <input v-model="name" type="text" placeholder="Enter your Name" /><br>
        <input v-model="age" type="number" placeholder="Enter your Age" /><br>
        <input v-model="address" type="text" placeholder="Enter your Address" /><br>
        <input v-model="course" type="text" placeholder="Course" /><br>
        <input v-model="year" type="number" placeholder="Year" /><br>
        <button type="submit">Submit</button>
    </form>

    <h4>Name: {{ name }} </h4>
    <h4>Age: {{ age }} </h4>
    <h4>Address: {{ address }} </h4>
    <h4>Course: {{ course }} </h4>
    <h4>Year: {{ year }} </h4>
    <form>
        <input v-model="fName" type="text" placeholder="Enter your First Name" /><br>
        <input v-model="lName" type="text" placeholder="Enter your Last Name" /><br>
        <input v-model="mI" type="text" placeholder="Enter your Middle Initial" /><br>
        <input v-model="address2" type="text" placeholder="Enter your Address" /><br>
        <input v-model="email" type="email" placeholder="Enter your Email" /><br>
        <input v-model="birthdate" type="date" placeholder="Enter your Birthdate" /><br>
        <input v-model="sd" type="text" placeholder="Short Description" /><br>
        <button type="submit">Submit</button>
        <select required>
            <option value="">Select Course</option>
            <option value="BSIT">BSIT</option>
            <option value="BSCS">BSCS</option>
            <option value="BSECE">BSECE</option>
        </select>
    </form>
    <h4>First Name: {{ fName }} </h4>
    <h4>Last Name: {{ lName }} </h4>
    <h4>Middle Initial: {{ mI }} </h4>
    <h4>Address: {{ address2 }} </h4>
    <h4>Email: {{ email }} </h4>
    <h4>Birthdate: {{ birthdate }} </h4>
    <h4>Short Description: {{ sd }} </h4>
</template>