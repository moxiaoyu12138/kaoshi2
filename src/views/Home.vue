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
    <div class="banner">
      <left-nav class="left_nav" v-on:childByValue="childByValue" @click="getTopUp()"></left-nav>

     <div class="centermain">
        <el-main class="main"  v-for="(item, index) in list" :key="index">
          <img :src="item.thumbnail_pic_s" alt="">
          <span class="title">{{item.title}}</span>
          <span class="press">{{item.author_name}}</span>
          <span class="time">{{item.date}}</span>
      </el-main>
        <!-- <el-main class="main"  >
          <img src="" alt="">
          <span class="title">123</span>
          <span class="press">123</span>
          <span class="time">123</span>
      </el-main>
      <el-main class="main"  >
          <img src="" alt="">
          <span class="title">123</span>
          <span class="press">123</span>
          <span class="time">123</span>
      </el-main>
      <el-main class="main"  >
          <img src="" alt="">
          <span class="title">123</span>
          <span class="press">123</span>
          <span class="time">123</span>
      </el-main> -->
     </div>
      <Right class="right"></Right>
    </div>

  </div>
</template>

<script>
import LeftNav from './components/left-nav.vue'
import Right from './components/right-nav.vue'
import { getTop } from '@/api/index'
export default {
  name: 'Home',

  data () {
    return {
      isShow: false,
      list: [],
      name2: 0
    }
  },
  components: {
    LeftNav,
    Right
  },
  created () {
    this.getTopUp('top')
  },
  methods: {
    async getTopUp (id) {
      const { data: { result: { data } } } = await getTop(id)
      this.list = data
      console.log(data)
    },
    childByValue: function (childValue) {
      // childValue就是子组件传过来的值
      this.name = childValue
      this.getTopUp(childValue)
      // this.name2 = childValue
      console.log(this.name)
    }

  }
}
</script>

<style lang="scss" scoped>
.home{
  .top{
    margin: 0 auto;
    // width: 100%;
    height: 54px;
    background-color: #f7f7f7;
    .grid-content{
      margin-left: 5px;
      margin-right: 5px;
      line-height: 27px;
      a{
        color: #4468D8;
      }
    }
    .headerword-box{
      position: relative;
      .headerword{
        position: absolute;
        right: 10px;
        top: 10px;
      }
    }
  }
  .banner{
    display: flex;
    justify-content: space-between;
    position: relative;

    .left_nav{
        margin-top: 5px;
        // position:absolute;
        left: 20px;
        // width: 150px;
        border-right: none;
      }
      .el-main{
          margin-top: 10px !important;

        }
      .centermain{
        width: 100%;
        .main{
        display: flex;
        flex-direction:row;
        margin-left: 20px !important;
        margin-right: 20px !important;
        position: relative;
        height: 95px;
        margin: 0;padding: 0;
        border-bottom: 1px solid #676767;
        img{
          height: 85px;
        }
        .title{
          top: 0;
          left: 160px;
          position:absolute;
          color: #333;
          font-size: 15px;
        }
        .press{
          position:absolute;
          left: 160px;
          bottom: 20px;
          font-size: 16px;
          color: #676767;
        }
        .time{
          position: absolute;
          right: 0;
          bottom: 16px;
          color: #676767;
          font-size: 20px;

        }
      }
      }

      .right{
        width: 23.75rem;
        height: 18.75rem;
      }
    }
  }

</style>
