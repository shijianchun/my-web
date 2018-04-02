<template>
	<div class="partner_wrap">
		<Row >
	        <Col span="24">
	        	<ImgTitle :img="img"></ImgTitle>
	        </Col>
			<Col span="24">
	        	<Row class="partner_div">
			        <Col :xs="12" :sm="8" :md="6" :lg="3" v-for="i in 16" class="partner_item">
			        	<img :src="img_p" alt="">
			        </Col>
			    </Row>   
	        </Col>    
	    </Row>   		
	</div>
	

</template>
<script>
	import ImgTitle from '@/components/ImgTitle'
    import img from '@/assets/title 拷贝3@2x.png'
    import img_p from '@/assets/1@2x.png'
    export default {
	  components: {
    		ImgTitle,
    	},    	
      data() {
        return {
          img,
          img_p
        }
      }       
    }
</script>
<style scoped>
	.partner_wrap {
		width: 95%;
		margin: 0 auto;
	}
	.partner_div {
		border-top: 1px solid #E6E6E6;
		border-left: 1px solid #E6E6E6;
	}
	.partner_item {
		border-right: 1px solid #E6E6E6;
		border-bottom: 1px solid #E6E6E6;
		text-align: center;
		padding: 28px 0;
	}

</style>