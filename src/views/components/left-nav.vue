<template>
  <div class="left-nav">
    <el-container>
      <el-row>
       <el-col >
           <el-menu
           default-active="2"
           class="el-menu-vertical-demo"
           text-color="#000"
           active-text-color="#4d6fda"
           >
           <el-menu-item index="1">
             <img src="~@/assets/images/bxg.png" alt="">
               <!-- <span slot="title">头条</span> -->
           </el-menu-item>
           <el-menu-item  v-for="item in list" :key="item.id" @click="childClick(item.name)">
               <span slot="title" class="item" >{{item.category}}</span>
           </el-menu-item>
           </el-menu>
       </el-col>
      </el-row>
    </el-container>

  </div>
</template>

<script>
import { getList } from '@/api/index'
export default {
  name: 'LeftNav',
  data () {
    return {
      list: [],
      isShow: '',
      childValue: ''
    }
  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      const { data: { result: { data } } } = await getList()
      this.list = data
      // console.log(this.list[1].id)
    },
    childClick (index) {
      // childByValue是在父组件on监听的方法
      // 第二个参数this.childValue是需要传的值
      this.childValue = index

      this.$emit('childByValue', this.childValue)
    }

  }
}
</script>

<style lang="scss" scoped>
.left-nav{

  el-menu-item{
    margin-top: 10px;
    padding-left: 0 !important;
    height: 60px;
  }
  .item{
    display: inline-block;
    // width: 150px ;
    height: 60px;
    border-radius: 5px;
    line-height: 60px;
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    &:hover {
    background-color: #4d6fda !important;
    color: #fff;
    }
  }
}
</style>
