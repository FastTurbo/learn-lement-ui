<template>
  <div>
    <div style="margin:20px;">
      <el-alert title="成功提示的文案" type="success" center show-icon></el-alert>
      <el-alert title="消息提示的文案" type="info" show-icon></el-alert>
      <el-alert title="警告提示的文案" description="这是一句描述" type="warning" center show-icon></el-alert>
      <el-alert title="错误提示的文案" type="error" show-icon></el-alert>
      <el-alert title="不可关闭的alert" type="success" :closable="false"></el-alert>
      <el-alert title="自定义的close-text" type="info" close-text="知道了"></el-alert>
      <el-alert title="设置了回调的alert" type="warning" @close="hello"></el-alert>
      <el-input
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0,0,0,0.8"
        type="text"
        v-model="input"></el-input>

      <div style="margin-top:20px;">
        <el-button type="primary"
          @click="openFullScreen"
          v-loading.fullscreen.lock="fullscreenLoading">
          指令方式
        </el-button>
        <el-button
          type="primary"
          @click="openFullScreen2">
          服务方式
        </el-button>
      </div>
      <div style="margin-top:20px;">
        <el-button :plain="true" @click="openMessage">打开消息提示</el-button>
        <el-button :plain="true" @click="openVn">Vnode</el-button>
      </div>
      <div style="margin-top:20px;">
        <el-button :plain="true" @click="open2">成功</el-button>
        <el-button :plain="true" @click="open3">警告</el-button>
        <el-button :plain="true" @click="openMessage">消息</el-button>
        <el-button :plain="true" @click="open4">错误</el-button>
        <el-button :plain="true" @click="openHTML">使用HTML片段</el-button>
      </div>
      <div style="margin-top:20px;">
        <el-button type="text" @click="openMessageBox">点击打开</el-button>
        <el-button type="text" @click="open5">点击确认</el-button>
        <el-button type="text" @click="open6">点击添加</el-button>
      </div>
      <div style="margin-top:20px;">
        <el-button plain @click="open7">可自动关闭</el-button>
        <el-button plain @click="open8">不自动关闭</el-button>
      </div>
      <div style="margin-top:20px;">
        <el-button plain @click="open9">成功</el-button>
        <el-button plain @click="open10">警告</el-button>
        <el-button plain @click="open11">消息</el-button>
        <el-button plain @click="open12">错误</el-button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name:'alert',
  data() {
    return {
      loading:true,
      fullscreenLoading:false,
      input:''
    }
  },
  methods:{
    open9() {
      this.$notify({
        title:'成功',
        message:'这是一条成功的提示消息',
        position:'bottom-right',
        showClose:false,
        type:'success'
      })
    },
    open10() {
      this.$notify({
        title:'警告',
        message:'这是一条警告的提示信息',
        type:'warning',
        offset:-100,
        position:'top-left'
      })
    },
    open11() {

      this.$notify({
        title:'消息',
        message:'这是一条消息',
        type:'info',
        position:'bottom-left'
      })

    },
    open12() {
      this.$notify({
        title:'错误',
        message:'这是一条错误的提示消息',
        type:'error'
      })
    },
    open7() {
      const h = this.$createElement
      this.$notify({
        title:'标题名称',
        message:h('i',{style:'color:teal'},'这里是内容！！'),
        duration:3000
      })
    },
    open8() {

      this.$notify({
        title:'提示',
        message:'这是一条不会自动关闭的消息',
        duration:0
      })
    },
    hello() {
      alert('Hello world!!')
    },
    openFullScreen() {
      this.fullscreenLoading = true
      setTimeout(() => {
        this.fullscreenLoading = false
      },2000)
    },
    openFullScreen2() {
      const loading = this.$loading({
        lock:true,
        text:'Loading',
        spinner:'el-icon-loading',
        background:'rgba(0,0,0,0.8'
      })
      setTimeout(()=>{
        loading.close()
      },2000)
    },
    openMessage() {
      this.$message('这是一条消息提示')
    },
    openVn() {
      const h = this.$createElement
      this.$message({
        message:h('p',null,[
          h('span',null,'内容可以是 '),
          h('i',{style:'color:teal'},'VNode')
        ])
      })
    },
    open2() {
      this.$message({
        message:'恭喜，这是一条成功消息。',
        center:true,
        type:'success'
      })
    },
    open3() {
      this.$message({
        message:'这是一条警告消息',
        type:'warning',
        showClose:true
      })

    },
    open4() {
      this.$message.error('这是一条错误消息')
    },
    openHTML() {
      this.$message({
        dangerouslyUseHTMLString:true,
        message:'<strong>这是<i>HTML</i>片段</strong>'

      })
    },
    openMessageBox() {
      this.$alert('这是一条内容','标题名称',{
        confirmButtonText:'确定',
        callback:action => {
          this.$message({
            type:'info',
            message:`action ${action}`
          })
        }
        }
        )
    },
    open5() {
      this.$confirm('将删除文件，是否继续','提示',{
        confirmButtonText:'确定',
        cancelButtonText:'取消',
        type:'warning'
      }).then(() => {
        this.$message({
          type:'success',
          message:'删除成功'
        })
      }).catch(() => {
        this.$message({
          type:'info',
          message:'已取消删除'
        })
      })
    },
    open6() {
      this.$prompt('请输入邮箱','提示',{
        confirmButtonText:'确定',
        cancalButtonText:'取消',
        inputPattern:/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inpurErrorMessage:'邮箱格式错误'
      }).then(({value}) => {
        this.$message({
          type:'success',
          message:'你的邮箱是：' + value
        })
      }).catch(() => {
        this.$message({
          type:'info',
          message:'取消输入'
        })
      })
    }
  }
}
</script>

<style>
.el-alert{margin:10px;}
</style>
