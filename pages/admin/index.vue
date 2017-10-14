<template>
  <div class="test">
    <script src="https://unpkg.com/netlify-cms@^0.5.0/dist/cms.js"></script>
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        { 
          rel: "stylesheet", 
          href: "https://unpkg.com/netlify-cms@^0.5.0/dist/cms.css" 
        }
      ]
    }
  }
}
</script>
