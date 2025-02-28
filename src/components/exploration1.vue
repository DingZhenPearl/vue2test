<template>
  <div class="element-demo">
    <h1>Element UI 组件示例</h1>

    <!-- 表单部分 -->
    <div class="section">
      <h2>1. Element UI 表单</h2>
      
      <el-card class="box-card">
        <div slot="header">
          <span>表单组件</span>
        </div>
        
        <el-form :model="form" ref="form" label-width="100px" :rules="rules">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
          </el-form-item>
          
          <el-form-item label="活动区域" prop="region">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="region1"></el-option>
              <el-option label="区域二" value="region2"></el-option>
            </el-select>
          </el-form-item>
          
          <el-form-item label="活动时间">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker placeholder="选择时间" v-model="form.time" style="width: 100%;"></el-time-picker>
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
            </el-checkbox-group>
          </el-form-item>
          
          <el-form-item label="特殊资源">
            <el-radio-group v-model="form.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
          
          <el-form-item label="活动形式">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          
          <el-form-item>
            <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
            <el-button @click="resetForm('form')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>

    <!-- 列表部分 -->
    <div class="section">
      <h2>2. Element UI 列表</h2>
      
      <el-card>
        <div slot="header">
          <span>基础列表</span>
        </div>
        
        <!-- 标签列表 -->
        <div class="tag-list">
          <h3>标签列表</h3>
          <el-tag v-for="(tag, index) in tags" :key="index" :type="tag.type" effect="dark" style="margin-right: 10px; margin-bottom: 10px;">
            {{ tag.name }}
          </el-tag>
        </div>
        
        <!-- 卡片列表 -->
        <div class="card-list">
          <h3>卡片列表</h3>
          <el-row :gutter="20">
            <el-col :span="8" v-for="(item, index) in cardList" :key="index">
              <el-card :body-style="{ padding: '0px' }" class="mb-20">
                <div class="card-content">
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.description }}</p>
                </div>
                <div class="card-footer">
                  <el-button type="text" @click="showMessage(item.title)">查看详情</el-button>
                  <time class="time">{{ item.time }}</time>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
        
        <!-- 时间线 -->
        <div class="timeline-section">
          <h3>时间线</h3>
          <el-timeline>
            <el-timeline-item 
              v-for="(activity, index) in timeline" 
              :key="index"
              :timestamp="activity.timestamp"
              :type="activity.type"
              :color="activity.color"
              :size="activity.size">
              {{ activity.content }}
            </el-timeline-item>
          </el-timeline>
        </div>
      </el-card>
    </div>

    <!-- 表格部分 -->
    <div class="section">
      <h2>3. Element UI 表格</h2>
      
      <el-card>
        <div slot="header">
          <span>高级表格</span>
        </div>
        
        <!-- 搜索筛选 -->
        <div class="table-filter">
          <el-input
            placeholder="请输入关键字"
            v-model="search"
            style="width: 200px; margin-right: 10px;">
          </el-input>
          <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
        </div>
        
        <!-- 表格组件 -->
        <el-table
          :data="filteredTableData"
          style="width: 100%; margin-top: 20px;"
          border
          stripe
          :default-sort = "{prop: 'date', order: 'descending'}"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            prop="date"
            label="日期"
            sortable
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
          <el-table-column
            label="操作"
            width="150">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        
        <!-- 分页 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 20, 50]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length"
          style="margin-top: 20px;">
        </el-pagination>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementDemo',
  data() {
    return {
      // 表单数据
      form: {
        name: '',
        region: '',
        date1: '',
        time: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ]
      },
      
      // 列表数据
      tags: [
        { name: '标签一', type: 'success' },
        { name: '标签二', type: 'info' },
        { name: '标签三', type: 'warning' },
        { name: '标签四', type: 'danger' }
      ],
      cardList: [
        {
          title: '项目一',
          description: '这是项目一的描述信息',
          time: '2023-10-01'
        },
        {
          title: '项目二',
          description: '这是项目二的描述信息',
          time: '2023-10-05'
        },
        {
          title: '项目三',
          description: '这是项目三的描述信息',
          time: '2023-10-10'
        }
      ],
      timeline: [
        { content: '创建项目', timestamp: '2023-10-01', type: 'primary' },
        { content: '项目开发', timestamp: '2023-10-10', type: 'success' },
        { content: '测试阶段', timestamp: '2023-10-20', type: 'warning' },
        { content: '项目上线', timestamp: '2023-10-30', type: 'danger' }
      ],
      
      // 表格数据
      tableData: [{
        date: '2023-10-01',
        name: '张三',
        address: '北京市朝阳区芍药居'
      }, {
        date: '2023-10-02',
        name: '李四',
        address: '上海市浦东新区金沙江路'
      }, {
        date: '2023-10-03',
        name: '王五',
        address: '广州市天河区珠江新城'
      }, {
        date: '2023-10-04',
        name: '赵六',
        address: '深圳市南山区科技园'
      }, {
        date: '2023-10-05',
        name: '钱七',
        address: '杭州市西湖区西溪路'
      }],
      search: '',
      multipleSelection: [],
      currentPage: 1,
      pageSize: 5
    }
  },
  computed: {
    filteredTableData() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      
      if (this.search) {
        return this.tableData
          .filter(data => Object.values(data).some(value => value.toString().includes(this.search)))
          .slice(start, end);
      }
      return this.tableData.slice(start, end);
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: '提交成功！',
            type: 'success'
          });
        } else {
          this.$message.error('表单验证失败');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    showMessage(title) {
      this.$message({
        message: `你点击了 ${title}`,
        type: 'info'
      });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit(index, row) {
      this.$message(`编辑第 ${index+1} 行，姓名：${row.name}`);
    },
    handleDelete(index, row) {
      this.$confirm('此操作将永久删除该条目, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData.splice(this.tableData.indexOf(row), 1);
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
    handleSearch() {
      this.currentPage = 1;
    },
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    }
  }
}
</script>

<style scoped>
.element-demo {
  max-width: 1000px;
}

h1 {
  color: #42b983;
  margin-bottom: 30px;
}

h2 {
  color: #2c3e50;
  margin: 25px 0 15px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #ebeef5;
}

.section {
  margin-bottom: 40px;
}

.mb-20 {
  margin-bottom: 20px;
}

.el-card {
  margin-bottom: 20px;
}

.card-content {
  padding: 14px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  border-top: 1px solid #ebeef5;
}

.time {
  font-size: 13px;
  color: #999;
}

.table-filter {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.tag-list, .card-list, .timeline-section {
  margin-bottom: 30px;
}
</style>