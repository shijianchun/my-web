<template>
	<Row class="product_wrap">
		<Col span="24">
			<Tabs value="name1" class="table">
		        <TabPane label="PA7系列除臭设备" name="name1">
		        	<Row class="product_wrap">
						<Col span="6"  v-for="i in showCurrentNewsList">
							<ProductPiece class="piece_item"></ProductPiece>
						</Col>
						<Col span="24">
							<Page ref="p" :total="total" :page-size="pageSize" @on-change="changePage"  show-total class="page"></Page>
						</Col>						
						
					</Row>
		        </TabPane>
		        <TabPane label="PA7水喷淋塔" name="name2">
					<Col span="6"  v-for="i in 16">
						<ProductPiece class="piece_item"></ProductPiece>
					</Col>
							        	
		        </TabPane>
		        <TabPane label="光解设备" name="name3">
					<Col span="6"  v-for="i in 16">
						<ProductPiece class="piece_item"></ProductPiece>
					</Col>
					
		        </TabPane>
		    </Tabs>		
		</Col>
	</Row>
</template>
<script>
	import ProductPiece from '@/components/product/ProductPiece2'
	import news from '@/../static/mock/dynamic-news.json'

    export default {
        components: {
	    	ProductPiece
    	},
    	data() {
	       return {
        		title:"新闻中心",
        		newsList: news,
        		currentPage:2,
        		initPageNum:1,//初始页
        		pageSize:4,
        		total: 0
        	}
		},
 		computed: {
			showCurrentNewsList(){
        		return this.newsList.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize);
        	}        	
        },
        methods: {
        	initPage(){
        		this.total = this.newsList.length;
        		//this.showCurrentNewsList(this.current);
        	},
        	changePage(idx){
        		this.currentPage = idx;
        	}

        },
        mounted(){
        	this.initPage();
        	
        }		
    }
</script>
<style scoped>
	.product_wrap {
		width: 95%;
		margin: 0 auto;
	}
	.product_wrap .piece_item {
	    width: 90%;
	    margin: 0 auto;
	}
	.page {
		margin-top: 40px;
		text-align: center;
	}	

</style>
<style>
	.product_wrap .ivu-tabs-nav {
		margin-left: 404px;
	}

</style>
