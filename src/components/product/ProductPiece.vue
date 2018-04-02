<template>
	<div class="piece">
		<img :src="img" alt="">
		<div class="produce-mes">
			<p slot="title">No border title</p>
			<p slot="title">No border title</p>
			<p slot="title">No border title</p>
			<p slot="title">No border title</p>
			<div class="more"><Button type="ghost"><span>&nbsp;&nbsp;查看&nbsp;&nbsp;</span></Button></div>
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
	div.piece{
		width: 100%;
		padding: 0;
	}
	
	div.piece img {
		width: 100%;
	}
	div.piece .produce-mes {
		width: 100%;
		opacity: 0;
		position: absolute;
		top: 0;
		padding-top: 71px;
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
		width: 300px;
		height: 300px;

	}
	div.piece:hover .foot {
		opacity: 0;
	}
	.foot {
		position: relative;
		top: -45px;
		width: 100%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		color: #fff;
		background:rgba(0,0,0,1);
		opacity:0.5;
		transition: opacity .5s ease-out 0s;
        -webkit-transition: opacity .5s ease-out 0s;
        -moz-transition: opacity .5s ease-out 0s;

	}
	.more {
		text-align: center;
		margin-top: 56px;
	}
	.more span {
		color: #fff;
	}	
</style>