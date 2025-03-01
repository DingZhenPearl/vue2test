<template>
  <div class="equipment-form">
    <h2>{{ isEdit ? '编辑设备' : '新增设备' }}</h2>
    
    <el-form :model="equipment" :rules="rules" ref="equipmentForm" label-width="100px">
      <el-form-item label="设备名称" prop="name">
        <el-input v-model="equipment.name"></el-input>
      </el-form-item>
      
      <el-form-item label="设备状态" prop="status">
        <el-select v-model="equipment.status">
          <el-option
            v-for="item in statusOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      
      <el-form-item label="维护时间" prop="lastMaintain">
        <el-date-picker
          v-model="equipment.lastMaintain"
          type="datetime"
          placeholder="选择日期时间">
        </el-date-picker>
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="submitForm">保存</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import equipmentService from '../services/equipmentService'

export default {
  name: 'EquipmentForm',
  
  props: {
    id: {  // 注意这里把 equipmentId 改为 id，因为路由参数名是 id
      type: String,
      default: ''
    }
  },
  
  data() {
    return {
      equipment: {
        id: '',
        name: '',
        status: 1,
        lastMaintain: new Date()
      },
      statusOptions: [
        {value: 1, label: '运行中'},
        {value: 2, label: '待机'},
        {value: 3, label: '故障'}
      ],
      rules: {
        name: [
          { required: true, message: '请输入设备名称', trigger: 'blur' },
          { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
        ],
        status: [
          { required: true, message: '请选择设备状态', trigger: 'change' }
        ],
        lastMaintain: [
          { required: true, message: '请选择维护时间', trigger: 'change' }
        ]
      }
    }
  },
  
  computed: {
    isEdit() {
      return !!this.id  // 使用 this.id 而不是 this.equipmentId
    }
  },
  
  created() {
    console.log('Form created with ID:', this.id);
    if (this.isEdit) {
      this.loadEquipment()
    }
  },
  
  methods: {
    loadEquipment() {
      const equipment = equipmentService.getEquipmentById(this.id)
      if (equipment) {
        this.equipment = JSON.parse(JSON.stringify(equipment))
      } else {
        this.$message.error('未找到设备信息')
        this.$router.push('/test-one')
      }
    },
    
    submitForm() {
      this.$refs.equipmentForm.validate(valid => {
        if (valid) {
          if (this.isEdit) {
            equipmentService.updateEquipment(this.equipment)
            this.$message.success('更新成功')
          } else {
            equipmentService.addEquipment(this.equipment)
            this.$message.success('添加成功')
          }
          this.$router.push('/test-one')
        } else {
          this.$message.error('请完善表单信息')
          return false
        }
      })
    },
    
    cancel() {
      this.$router.push('/test-one')  // 返回设备列表页面
    }
  }
}
</script>

<style lang="scss" scoped>
.equipment-form {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  
  h2 {
    margin-bottom: 20px;
    text-align: center;
  }
}
</style>