<template>
  <div class="home">
    <el-menu  class="el-menu--horizontal" mode="horizontal">
      <el-menu-item index="1">
          <router-link  to="makeKey" >生成配列</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link  to="download" >下载固件</router-link>
      </el-menu-item>
    </el-menu>
    <router-view>
    </router-view>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {

        },
        mounted: function(){
            this.$router.push("makeKey")
        }
    }
</script>
