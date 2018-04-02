
<template>
	<swiper :options="swiperOption">
        <swiper-slide class="slide-item" v-for="i in 12" v-bind:key="i" ><ProductPiece></ProductPiece></swiper-slide>
    </swiper>
</template>
<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'
    import img from '@/assets/组 201@2x.png'
    import ProductPiece from '@/components/product/ProductPiece'
    
    export default {
	  components: {
    	swiper,
    	swiperSlide,
    	ProductPiece
    	},    	
      data() {
        return {
         img,
		 swiperOption: {
	        slidesPerView: 'auto',
	        spaceBetween: 10,
	        slidesOffsetBefore : -100,
	        paginationClickable: true,
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev'
	      }          
        }
      }       
    }
</script>
<style scoped>
	.slide-item {
		width: 300px;
	}
</style>
