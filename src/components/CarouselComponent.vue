<template>
  <div>
    <div style="margin-top: 20px;">
      <el-row>
        <el-col :span="10" :offset="1">
          <span class="demonstration">默认hover触发</span>
          <el-carousel height="150px">
            <el-carousel-item
              v-for="item in 4"
              :key="item">
                <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="10" :offset="2">
          <span class="demonstration">click触发</span>
          <el-carousel trigger="click" height="150px" >
            <el-carousel-item
              v-for="item in 4"
              :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>
    </div>

    <div style="margin-top: 20px;">
      <el-carousel trigger="click" indicator-position="outside">
        <el-carousel-item
          v-for="item in 4"
          :key="4">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>

    </div>

    <div style="margin-top: 20px;">
      <el-carousel indicator-position="outside" trigger="click" :interval="3000" arrow="never">
        <el-carousel-item
          v-for="item in 4"
          :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>

      </el-carousel>

    </div>

    <div style="margin-top: 20px;">
      <el-carousel :interval="3000" type="card" height="200px">
        <el-carousel-item
          v-for="item in 4"
          :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>


    </div>


  </div>

</template>

<script>

  export default {
    name:'carousel'
  }
</script>

<style>
  .el-carousel__item h3{
    color:#475669;
    font-size:14px;
    opacity:0.7;
    line-height:150px;
    margin:0
  }

  .el-carousel__item:nth-child(2n){
    background-color:#99a9bf;
  }

  .el-carousel__item:nth-child(2n+1){
    background-color:#d3dce6;
  }

</style>
