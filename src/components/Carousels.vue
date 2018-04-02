<template>
    <Carousel   v-model="value2" 
                :autoplay="setting.autoplay"
                :radius-dot="setting.radiusDot"
                :loop="setting.loop"
                :arrow="setting.arrow"
                class="news-carousels">
        <CarouselItem class="items" v-for="i in 3">
            <div class="demo-carousel"><img :src="img1" alt=""></div>
        </CarouselItem>
    </Carousel>
</template>
<script>
    import img1 from '@/assets/500002563@2x.png'
    export default {
        data () {
            return {
                img1:img1,
                value2: 0,
                setting: {
                    loop:false,
                    autoplay: false,
                    autoplaySpeed: 2000,
                    dots: 'inside',
                    radiusDot: true,
                    trigger: 'click',
                    arrow: 'never'
                }                
            }
        }
    }
</script>
<style scoped>
    .demo-carousel img {
        width: 100%;
    }  
</style>
<style>
    .news-carousels .ivu-carousel-dots {
        height: 40px;
        background: rgba(60,60,60,1);
        opacity: 0.8;
        text-align: right;
    }  
    .news-carousels .ivu-carousel-dots li button.radius {
        width:14px;
        height:14px; 
        background:rgba(204,204,204,1);
        border-radius: 50%;
    } 
    .news-carousels .ivu-carousel-dots li {
        padding-bottom: 13px;
        padding-top: 13px;
    } 
    .news-carousels .ivu-carousel-dots li.ivu-carousel-active button.radius {
        background:rgba(67,153,255,1);
    }
</style>

