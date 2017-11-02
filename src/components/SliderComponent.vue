<template>
  <div>
    <div>
      <span >默认</span>
      <el-slider v-model="value1" :format-tooltip="formatTooltip"></el-slider>
    </div>
    <div>
      <span>离散</span>
      <el-slider v-model="value5" :step="10" show-stops></el-slider>
    </div>
    <div>
      <span>输入框</span>
      <el-slider v-model="value6" show-input></el-slider>
    </div>
    <div>
      <span>范围</span>

      <el-slider v-model="value9" range show-stops :max="10"></el-slider>
    </div>
    <div style="height:200px;">
      <span>竖向</span>
      <el-slider v-model="value10" vertical heihgt="200px">

      </el-slider>
    </div>
  </div>
</template>

<script>
  export default {
    name:'slider',
    data() {
      return {
        value1:50,
        value5:20,
        value6:30,
        value9:[4,7],
        value10:0
      }
    },
    methods:{
      formatTooltip(val) {
        return val/100
      }
    }
  }

</script>

<style>

</style>
