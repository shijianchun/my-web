<template>
	<div class="title"><img :src="img" alt=""></div>
</template>
<script>
    
    export default {
      data() {
        return {
        }
      },
      props: ['img'],      
    }
</script>
<style scoped>
	div.title{
		width: 100%;
		text-align: center;
		padding: 30px 0;
	}
	div.title img { 
		width:20%;
	}
</style>