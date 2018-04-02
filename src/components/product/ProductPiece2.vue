<template>
	<div class="piece_wap">
		<div class="piece">
			<img :src="img" alt="">
			<div class="produce-mes">
				<p slot="title">No border title</p>
				<p slot="title">No border title</p>
				<p slot="title">No border title</p>
				<p slot="title">No border title</p>
				<div class="more"><Button type="ghost"><span>&nbsp;&nbsp;查看&nbsp;&nbsp;</span></Button></div>
			</div>
		</div>	
		<div class="foot">产品型号：YGJM988977</div>
	</div>
	
</template>
<script>
    import img from '@/assets/组 201@2x.png'
    export default {
      data() {
        return {
          img
        }
      }       
    }
</script>
<style scoped>
	.piece_wap {
		
	}
	div.piece{
		width: 100%;
		padding: 0;
		border: 1px solid #E6E6E6;
	}
	
	div.piece img {
		width: 100%;
	}
	div.piece .produce-mes {
		position: absolute;
		top: 0;
		width: 254.52px;
		height: 262px;
		opacity: 0;		
		padding-top: 40px;
		padding-left: 39px;
		padding-right: 39px;
		line-height: 25px;
		color: #fff;
		transition: all .5s ease-out 0s;
        -webkit-transition: all .5s ease-out 0s;
        -moz-transition: all .5s ease-out 0s;
	}
    div.piece:hover .produce-mes{
		background:rgba(0,0,0,1);
		opacity:0.5;
		width: 254.52px;
		height: 262px;

	}
	.foot {
		position: relative;
		top: 0;
		width: 100%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		color: rgba(51,51,51,1);
	}
	.more {
		text-align: center;
		margin-top: 56px;
	}
	.more span {
		color: #fff;
	}	
</style>