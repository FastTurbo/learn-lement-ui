<template>
  <el-container>
    <el-header>
      Header
    </el-header>
    <el-container>
      <el-aside width="200px">Aside </el-aside>
      <el-main>
        <el-select v-model="value" disabled placeholder="请选择">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value"
                     :disabled="item.disabled">

          </el-option>
        </el-select>
        <div>
          <el-select v-model="value2" clearable pladeholder="请选择">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value"></el-option>
          </el-select>
        </div>
        <div>
          <el-select v-model="value3" multiple placeholder="请选择">
            <el-option v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
              <span style="float:left">{{item.label}}</span>
              <span style="float:right;color:#8492a6;font-size:13px;margin-right:13px;">{{item.value}}</span>
            </el-option>
          </el-select>
        </div>
        <div>
          <el-select v-model="value7" filterable placeholder="请选择">
            <el-option-group
              v-for="group in options3"
              :key="group.label"
              :label="group.label">
              <el-option v-for="item in group.options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"></el-option>

            </el-option-group>
          </el-select>
        </div>
        <div>
          <el-select v-model="value9"
                multiple
                filterable
                remote
                reserve-keyword
                placeholder="请输入关键词"
                :remote-method="remoteMethod"
                :loading="loading">
            <el-option v-for="item in options4"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">

            </el-option>
          </el-select>
        </div>
        <div>
          <el-select v-model="value10"
                  multiple
                  filterable
                  allow-create
                  placeholder="请选择"
                  >
            <el-option v-for="item in options5"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"></el-option>

          </el-select>
        </div>
        <div>
          <el-cascader :options="options"
            v-model="selectedOptions"
            @change="handleChange"
            change-on-select
          >

          </el-cascader>
          <span>使用hover事件触发</span>
          <el-cascader
            :options="options"
            expand-trigger="hover"
            v-model="selectedOptions2"
            @change="handleChange">

          </el-cascader>
        </div>
        <div>
          <el-switch v-model="value22" active-color="#13ce66" inactive-color="#ff4949">
          </el-switch>
          <el-switch v-model="value23" active-text="按月付费" inactive-text="按年付费">

          </el-switch>
          <el-switch style="display:block;"
            v-model="value24"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="按月付费"
            inactive-text="按年付费"></el-switch>
        </div>
        <div>
          <el-tooltip :content="'Switch value:' + value25" placement="top">
            <el-swtich
              v-model="value25"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-value="100"
              inactive-value="10">

            </el-swtich>
          </el-tooltip>
        </div>
      </el-main>
    </el-container>
    <el-footer>
      Footer
    </el-footer>
  </el-container>
</template>

<script>
  export default {
    name: 'select',
    data () {
      return {
        value22:true,
        value23:true,
        value24:true,
        value25:100,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面',
          disabled: true
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        value2: '',
        value3:[],
        options3: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
        value7:'',
        options4:[],
        value9:[],
        list:[],
        loading:false,
        states:["Alabama", "Alaska", "Arizona",
          "Arkansas", "California", "Colorado",
          "Connecticut", "Delaware", "Florida",
          "Georgia", "Hawaii", "Idaho", "Illinois",
          "Indiana", "Iowa", "Kansas", "Kentucky",
          "Louisiana", "Maine", "Maryland",
          "Massachusetts", "Michigan", "Minnesota",
          "Mississippi", "Missouri", "Montana",
          "Nebraska", "Nevada", "New Hampshire",
          "New Jersey", "New Mexico", "New York",
          "North Carolina", "North Dakota", "Ohio",
          "Oklahoma", "Oregon", "Pennsylvania",
          "Rhode Island", "South Carolina",
          "South Dakota", "Tennessee", "Texas",
          "Utah", "Vermont", "Virginia",
          "Washington", "West Virginia", "Wisconsin",
          "Wyoming"],
        value10:[],
        options5:[
          {
            value: 'HTML',
            label: 'HTML'
          }, {
            value: 'CSS',
            label: 'CSS'
          }, {
            value: 'JavaScript',
            label: 'JavaScript'
          }
        ],
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],

        selectedOptions:[],
        selectedOptions2:[]
      }
    },
    mounted() {
      this.list = this.states.map(item => {
        return {value:item,label:item}
      })
    },
    methods:{
      remoteMethod(query) {
        if(query !== ''){
          this.loading = true
          setTimeout(() => {
            this.loading = false
            this.options4 = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1
            })
          })
        }else{
          this.options4 = []
        }
      }
    }
  }

</script>

<style>
  .el-header, .el-footer {
    background: #999;
  }

  .el-aside {
    background: #aaa;
  }
  .el-select{
    margin-top:15px;
  }
</style>
