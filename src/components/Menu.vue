<template>
    <Header :style="{position: 'fixed', width: '100%',height:'100px',left: 0,background:'#fff',paddingLeft:0,paddingRight:0,margin:'0 auto',zIndex:'9999999'}">
        <Menu  :style="{width:'1200px',margin:'0 auto'}"mode="horizontal" theme="light" active-name="1">
            <div class="layout-logo"><img :src="logo" alt=""></div>
            <div class="layout-nav" >
                <MenuItem name="1" :style="{marginRight:0,marginLeft:'32px',padding:0}">
                    网站首页
                </MenuItem>
                <MenuItem name="2" :style="{marginRight:0,marginLeft:'32px',padding:0}">
                    关于我们
                </MenuItem>
                <MenuItem name="3" :style="{marginRight:0,marginLeft:'32px',padding:0}">
                    新闻中心
                </MenuItem>
                <MenuItem name="4" :style="{marginRight:0,marginLeft:'32px',padding:0}">
                    产品中心
                </MenuItem>
                  <MenuItem name="5" :style="{marginRight:0,marginLeft:'32px',padding:0}">
                     经典案例
                </MenuItem>                        
                <MenuItem name="6" :style="{marginRight:0,marginLeft:'32px',padding:0}">
                    技术中心
                </MenuItem> 
                <MenuItem name="7" :style="{marginRight:0,marginLeft:'32px',padding:0}">
                    售后服务
                </MenuItem>                                                
            </div>
        </Menu>
    </Header>
</template>
<script>
    import logo from '@/assets/logo.png'
    export default {
      data() {
        return {
          logo
        }
      }       
    }
</script>
<style scoped>
    .layout-logo{
        width: 100px;
        height: 30px;
        float: left;
        position: relative;
        top: 20px;
        left: 0;
    }
    .layout-nav{
        width: 626px;
        margin: 0 auto;
        margin-right: 0;
        padding-top: 17px;
    }
    .layout-footer-center{
        text-align: center;
        background: #fff;
    }
    .ivu-menu-horizontal.ivu-menu-light:after {
      height: 0;
    }
</style>

