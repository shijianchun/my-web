<template>
    <Row class="news-wrap">
    	<ImgTitle :img="img"></ImgTitle>
        <Col  :sm="11" :md="11" :lg="11" ><Carousels></Carousels><span class="img-title">标题标题标题标题标题标题标题标题</span></Col>
        <Col  :sm="{ span: 12, offset: 1 }" :md="{ span: 12, offset: 1 }" :lg="{ span: 12, offset: 1 }">
			<Row>
		        <Col class="news" span="24" v-for="i in 5">
					<Row>
				        <Col span="18" ><div class="title">标题标题标题标题标题标题标题标题标题标题</div></Col>
				        <Col span="6"><div class="time">2017-08-19</div></Col>
	    			</Row>
		    		<Row>
				        <Col span="24" ><div class="content">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div></Col>
				       
		    		</Row>		        	
		        </Col>
    		</Row>
    	</Col>
    	<Col span="24" class="more"><Button type="primary" ><span class="more">查看更多&nbsp;<Icon type="arrow-right-b"></Icon></span></Button></Col>
    </Row>
</template>
<script>
	import Carousels from '@/components/Carousels'
	import ImgTitle from '@/components/ImgTitle'
	import img from '@/assets/title 拷贝 2@2x.png'
    export default {
    	components: {
    		Carousels,
    		ImgTitle
    	},
        data () {
        	return {
        		img
        	}
        }
    }
</script>
<style scoped>
	.news-wrap {
		width: 95%;
		margin: 0 auto;
	}
    .news {
    	font-size: 16px;
    	padding-bottom: 10px;
    	padding-top: 10px;
    	border-bottom: 1px solid rgba(242,242,242,1);
    }
	.title {
		font-weight: 700;
		margin-bottom: 5px;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;		
	}
	.img-title {
		position: relative;
	    top: -34px;
	    color: #fff!important;
	    z-index: 999;
	    padding-left: 20px;
	}
	.time {
		text-align: right;
	}
	.content {
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.more {
		padding-top: 30px;
		text-align: right;
	}
	
</style>
<style>
	.ivu-btn {
		border-radius: 0;
	}
</style>
