<template>
	<div class="case-piece">
		<img :src="img" alt="">
		<div class="case-mes">
			<p slot="title" class="title">No border title</p>
			<p slot="title">No border title</p>
			<p slot="title">No border title</p>
			<p slot="title">No border title</p>
			<div class="more"><Button type="text"><span><img :src="rightArrow" alt="" ><img :src="rightArrowActive" alt="" class="active"></span></Button></div>
		</div>
	</div>
</template>
<script>
    import img from '@/assets/组 207@2x.png'
    import rightArrow from '@/assets/向右箭头1@2x.png'
    import rightArrowActive from '@/assets/向右箭头@2x.png'
    export default {
      data() {
        return {
          img,
          rightArrow,
          rightArrowActive 
        }
      }       
    }
</script>
<style scoped>
	div.case-piece{
		text-align: center;
		width: 100%;
		padding: 0;
		border-top: 1px solid rgba(204,204,204,1);
		border-bottom: 1px solid rgba(204,204,204,1);
		border-right: 1px solid rgba(204,204,204,1); 
	}
	/* div.case-piece:nth-child(1){
		border-left: 1px solid rgba(204,204,204,1); 
	} */
	div.case-piece:hover {
		background:rgba(69,142,227,1);
		color: #fff;
	}
	div.case-piece:hover .case-mes{
		color: #fff;
	}
   	
	
	div.case-piece img {
		width: 90%;
		padding-top: 5%;
	}
	div.case-piece .case-mes {
		padding-top: 29px;
		padding-left: 5%;
		padding-right: 5%;
		text-align: left;
		color:rgba(51,51,51,1);
		line-height:27px;
		transition: all .5s ease-out 0s;
        -webkit-transition: all .5s ease-out 0s;
        -moz-transition: all .5s ease-out 0s;
	}
	.more {
		text-align: center;
		margin-top: 23px;
	}
	.more span {
		font-size: 23px;
	}
    .more span img {
		display: block;
		margin-bottom: 23px;
	}	
	.more span img.active {
		display: none;
	}

	div.case-piece:hover .case-mes .more span img{
		display: none;
	}			
    div.case-piece:hover .case-mes .more span img.active{
		display: block;
	}			
</style>