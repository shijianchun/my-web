<template>
	<div class="product-wrap">
		<Row >
	        <Col span="24">
	        	<ImgTitle :img="img"></ImgTitle>
	        </Col>
			<Col span="24">
	        	<ImgSlide></ImgSlide>
	        </Col>    
	    </Row>
		<Row class="more-wrap">
	        <Col span="24" class="more"><Button type="ghost"><span class="more">查看更多&nbsp;<Icon type="arrow-right-b"></Icon></span></Button></Col>       
	    </Row>    		
	</div>
	

</template>
<script>
	import ImgTitle from '@/components/ImgTitle'
	import ImgSlide from '@/components/ImgSlide'
    import img from '@/assets/title 拷贝@2x.png'
    export default {
	  components: {
    		ImgTitle,
    		ImgSlide
    	},    	
      data() {
        return {
          img
        }
      }       
    }
</script>
<style scoped>
	.product-wrap {
		width: 100%;
		margin: 10px auto;
		padding-bottom: 30px;
		background:rgba(246,246,246,1);         
	}
	.more-wrap {
		width: 95%;
		margin: 30px auto;
	}
	.more {
		text-align: right;
	}

</style>