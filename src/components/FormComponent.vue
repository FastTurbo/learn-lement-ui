<template>
  <div>
    <div>
      <el-radio v-model="radio" label="1">备选项</el-radio>
      <el-radio v-model="radio" label="2">备选项</el-radio>
      <el-radio v-model="radio" label="3" disabled>备选项</el-radio>
    </div>
    <div>
      <el-radio-group v-model="radio2">
          <el-radio :label="3">备选项</el-radio>
          <el-radio :label="6">备选项</el-radio>
          <el-radio :label="9">备选项</el-radio>
      </el-radio-group>
    </div>
    <div>
      <el-radio-group v-model="radio3">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>
    <div>
      <el-radio v-model="radio7" label="1" border>被选项</el-radio>
      <el-radio v-model="radio7" label="2" border>备选项</el-radio>
    </div>
    <div>
      <el-checkbox v-model="checked">备选项</el-checkbox>
      <el-checkbox v-model="checked1" disabled>备选项2</el-checkbox>
    </div>
    <div>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="复选框 A"></el-checkbox>
        <el-checkbox label="复选框 B"></el-checkbox>
        <el-checkbox label="复选框 C"></el-checkbox>
        <el-checkbox label="禁用" disabled></el-checkbox>
        <el-checkbox label="选中且禁用" disabled></el-checkbox>

      </el-checkbox-group>
    </div>
    <div>
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <div style="margin:15px 0;"></div>
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
  const cityOptions = ['上海','北京','广州','深圳']
  export default {
    name: 'form',
    data () {
      return {
        radio: '1',
        radio2:'9',
        radio3:'北京',
        radio7:'2',
        checked:true,
        checked1:false,
        checkList:[ '选中且禁用' ,'复选框 C'],
        checkAll:false,
        checkedCities:['上海','北京'],
        cities:cityOptions,
        isIndeterminate:true

      }
    },
    methods:{
      handleCheckAllChange(val) {
        this.checkedCities = val?cityOptions:[]
        this.isIndeterminate = false
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length
        this.checkAll = checkedCount === this.cities.length
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
      }
    }
  }

</script>

<style>
  div{
    margin-top:20px;
  }

</style>
