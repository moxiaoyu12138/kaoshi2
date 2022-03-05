<template>
  <div class="home">
    <el-row class="top">
      <el-col :span="12" style="display: flex">
        <div class="grid-content bg-purple">传智播客旗下高端IT教育平台</div>
        <div class="grid-content bg-purple">|</div>
        <div class="grid-content bg-purple">联系电话： <a href="#">400-1200-100</a></div>
      </el-col>
      <el-col :span="12" style="display:flex" class="headerword-box">
          <img src="~@/assets/images/headerword.png" alt="" class="headerword">
      </el-col>
    </el-row>
    <left-nav></left-nav>
  </div>
</template>

<script>
import LeftNav from './components/left-nav.vue'
export default {
  name: 'Home',
  components: {
    LeftNav
  }
}
</script>

<style lang="scss" scoped>
.top{
  margin: 0 auto;
  width: 1273px;
  height: 53px;
  background-color: #f7f7f7;
  .grid-content{
    margin-left: 5px;
    margin-right: 5px;
    line-height: 53px;
    a{
      color: #4468D8;
    }
  }
  .headerword-box{
    position: relative;
    .headerword{
      position: absolute;
      right: 20px;
      top: 20px;
    }
  }
}
</style>
