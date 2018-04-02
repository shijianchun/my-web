<template>
    <div class="layout" id="app">
        <Layout>
            <Menu></Menu>
            <Content :style="{margin: '100px 0 0', background: '#fff', minHeight: '500px'}">
                <router-view/>
            </Content>
            <Footer class="layout-footer-center">
                <div class="foot_top"><img :src="foot_01" alt=""><p >改善环境，美好生活</p></div>
                <p class="link"><img :src="phone" alt=""> 023-123456 <img id="email" :src="email" alt="">4444444@gamil.com</p>
                <div><img :src="foot_02" alt=""><p>工作时间：&nbsp;&nbsp;周一到周五&nbsp;&nbsp;9:00-18:00</p></div>
                <Row class="list" span="24">
                    <Col xs:="8" :sm="6" :md="4" :lg="{ span: 3, offset: 2 }" >网站首页</Col>
                    <Col xs:="8" :sm="6" :md="4" :lg="3"  v-for="i in 6">网站首页</Col>
                </Row>
                <p>Copyright © 2012-2020.成都四维福腾环境设备有限公司</p>
            </Footer>
        </Layout>
    </div>
</template> 
<script>
    import logo from '@/assets/logo.png'
    import foot_01 from '@/assets/矩形 22@2x.png'
    import foot_02 from '@/assets/矩形 23@2x.png'
    import email from '@/assets/邮箱@2x.png'
    import phone from '@/assets/电话@2x.png'
    import Menu from '@/components/Menu'
    export default {
      components: {
        Menu
      },
      data() {
        return {
          logo,
          foot_02,
          foot_01,
          email,
          phone
        }
      }       
    }
</script>
<style scoped>
    html {
      width: 100%;
      font-size:16px;
      font-family: "微软雅黑", 'Microsoft YaHei';
      color:rgba(77,77,77,1);
    }
    body {
      width: 100%;
      overflow: hidden;
    }
    #app{
      width: 100%;
      margin: 0 auto;
    }
    .layout{
        position: relative;
        overflow: hidden;
    }
    .layout-footer-center {
      width: 100%;
      padding: 24px 0;
      text-align: center;
      background: #fff

    }
    .layout-footer-center div {
      margin-top: 21px;
    }
    .layout-footer-center > p {
      margin-top: 39px;
      font-size:12px;
      color:rgba(153,153,153,1);
      line-height:0px;
    }    
    .layout-footer-center div.foot_top img{
      width: 100%;
    }    
    .layout-footer-center div p {
      position: relative;
      font-size:12px;
      color:rgba(102,102,102,1);
      line-height:0px;
      top:-6px;
    }
    .layout-footer-center .link {
      margin-top: 41px;
    }
    .layout-footer-center .link img{
      margin: 0 10px;
    }
   .layout-footer-center .link img#email{
      margin-left: 50px;
    } 
   .layout-footer-center .list{
      width: 70%;
      max-width: 1000px;
      margin: 0 auto;
    }            
   .layout-footer-center .list span {
      margin-left: 50px;
      color:rgba(153,153,153,1);
      line-height:32px;
    }             
</style>

