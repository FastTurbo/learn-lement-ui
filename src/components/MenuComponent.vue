<template>
  <div>
    <el-menu :default-active="1"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          我的工作台
        </template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item inde="3">

        <a href="https://www.ele.me" target="_blank">订单管理</a>
      </el-menu-item>
    </el-menu>
      <div class="line"></div>

      <el-menu :default-active="2"
               class="el-manu-demo"
               mode="horizontal"
               @select="handleSelect"
               background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-menu-item index="2-4">选项4</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">
          <a href="https://www.ele.me" target="_blank">订单管理</a>
        </el-menu-item>
      </el-menu>

  <el-row class="tac">
    <el-col :span="12">
      <h4>默认颜色</h4>
      <el-menu
        :default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项一</el-menu-item>
            <el-menu-item index="1-2">选项二</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">分组二</template>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项一</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="12">
      <h4>自定义颜色</h4>
      <el-menu
        :default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项一</el-menu-item>
            <el-menu-item index="1-2">选项二</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组二">
            <el-menu-item index="1-3">选项三</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项一</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>

    <div style="margin-top: 20px;">
      <el-radio-group v-model="isCollapse" style="margin-bottom:20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu
        :default-active="3"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div style="margin-top:20px;">
      <el-tabs v-model="activeName"
        @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务" name="fourth">定时任务</el-tab-pane>
      </el-tabs>

    </div>
    <div style="margin-top:20px">
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务" name="fourth">定时任务</el-tab-pane>
      </el-tabs>
    </div>
    <div style="margin-top: 20px;">
      <el-tabs type="border-card" v-model="activeName3" @tab-click="handleClick">
        <el-tab-pane label="用户管理">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务">定时任务</el-tab-pane>
      </el-tabs>
    </div>
    <div style="margin-top: 20px;">
      <el-radio-group v-model="tabPosition" style="margin-bottom:20px;">
        <el-radio-button label="top">top</el-radio-button>
        <el-radio-button label="bottom">bottom</el-radio-button>
        <el-radio-button label="left">left</el-radio-button>
        <el-radio-button label="right">right</el-radio-button>
      </el-radio-group>


      <el-tabs :tab-position="tabPosition" style="height:200px;">
        <el-tab-pane label="用户管理">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务">定时任务</el-tab-pane>
      </el-tabs>
    </div>

    <div style="margin-top: 20px;">
      <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
        <el-tab-pane
          v-for="(item,index) in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name">{{item.content}}</el-tab-pane>

      </el-tabs>
    </div>

    <div style="margin-top: 20px;">
      <el-button size="small" @click="addTab(editableTabsValue2)">Add Tab</el-button>

      <el-tabs v-model="editableTabsValue2"
               type="card"
               @tab-remove="removeTab">
        <el-tab-pane
          v-for="(item,index) in editableTabs2"
          :key="item.name"
          :label="item.title"
          :name="item.name">{{item.content}}</el-tab-pane>
      </el-tabs>

    </div>

    <div style="margin-top:2px;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{path:'/alert'}">Alert页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div style="margin-top: 20px;">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>


  </div>

</template>

<script>
export default {
  name:'menu',
  data () {
    return {
      tabPosition:'top',
      isCollapse:true,
      activeName:'second',
      activeName2:'first',
      activeName3:'角色管理',
      editableTabsValue:'2',
      editableTabs:[{
        title:'Tab1',
        name:'1',
        content:'Tab 1 content'
      },{
        title:'Tab 2',
        name:'2',
        content:'Tab 2 content'
      }],
      tabIndex:2,
      editableTabsValue2:'2',
      editableTabs2:[
        {
          title:'Tab 1',
          name:'1',
          content:'Tab 1 content'
        },
        {
          title:'Tab 2',
          name:'2',
          content:'Tab 2 content'
        }
      ],
      tabIndex2:2
    }
  },
  methods:{
    addTab(targetName) {
      let newTabName = ++this.tabIndex2+'';
      this.editableTabs2.push({
        title:'New Tab',
        name:newTabName,
        content:'New tab content'
      })
      this.editableTabsValue2 = newTabName
    },
    removeTab(targetName) {
      let tabs = this.editableTabs
      let activeName = this.editableTabsValue2
      if(activeName === targetName){
        tabs.forEach((tab,index) => {
          if(tab.name === targetName) {
            let nextTab = tabs[index+1] || tabs[index-1]
            if(nextTab){
              activeName = nextTab.name
            }
          }
        })
      }
      this.editableTabsValue2 = activeName
      this.editableTabs2 = tabs.filter(tab => tab.name !== targetName)
    },
    handleTabsEdit(targetName,action) {
      if(action === 'add'){
        let newTabsName = ++this.tabIndex + '';
        this.editableTabs.push({
          title:'New Tab',
          name:newTabsName,
          content:'New Tab Content'
        })
        this.editableTabsValue = newTabName
      }

      if(action === 'remove'){
        let tabs = this.editableTabs
        let activeName = this.editableTabsValue
        if(activeName === targetName){
          tabs.forEach((tab,index) => {
            if(tab.name === targetName) {
              let nextTab = tabs[index+1]||tabs[index -1 ]
              if(nextTab){
                activeName = nextTab.name
              }
            }
          })
        }
        this.editableTabsValue = activeName
        this.editableTabs = tabs.filter(tab => tab.name!==targetName)
      }
    },
    handleClick(tab,event) {
      console.log(tab,event)
    },
    handleSelect(key,keyPath) {

      this.$notify({
        title:'菜单',
        message:`这是一条${key}+${keyPath}的消息！`,
        type:'success',
        position:'top-right'


      })
    },
    handleOpen(key,keyPath) {
      console.log(key,keyPath)
    },
    handleClose(key,keyPath) {
      console.log(key,keyPath)
    }
  }

}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width:200px;
  min-height:400px;
}
</style>
