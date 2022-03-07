<template>
  <div class="banner-list">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        text-color="#000"
        active-text-color="#4d6fda"
      >
          <el-menu-item>
              <h3>博学谷新闻</h3>
          </el-menu-item>
          <el-menu-item class="item">
              <img src="../../assets/images/FE.png" alt="">
              <div>
                <span>博学谷前端在线就业班</span>
                <span>博学谷前端在线就业班...</span>
              </div>
          </el-menu-item>
           <el-menu-item class="item">
              <img src="../../assets/images/js.jpg" alt="">
              <div>
                <span>博学谷前端在线就业班</span>
                <span>博学谷前端在线就业班...</span>
              </div>
          </el-menu-item>
           <el-menu-item class="item">
              <img src="../../assets/images/fe-list.png" alt="">
              <div>
                <span>博学谷前端在线就业班</span>
                <span>博学谷前端在线就业班...</span>
              </div>
          </el-menu-item>
          <el-menu-item class="item">
              <img src="../../assets/images/wx.jpg" alt="">
              <div>
                <span>博学谷前端在线就业班</span>
                <span>博学谷前端在线就业班...</span>
              </div>
          </el-menu-item>
          <el-menu-item class="item">
              <img src="../../assets/images/FE.png" alt="">
              <div>
                <span>博学谷前端在线就业班</span>
                <span>博学谷前端在线就业班...</span>
              </div>
          </el-menu-item>
           <el-menu-item class="item">
              <img src="../../assets/images/js.jpg" alt="">
              <div>
                <span>博学谷前端在线就业班</span>
                <span>博学谷前端在线就业班...</span>
              </div>
          </el-menu-item>
           <el-menu-item class="item">
              <img src="../../assets/images/fe-list.png" alt="">
              <div>
                <span>博学谷前端在线就业班</span>
                <span>博学谷前端在线就业班...</span>
              </div>
          </el-menu-item>
          <el-menu-item class="item">
              <img src="../../assets/images/wx.jpg" alt="">
              <div>
                <span>博学谷前端在线就业班</span>
                <span>博学谷前端在线就业班...</span>
              </div>
          </el-menu-item>

      </el-menu>
  </div>
</template>

<script>
export default {
  name: 'BannerList'
}
</script>

<style lang='scss' scoped>
.banner-list{
  margin-top: 100px;
  border-top: 1px solid #4165D8;
  width: 100%;
  h3{
    font-size: 30px;
  }
  .item{
      height: 120px;
      margin: 20px 0;
      position: relative;
      display: flex;
      border-bottom: 1px solid #E7E6E6;
      div{
        display: flex;
        margin-top: 20px;
        flex-direction: column;
        span{
            line-height: 32px;
            margin-left: 20px;
            font-size: 20px;
        }
      }
    img{
      height: 100px;
      width: 200px;
    }
  }

}
</style>
