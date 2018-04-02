<template>
	<div class="contact">
		<div class="bg">
			<img :src="img" alt="">
			<ImgTitle :img="title" class="bg_title"></ImgTitle>
		</div>
		<div class="contact_way">
			<img :src="mesBg" alt="" class="contact_bg">
			<div slot="title" class="mes">
				<p class="title">联系我们</p>
				<p v-for="i in 6">
					地址：阿萨德好卡实打实安徽的话说得好啊
				</p>				
			</div>
		</div>
	</div>
</template>
<script>
    import ImgTitle from '@/components/ImgTitle'
    import img from '@/assets/组 21@2x.png'
    import title from '@/assets/title 拷贝2@2x.png'
    import mesBg from '@/assets/组 211@2x.png'

    export default {
	  components: {
    		ImgTitle
      },     	
      data() {
        return {
          img,
          title,
          mesBg 
        }
      }       
    }
</script>
<style scoped rel="stylesheet/scss" lang="scss">
	.contact{
		position:relative;
		width: 100%;
		padding: 0;
		.bg {
			position: relative;
			img {
				width: 100%;
			}			
			.bg_title {
				position: absolute;
				top: 0;
			}
		}
		.contact_way {
			position: absolute;
		    width: 31.25%;
    		margin-top: 8%;
			text-align: right;
			top: 0;
			right: 5%;
			line-height: 25px;
			color: #fff;
			transition: all .5s ease-out 0s;
	        -webkit-transition: all .5s ease-out 0s;
	        -moz-transition: all .5s ease-out 0s;
	        .contact_bg {
	        	width: 100%;
	        }
	        .mes {
	        	width: 100%;
			    position: absolute;
			    top: -1%;
			    padding: 20px;
			    color:rgba(102,102,102,1);
			    text-align: left;
			    p {
			    	line-height:20px;
			    	font-size:14px;
			    	.title {
			    		font-size:16px;
						color:rgba(51,51,51,1);
						line-height:28px;
			    	}
			    }
			}
		}
	}	
</style>