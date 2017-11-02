<template>
  <div>
    <el-tag >标签1</el-tag>
    <el-tag type="success">成功标签</el-tag>
    <el-tag type="info">信息标签</el-tag>
    <el-tag type="warning">警告标签</el-tag>
    <el-tag type="danger">危险标签</el-tag>
    <div style="margin-top:20px;"></div>
    <el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">{{tag.name}}</el-tag>
    <div style="margin-top:20px;"></div>
    <el-tag v-for="tag in tags" :key="tag.name" closable :disable-transitions="false" @close="handleCloase(tag)"></el-tag>
    <el-input
      class="input-new-tag"
      v-if="inputVisible"
      v-model="inputValue"
      ref="saveTagInput"
      size="small"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm">

    </el-input>
    <el-button v-else class="" size="small" @click="showInput">+ New Tag</el-button>
    <div style="margin-top:20px"></div>
    <el-progress :percentage="70" status="success"></el-progress>
    <el-progress
      :text-inside="false"
      :stroke-width="24"
      :percentage="20"
      status="success"></el-progress>
    <el-progress type="circle" :percentage="25" status="exception"></el-progress>
    <div style="margin-top:20px"></div>
    <el-pagination layout="prev,pager,next" :total="1000" ></el-pagination>
    <div style="margin-top:20px;"></div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="100"
      layout="total,prev,pager,next"
      :total="1000"></el-pagination>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"
      :page-sizes="[100,200,300,400]"
      :page-size="100"
      layout="sizes,prev,pager,next"
      :total="1000"></el-pagination>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev,pager,next,jumper"
      :total="1000">

    </el-pagination>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10,20,50,100,200,400]"
      :page-size="100"
      layout="total,sizes,prev,pager,next,jumper"
      :total="400"></el-pagination>
    <div style="margin-top:20px;"></div>
    <el-badge :value="12" class="item">
      <el-button size="small">评论</el-button>
    </el-badge>
    <el-badge :value="3" class="item">
    </el-badge>

    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        点我查看 <i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item class="clearfix">
          评论
          <el-badge class="mark" :value="12"></el-badge>
        </el-dropdown-item>
        <el-dropdown-item class="clearfix">
          回复
          <el-badge class="mark" :value="3"></el-badge>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-badge :value="200" :max="99" class="item">
      <el-button size="small">评论</el-button>
    </el-badge>

    <el-badge :value="100" :max="10" class="item">
      <el-button size="small">回复</el-button>
    </el-badge>

    <el-badge value="new" >
      <el-button size="small">评论</el-button>
    </el-badge>
    <el-badge value="hot">
      <el-button size="small">回复</el-button>
    </el-badge>

    <el-badge is-dot >查询</el-badge>
    <el-badge is-dot >
      <el-button icon="el-icon-share" type="primary"></el-button>
    </el-badge>
  </div>
</template>

<script>
export default {
  name:'tag',
  data () {
    return {
      dynamicTags:['标签一','标签二','标签三'],
      inputVisible:false,
      inputValue:'',
      tags:[
        { name: '标签一', type: '' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' }
      ],
      currentPage1:5,
      currentPage2:5,
      currentPage3:5,
      currentPage4:4,
    }
  },
  methods:{
    handleSizeChange(val){

    },
    handleCurrentChange(val){

    },
    handleClose(tag){
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag),1)
    },
    showInput() {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleInputConfirm() {
      let inputValue = this.inputValue
      if(inputValue){
        this.dynamicTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>

<style>
.el-tag{
  margin:10px;
}
  .button-new-tag{

  }

  .el-badge{
    margin:0 20px;
  }
</style>
