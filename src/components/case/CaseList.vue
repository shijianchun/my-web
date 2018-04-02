<template>
	<div class="case-wrap">
		<Row >
	        <Col span="24">
	        	<ImgTitle :img="img"></ImgTitle>
	        </Col>
			<Col class="case-list" span="6" v-for="i in 4">
	        	<CasePiece class="case"></CasePiece>
	        </Col>    
	    </Row>
		<Row class="more-wrap">
	        <Col span="24" class="more"><Button type="ghost"><span class="more">查看更多&nbsp;<Icon type="arrow-right-b"></Icon></span></Button></Col>       
	    </Row>    		
	</div>
	

</template>
<script>
	import ImgTitle from '@/components/ImgTitle'
	import CasePiece from '@/components/case/CasePiece'

    import img from '@/assets/title 拷贝1@2x.png'

    export default {
	  components: {
    		ImgTitle,
    		CasePiece
    	},    	
      data() {
        return {
          img
        }
      }       
    }
</script>
<style scoped>
	.case-wrap {
		width: 95%;
		margin: 10px auto;
		padding-bottom: 30px; 

	}
	.case-list:nth-child(2) .case:nth-child(1){
		border-left: 1px solid rgba(204,204,204,1); 
	} 
	.more-wrap {
		width: 95%;
		margin: 30px auto;
	}
	.more {
		text-align: right;
	}

</style>