<template>
  <div class="settings-page">
    <h1>Ant Design Vue 组件演示</h1>
    
    <!-- 表单部分 -->
    <div class="section">
      <h3>表单示例</h3>
      <a-form
        :model="formData"
        :rules="rules"
        ref="form"
        @finish="onSubmit"
        :label-col="{ span: 4 }"
        :wrapper-col="{ span: 14 }"
      >
        <a-form-item label="用户名" name="username">
          <a-input v-model="formData.username" placeholder="请输入用户名" />
        </a-form-item>
        
        <a-form-item label="邮箱" name="email">
          <a-input v-model="formData.email" placeholder="请输入邮箱" />
        </a-form-item>
        
        <a-form-item label="通知设置">
          <a-checkbox v-model="formData.notifications">接收通知</a-checkbox>
        </a-form-item>
        
        <a-form-item label="主题设置">
          <a-switch v-model="formData.darkMode" size="large">
            <template #checkedChildren>开</template>
            <template #unCheckedChildren>关</template>
          </a-switch>
        </a-form-item>
        
        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-space>
            <a-button type="primary" html-type="submit">保存设置</a-button>
            <a-button @click="onReset">重置</a-button>
          </a-space>
        </a-form-item>
      </a-form>
    </div>

    <!-- 列表部分 -->
    <div class="section">
      <h3>列表示例</h3>
      <a-list>
        <a-list-item v-for="(item, index) in listItems" :key="index">
          <a-list-item-meta>
            <template #avatar>
              <a-avatar>{{ item.avatar }}</a-avatar>
            </template>
            <template #title>{{ item.title }}</template>
            <template #description>{{ item.description }}</template>
          </a-list-item-meta>
          <template #actions>
            <a-space>
              <a @click="handleView(item)">查看</a>
              <a @click="handleEdit(item)">编辑</a>
            </a-space>
          </template>
        </a-list-item>
      </a-list>
    </div>

    <!-- 表格部分 -->
    <div class="section">
      <h3>表格示例</h3>
      <a-table
        :dataSource="tableData"
        :columns="columns"
        :bordered="true"
        :loading="loading"
        :pagination="pagination"
        @change="onPageChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AntDesignDemo',
  data() {
    return {
      // 表单数据
      formData: {
        username: '',
        email: '',
        notifications: false,
        darkMode: false
      },
      // 表单验证规则
      rules: {
        username: [
          { required: true, message: '请输入用户名' },
          { min: 3, message: '用户名至少3个字符' }
        ],
        email: [
          { required: true, message: '请输入邮箱' },
          { type: 'email', message: '请输入正确的邮箱格式' }
        ]
      },
      
      // 列表数据
      listItems: [
        {
          avatar: 'U1',
          title: '用户一',
          description: '这是用户一的描述信息'
        },
        {
          avatar: 'U2',
          title: '用户二',
          description: '这是用户二的描述信息'
        },
        {
          avatar: 'U3',
          title: '用户三',
          description: '这是用户三的描述信息'
        }
      ],

      // 表格数据
      loading: false,
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
          width: 100
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
          width: 100
        },
        {
          title: '地址',
          dataIndex: 'address',
          key: 'address'
        },
        {
          title: '操作',
          key: 'operation',
          width: 200,
          scopedSlots: { customRender: 'operation' }
        }
      ],
      tableData: [
        { key: 1, name: '张三', age: 28, address: '北京市朝阳区' },
        { key: 2, name: '李四', age: 32, address: '上海市浦东新区' },
        { key: 3, name: '王五', age: 25, address: '广州市天河区' }
      ],
      pagination: {
        total: 0,
        current: 1,
        pageSize: 10
      }
    }
  },
  methods: {
    onSubmit(values) {
      console.log('表单值:', values);
      this.$message.success('提交成功');
    },
    onReset() {
      this.$refs.form.resetFields();
      this.$message.info('表单已重置');
    },
    handleView(item) {
      this.$message.info(`查看${item.title}`);
    },
    handleEdit(item) {
      this.$message.info(`编辑${item.title || item.name}`);
    },
    handleDelete(row) {
      this.$confirm({
        title: '确认删除',
        content: `确定要删除 ${row.name} 吗？`,
        onOk: () => {
          this.tableData = this.tableData.filter(item => item.key !== row.key);
          this.$message.success('删除成功');
        }
      });
    },
    onPageChange(pagination) {
      this.pagination.current = pagination.current;
      this.pagination.pageSize = pagination.pageSize;
      // 这里可以加载新的数据
    }
  }
}
</script>

<style scoped>
.settings-page {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  color: #1890ff;
  margin-bottom: 30px;
}

.section {
  background: #fff;
  padding: 24px;
  border-radius: 2px;
  margin-bottom: 24px;
  box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16);
}

h3 {
  margin-top: 0;
  margin-bottom: 20px;
  color: rgba(0, 0, 0, 0.85);
}
</style>