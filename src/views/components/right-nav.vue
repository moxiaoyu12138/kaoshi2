<template>
  <div class="right">
    <div class="user">
      <span class="button">退出登录</span>
      <img src="../../assets/images/itcast.jpeg" class="user_pohto">
      <span class="user_phone">用户：17395652040</span>
    </div>
    <BannerList class="bannerList"/>
  </div>
</template>

<script>
import BannerList from './banner-list.vue'
export default {
  name: 'Right',
  components: {
    BannerList
  }
}
</script>

<style lang="scss" scoped>
.right{
  padding: 31px 116px 27px 33px;
  position: relative;
  height: 13.75rem;
  display: flex;
  flex-direction: column;
  .user{
    background-color: #fff;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    .button{
      position: absolute;
      right: 0;
      color: #CBCBCB;
      font-size: 20px;
    }
    .user_pohto{
      margin-top: 30px;
      width: 100px;
      height: 100px;
    }
    .user_phone{
      margin-top: 10px;
      font-size: 20px;
    }
  }

}
</style>
