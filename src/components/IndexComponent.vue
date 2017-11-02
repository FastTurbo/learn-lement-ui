<template>
  <div>
    <span class="demonstration">Element UI</span>
    <el-row>
      <el-col
        :span="2"
        :offset="1"
        v-for="item in routes"
        class="router-link"
        :key="item.name">
        <router-link  :to="item.path">{{ item.name }}</router-link>

      </el-col>

    </el-row>
  </div>

</template>

<script>
  import router from '@/router/index'
  export default {
    name:'index',
    data(){
      return {
        routes:[]
      }
    },
    mounted() {
      this.routes = router.options.routes
    }
  }
</script>

<style>
  .router-link{
    background-color:#ff9046;
    height:48px;
    border-radius:5px;
    line-height:48px;
    margin-top:20px;
  }

</style>
