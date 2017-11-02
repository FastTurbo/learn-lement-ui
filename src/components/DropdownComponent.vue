<template>
  <div>
  <el-dropdown>
    <span class="el-dropdown-link">
      下拉菜单 <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>黄金糕</el-dropdown-item>
      <el-dropdown-item divided>狮子头</el-dropdown-item>
      <el-dropdown-item>螺蛳粉</el-dropdown-item>
      <el-dropdown-item disabled>双皮奶</el-dropdown-item>
      <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>

    <div style="margin-top: 20px;">
      <el-dropdown>
        <el-button type="success">
          更多菜单 <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item divided>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown split-button type="primary" @click="handleClick">
        更多菜单
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item disabled>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>

        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <div style="margin-top: 20px;">
      <el-row>
        <el-col :span="12">
          <span class="demonstration">Hover激活</span>
          <el-dropdown>
            <span class="el-dropdown-link">
              下拉菜单 <i class="el-icon-arrow-right el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item divided>狮子头</el-dropdown-item>
              <el-dropdown-item disabled>螺蛳粉</el-dropdown-item>
              <el-dropdown-item divided>双皮奶</el-dropdown-item>
              <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>

          </el-dropdown>
        </el-col>
        <el-col :span="12">
          <span class="demonstration">click激活</span>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              下拉菜单 <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item divided>狮子头</el-dropdown-item>
              <el-dropdown-item divided>螺蛳粉</el-dropdown-item>
              <el-dropdown-item divided disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>

            </el-dropdown-menu>

          </el-dropdown>
        </el-col>
      </el-row>

    </div>

    <div style="margin-top: 20px;">
      <el-dropdown>
        <span class="el-dropdown-link">

          下拉菜单 <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>

      </el-dropdown>
    </div>
    <div style="margin-top:20px">
      <el-dropdown split-button type="primary">
        默认尺寸
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown split-button size="medium" type="primary">
        中等尺寸
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown split-button size="small" type="primary">
        小型尺寸
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown split-button size="mini" type="primary">
        迷你尺寸
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>网煎熬</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>

      </el-dropdown>
    </div>

    <div style="margin-top: 20px;">
      <el-steps :active="activeStep" finish-status="success" align-center>
        <el-step title="步骤1"></el-step>
        <el-step title="步骤2"></el-step>
        <el-step title="步骤3"></el-step>
      </el-steps>

      <el-button style="margin-top:20px;" @click="nextStep">下一步</el-button>
    </div>
    <div style="margin-top: 20px;" >
      <el-steps :active="1" align-center>
        <el-step title="步骤1" description="文字"></el-step>
        <el-step title="步骤2" description="文字"></el-step>
        <el-step title="步骤3" description="文字"></el-step>
      </el-steps>
    </div>

    <div style="margin-top: 20px;">
      <el-steps :active="2" align-center>
        <el-step title="步骤1" icon="el-icon-edit"></el-step>
        <el-step title="步骤2" icon="el-icon-upload"></el-step>
        <el-step title="步骤3" icon="el-icon-picture"></el-step>
      </el-steps>
    </div>
    <div style="margin-top: 20px;height:200px">
      <el-steps direction="vertical" :active="1" align-center>
        <el-step title="步骤1"></el-step>
        <el-step title="步骤2"></el-step>
        <el-step title="步骤3" description="文字"></el-step>
      </el-steps>
    </div>
    <div style="margin-top: 20px;">
      <el-steps :active="1" simple>
        <el-step title="步骤1"></el-step>
        <el-step title="步骤2"></el-step>
        <el-step title="步骤3"> </el-step>
      </el-steps>
      <el-steps :active="1" finish-status="success" simple style="margin-top:20px">
        <el-step title="步骤1"></el-step>
        <el-step title="步骤2"></el-step>
        <el-step title="步骤3"></el-step>
      </el-steps>
    </div>
    <div style="margin-top: 20px;">
      <el-button type="text" @click="dialogVisible=true">点击打开dialog</el-button>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        widht="30%"
        :before-close="handleClose">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible=false">取消</el-button>
          <el-button type="primary" @click="dialogVisible=false">确定</el-button>
        </span>
      </el-dialog>
    </div>

    <div style="margin-top: 20px;">
      <el-button type="text" @click="dialogTableVisible=true">打开嵌套表格的dialog</el-button>
      <el-dialog
        title="收货地址"
        :visible.sync="dialogTableVisible">
        <el-table :data="gridData">
          <el-table-column prop="date" label="日期" width="150"></el-table-column>
          <el-table-column prop="name" label="姓名" width="200"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </el-dialog>
      <el-button type="text" @click="dialogFormVisible=true">打开表单dialog</el-button>
      <el-dialog
        title="收货地址"
        :visible.sync="dialogFormVisible">
        <el-form :model="form" size="mini">
          <el-form-item label="活动名称" :label-width="formLabelWidth">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="选择区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible=false">取消</el-button>
          <el-button type="primary" @click="dialogFormVisible=false">确定</el-button>
        </div>
      </el-dialog>
    </div>
    <div style="margin-top: 20px;">
      <el-button type="text" @click="outerVisible=true">打开外层dialog</el-button>
      <el-dialog
        title="外层dialog"
        :visible.sync="outerVisible">
        <el-dialog
          width="30%"
          title="内层dialog"
          :visible.sync="innerVisible"
          append-to-body>
        </el-dialog>
        <div slot="footer" class="dialog-foter">
          <el-button @click="outerVisible=false">取消</el-button>
          <el-button type="primary" @click="innerVisible=true">打开内层dialog</el-button>
        </div>

      </el-dialog>
    </div>
    <div style="margin-top: 20px;">
      <el-button type="text" @click="centerDialogVisible=true">点击打开</el-button>
      <el-dialog
        title="提示"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
        <p style="text-align:center">不是自动默认居中的</p>
        <template slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible=false">取消</el-button>
          <el-button type="primary" @click="centerDialogVisible=false">确定</el-button>
        </template>
      </el-dialog>

    </div>


  </div>
</template>

<script>
export default {
  name:'dropdown',
  data () {
    return {
      centerDialogVisible:false,
      outerVisible:false,
      innerVisible:false,
      activeStep:0,
      dialogVisible:false,
      dialogTableVisible:false,
      dialogFormVisible:false,
      gridData:[
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }

      ],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods:{
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(() => {
          done()
        })
        .catch(() => {})
    },
    handleClick() {
      alert('button click')
    },
    nextStep() {
      if(this.activeStep++ > 2) this.activeStep = 0
    }
  }
}
</script>

<style>

</style>
