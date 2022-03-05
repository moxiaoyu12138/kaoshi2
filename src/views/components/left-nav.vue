<template>
  <div class="left-nav">
      <el-row>
        <el-col :span="3">
            <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            text-color="#000"
            active-text-color="#4d6fda"
            >
            <el-menu-item index="2">
                <span slot="title">头条</span>
            </el-menu-item>
             <el-menu-item index="1">
                <span slot="title">社会</span>
            </el-menu-item>

            </el-menu>
        </el-col>
        </el-row>

  </div>
</template>

<script>
export default {
  name: 'LeftNav',
  methods: {
    methods: {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
