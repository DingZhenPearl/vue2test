<template>
  <div class="equipment-management">
    <!-- 状态筛选区 -->
    <el-row :gutter="20" class="filter-area">
      <el-col :span="8">
        <el-input v-model="searchKey" placeholder="设备ID/名称"></el-input>
      </el-col>
      <el-col :span="8">
        <el-select v-model="filterStatus" clearable placeholder="全部状态">
          <el-option
            v-for="item in statusOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="8">
        <el-button type="primary" @click="goToAddEquipment">新增设备</el-button>
      </el-col>
    </el-row>

    <!-- 设备状态统计 -->
    <el-row :gutter="20" class="status-board">
      <el-col :span="6" v-for="(status, index) in statusSummary" :key="index">
        <el-card shadow="hover">
          <div class="status-card" :style="{color: status.color}">
            <h3>{{ status.label }}</h3>
            <p class="count">{{ status.count }}</p>
            <p>{{ status.ratio }}%</p>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 设备信息表格 -->
    <el-table 
      :data="filteredEquipments"
      stripe
      style="width: 100%"
      class="equipment-table">
      <el-table-column prop="id" label="设备ID" width="120"></el-table-column>
      <el-table-column prop="name" label="设备名称"></el-table-column>
      <el-table-column label="状态" width="120">
        <template #default="{row}">
          <el-tag 
            :type="statusType[row.status]" 
            effect="dark"
            class="status-tag">
            {{ statusMap[row.status] }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="lastMaintain" label="最后维护时间"></el-table-column>
      <el-table-column label="操作" width="180">
        <template #default="{row}">
          <el-button size="mini" @click="goToEditEquipment(row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import equipmentService from '../services/equipmentService'

export default {
  data() {
    return {
      equipments: [],
      searchKey: '',
      filterStatus: null,
      statusMap: {
        1: '运行中',
        2: '待机',
        3: '故障'
      },
      statusType: {
        1: 'success',
        2: 'info',
        3: 'danger'
      },
      statusOptions: [
        {value: 1, label: '运行中'},
        {value: 2, label: '待机'},
        {value: 3, label: '故障'}
      ]
    }
  },

  computed: {
    filteredEquipments() {
      return this.equipments.filter(item => {
        const matchSearch = item.id.includes(this.searchKey) || 
          item.name.includes(this.searchKey)
        const matchStatus = this.filterStatus ? 
          item.status === this.filterStatus : true
        return matchSearch && matchStatus
      })
    },

    statusSummary() {
      const total = this.equipments.length
      return this.statusOptions.map(opt => {
        const count = this.equipments.filter(e => e.status === opt.value).length
        return {
          ...opt,
          count,
          ratio: total ? ((count / total) * 100).toFixed(1) : 0,
          color: this.statusType[opt.value]
        }
      })
    }
  },

  methods: {
    goToAddEquipment() {
      // 直接路由到添加页面
      this.$router.push('/equipment/add')
    },

    goToEditEquipment(row) {
      // 将要编辑的设备ID作为路由参数
      this.$router.push(`/equipment/edit/${row.id}`)
    },

    handleDelete(row) {
      this.$confirm('确认删除该设备？删除后数据无法恢复', '提示', {
        type: 'warning'
      }).then(() => {
        equipmentService.deleteEquipment(row.id)
        this.loadEquipments()
        this.$message.success('删除成功')
      }).catch(() => {
        this.$message.info('已取消删除')
      })
    },

    loadEquipments() {
      this.equipments = equipmentService.getAllEquipments()
    }
  },

  // 生命周期钩子
  created() {
    this.loadEquipments()
  }
}
</script>

<style scoped>
.equipment-management {
  padding: 20px;
  .filter-area {
    margin-bottom: 20px;
  }
  .status-board {
    margin-bottom: 20px;
    .status-card {
      text-align: center;
      .count {
        font-size: 24px;
        margin: 10px 0;
      }
    }
  }
  .status-tag {
    font-weight: bold;
    padding: 0 10px;
    border-radius: 12px;
  }
}
</style>