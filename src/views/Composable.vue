<script>

import {StudentScore} from './StudentScore.js';

export default{
    mixins: [StudentScore],

}

</script>

<template>
   <p>This is Composable Page</p>
   <p>Score: {{ score }}</p>
   <button @click="addScore">Add Score</button>
   <button @click="decreaseScore">Decrease Score</button>
   <button @click="resetScore">Reset Score</button>
</template>
