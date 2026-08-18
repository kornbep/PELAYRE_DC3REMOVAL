<script setup>
defineProps({
  name: String
})

function passingStudentName() {
  const displayName = "sinaw"
  return(
    <h3>Name: {displayName}</h3>
  )
}
</script>