<template>
  <div>
    <h1>{{content.title}}</h1>
    <img :src="content.thumbnail" alt="">
    <div class="test" v-html="content.__content"></div>
  </div>
</template>

<script>
import content from '~/_posts/blog/2017-10-14-i-haven-t-seen-land-for-six-weeks.md';
export default {
  data() {
    return {
      content
    }
  },
  mounted() {
    console.log(this.content)
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
}

</style>
