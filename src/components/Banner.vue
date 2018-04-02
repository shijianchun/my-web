<template>
	<div><img :src="banner" alt=""></div>
</template>
<script>
    import banner from '@/assets/图层 8@2x.png'
    export default {
      data() {
        return {
          banner
        }
      }       
    }
</script>
<style scoped>
	img { width:100%;}
</style>