<template>
  <div>
    <h1>{{content.title}}</h1>
  </div>
</template>

<script>
import content from '~/static/test.md';
export default {
  data() {
    return {
      content
    }
  }
}
</script>

<style scoped>

</style>
