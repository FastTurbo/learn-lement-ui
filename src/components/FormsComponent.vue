<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date"
                          placeholder="选择日期"
                          v-model="form.date1"
                          style="width:100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker type="fixed-time"
                          placeholder="选择时间"
                          v-model="form.date2"
                          style="width:100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌活动"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" round>立即创建</el-button>
        <el-button round>取消</el-button>
      </el-form-item>
    </el-form>

    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="审批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-radio-group v-model="labelPosition" size="small">
        <el-radio-button label="left">左对齐</el-radio-button>
        <el-radio-button label="right">右对齐</el-radio-button>
        <el-radio-button label="top">顶部对齐</el-radio-button>
    </el-radio-group>

    <el-form :label-position="labelPosition"  label-width="80px" ref="form"  :model="formLabelAlign">
      <el-form-item label="名称">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-input v-model="formLabelAlign.region"></el-input>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
    </el-form>
    <div style="margin-top:20px;"></div>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>

      <el-form-item label="活动区域" prop="region">

        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间" required>
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"></el-date-picker>
        </el-col>
        <el-col :span="2">-</el-col>
        <el-col :span="11" type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2"></el-col>
      </el-form-item>
      <el-form-item label="即时配送" prop="delivery">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="美食/线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="线上品牌赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

    <div style="margin-top:20px;"></div>
    <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px">
      <el-form-item
        :prop="email"
        label="邮箱"
        :rules="[
          {required:true,message:'请输入邮箱地址',trigger:'true'},
          {type:'email',message:'请出入正确的邮箱地址',trigger:'blur,change'}]">
        <el-input v-model="dynamicValidateForm.email"></el-input>
      </el-form-item>
      <el-form-item
        v-for="(domain,index) in dynamicValidateForm.domains"
        :label="'域名'+index"
        :key="domain.key"
        :prop="'domains.' + index + '.value'"
        :rules="[{required:true,message:'域名不能为空',trigger:'blur'}]">
        <el-input v-model="domain.value"></el-input>
        <el-button @click.prevent="removeDomain('domain')">删除</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm4('dynamicValidateForm')">提交</el-button>
        <el-button @click="addDomain">新增域名</el-button>
        <el-button @click="resetForm4('dynamicValidateForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
export default {
  name:'forms',
  data () {
    return {
      dynamicValidateForm:{
        domains:[
          {value:''}
        ],
        email:''
      },
      ruleForm:{
        name:'',
        region:'',
        date1:'',
        date2:'',
        delivery:false,
        type:[],
        resource:'',
        desc:''
      },
      rules:{
        name:[
          {
            required:true,message:'请输入活动名称',trigger:'blur'
          },
          {
            min:3,max:5,message:'长度在3到5个字符',trigger:'blur'
          }
        ],
        region:[
          {required:true,message:'请选择活动区域',trigger:'change'}
        ],
        date1:[
          {type:'date',required:true,message:'请选择日期',trigger:'change'}
        ],
        date2:[
          {type:'date',required:true,message:'请选择时间',trigger:'change'}
        ],
        type:[
          {type:'array',required:true,message:'请至少选择一个活动性质',trigger:'change'}
        ],
        resource:[
          {required:true,message:'请选择活动资源',trigger:'change'}
        ],
        desc:[
          {required:true,message:'请输入活动形式',trigger:'blur'}
        ]


      },
      labelPosition:'left',
      formLabelAlign:{
        name:'',
        region:'',
        type:''
      },
      formInline:{
        user:'',
        region:''
      },
      form:{
        name:'',
        region:'',
        date1:'',
        date2:'',
        delivery:false,
        type:[],
        resource:'',
        desc:''

      }
    }
  },
  methods:{
    submitForm4(formname) {
      this.$refs[formName].validate((valid) => {
        if(valid){
          alert('submit!')
        }else{
          console.log('error submit!')
          return false
        }
      })
    },
    resetForm4(formName){
      this.$refs[formName].resetFields()
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item)
      if(index !== -1){
        this.dynamicValidateForm.domains.splice(index,1)
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value:'',
        key:Date.now()
      })
    },
    onSubmit() {
      console.log('submit!!!')
    },
    submitForm(formName){
      this.$refs[formName].validate((valid)=>{
        if(valid){
          alert('submit!')
        }else{
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style>

</style>
