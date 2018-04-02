<template>
	<div class="title"><div><span>{{title}}</span></div></div>
</template>
<script>
    
    export default {
      data() {
        return {
        }
      },
      props: ['title'],      
    }
</script>
<style scoped>
	div.title{
		width: 100%;
		text-align: center;
		padding: 30px 0;
	}
	div.title div { 
		width: 200px;
		margin: 0 auto;
		padding-bottom: 12px;
		border-bottom: 1px solid #458EE3;
	}
	div.title span { 
		width: 120px;
		margin: 0 auto;
		font-size:26px;
		color:rgba(77,77,77,1);
		line-height:36px;
		padding-bottom: 15px;
		border-bottom: 3px solid #458EE3;
	}

</style>