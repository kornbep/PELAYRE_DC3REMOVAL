<script>
    export default {
      data() {
        return {
          message: ('Hello World!')
        }
      },
      
      methods: {
        changeMessage() {
          this.message = ('Hi World!')
        },
        
        clear() {
          this.message = ('')
        }
      }
    }
  </script>

  <template>
    <div>
        <h1>Option API</h1>
      <h2>{{ message }}</h2>
  
      <button @click="changeMessage">Change Message</button>
      <button @click="clear">Clear</button>
    </div>
  </template>