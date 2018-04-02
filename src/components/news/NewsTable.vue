<template>
  <Row class="news-wrap">
    <WordTitle :title="title"></WordTitle>
    <Row>
      <Col>
      <Row class="list" v-for="news in showCurrentNewsList">
        <Col span="4">
	        <div class="day">09</div>
	        <div class="time">2018-09</div>
        </Col>
        <Col span="20">
	        <Row>
	          <Col class="news" span="24" >
		          <Row>
		            <Col span="18">
		            <div class="title">{{news.title}}</div>
		            </Col>
		          </Row>
		          <Row>
		            <Col span="24">
		            <div class="content">{{news.id}}</div>
		            </Col>
		          </Row>
	          </Col>
				<Col span="24" class="more">
			        <span>read  more</span>
			    </Col>	          
       		</Row>
        </Col>
        
      </Row>
      </Col>
    </Row>
    <Page ref="p" :total="total" :page-size="pageSize" @on-change="changePage"  show-total class="page"></Page>
  </Row>

</template>
<script>
	import Carousels from '@/components/Carousels'
	import WordTitle from '@/components/WordTitle'
	import img from '@/assets/title 拷贝 2@2x.png'
	import news from '@/../static/mock/dynamic-news.json'
    export default {
    	components: {
    		Carousels,
    		WordTitle
    	},
        data () {
        	return {
        		title:"新闻中心",
        		newsList: news,
        		currentNewsList: [],
        		currentPage:2,
        		initPageNum:1,//初始页
        		pageSize:3,
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
        	//this.currentPage = this.$refs.p.current;
        	this.initPage();
        	
        }
    }
</script>
<style scoped>
	.news-wrap {
		width: 95%;
		margin: 0 auto;
	}
	.news-wrap .list {
		padding-bottom: 20px;
		padding-top: 20px;
		border-bottom: 1px solid #E6E6E6;
	}
    .news-wrap .news {
    	font-size: 16px;
    	padding-bottom: 10px;
    }
	.news-wrap .news .title {
		margin-bottom: 5px;
		font-size:16px;
		color:rgba(77,77,77,1);
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;		
	}
	.news-wrap .news .content {
		font-size:14px;
		color:rgba(128,128,128,1);
		line-height:20px;
	}
	.news-wrap .more {
		width:100px;
		height:16px; 
		line-height: 16px;
		text-align: center;
		color: #ffffff;
		background:rgba(69,142,227,1);
		border-radius: 2px ;
		cursor: pointer;
		    
	}
	.news-wrap .more:hover {
		background: #57a3f3;	
	}
	
	.news-wrap .day {
		width:100px; 
		height:60px;
		margin: 0 auto;
		font-size:30px;
		line-height: 60px;
		text-align: center;
		color: rgba(69,142,227,1);
		background: rgba(242,242,242,1);		
		}     
	.news-wrap .time {
		width:100px;
		height:40px;
		margin: 0 auto;
		font-size:18px; 
		color:rgba(255,255,255,1);
		line-height:36px;		 
		text-align: center;
		background: rgba(69,142,227,1);
		
	}
	.news-wrap .page {
		margin-top: 40px;
		text-align: center;
	}
	
</style>

