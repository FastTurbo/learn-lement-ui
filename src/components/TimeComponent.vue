<template>
  <div>
    <div>
      <el-time-select
        v-model="value1"
        :picker-options="{start:'08:30',step:'00:15',end:'18:30'}"
        placeholder="请选择时间">

      </el-time-select>
    </div>
    <div>
      <el-time-select
        placeholder="起始时间"
        v-model="startTime"
        :picker-options="{start:'08:30',step:'00:30',end:'18:30'}">

      </el-time-select>
      <el-time-select
        placeholder="结束时间"
        v-model="endTime"
        :picker-options="{start:'08:30',step:'00:30',end:'18:30',minTime:startTime}">

      </el-time-select>
    </div>
    <div>
      <el-time-picker
      is-range
      v-model="value4"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      placeholder="选择时间范围"></el-time-picker>
    </div>
    <el-time-picker
    is-range
    arrow-control
    v-model="value5"
    range-separator="至"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    placeholder="选择时间范围"></el-time-picker>

    <div>
      <span>默认</span>
      <el-date-picker
        v-model="value6"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions0"></el-date-picker>
    </div>
    <div>
      <el-date-picker
        v-model="value7"
        aligh="right"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions1"></el-date-picker>
    </div>
    <div>
      <el-date-picker v-model="value9"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">

      </el-date-picker>
      <el-date-picker v-model="value10"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions3">

      </el-date-picker>
    </div>
  </div>


</template>

<script>
  export default {
    name: 'time',
    data() {
      return {
        value1: '',
        startTime:'',
        endTime:'',
        value4:[new Date(2016,9,10,8,40),new Date(2016,9,10,9,40)],
        value5:[new Date(2016,9,10,8,40),new Date(2016,9,10,9,40)],
        value6:'',
        pickerOptions0:{
          disabledDate(time) {
            return time.getTime() > Date.now()
          }
        },
        value7:'',
        pickerOptions1:{
          shortcuts:[
            {
              text:'今天',
              onClick(picker) {
                picker.$emit('pick',new Date())
              }
            },
            {
              text:'昨天',
              onClick(picker) {
                const date = new Date()
                date.setTime(date.getTime() - 3600*1000*24)
                picker.$emit('pick',date)
              }
            },
            {
              text:'一周前',
              onClick(picker) {
                const date = new Date()
                date.setTime(date.getTime() - 3600*1000*24*7)
                picker.$emit('pick',date)
              }
            }
          ]
        },
        value9:'',
        value10:'',
        pickerOptions3:{
          shortcuts:[
            {
              text:'最近一周',
              onClick(picker) {
                const end = new Date()
                const start = new Date()
                start.setTime(start.getTime() - 3600*1000*24*7)
                picker.$emit('pick',[start,end])
              }
            },
            {
              text:'最近一月',
              onClick(picker) {
                const end = new Date()
                const start = new Date()
                start.setTime(start.getTime() - 3600*1000*24*30)
                picker.$emit('pick',[start,end])
              }
            },
            {
              text:'最近三月',
              onClick(picker) {
                const end = new Date()
                const start = new Date()
                start.setTime(start.getTime() - 3600*1000*24*90)
                picker.$emit('pick',[start,end])
              }
            }
          ]
        }
      }
    }

  }
</script>

<style>

</style>
