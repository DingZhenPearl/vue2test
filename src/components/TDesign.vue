<template>
  <div class="settings-page">
    <h1>TDesign 组件演示</h1>
    
    <!-- 表单部分 -->
    <div class="section">
      <h3>表单示例</h3>
      <t-form 
        :data="formData" 
        :rules="rules"
        ref="form"
        @submit="onSubmit"
        label-align="right"
        :label-width="100"
      >
        <t-form-item label="用户名" name="username">
          <t-input v-model="formData.username" placeholder="请输入用户名"/>
        </t-form-item>
        
        <t-form-item label="邮箱" name="email">
          <t-input v-model="formData.email" placeholder="请输入邮箱"/>
        </t-form-item>
        
        <t-form-item label="通知设置">
          <t-checkbox v-model="formData.notifications">接收通知</t-checkbox>
        </t-form-item>
        
        <t-form-item label="主题设置">
          <t-switch v-model="formData.darkMode" size="large">
            <template #label>深色模式</template>
          </t-switch>
        </t-form-item>
        
        <t-form-item>
          <t-space>
            <t-button theme="primary" type="submit">保存设置</t-button>
            <t-button theme="default" @click="onReset">重置</t-button>
          </t-space>
        </t-form-item>
      </t-form>
    </div>

    <!-- 列表部分 -->
    <div class="section">
      <h3>列表示例</h3>
      <t-list>
        <t-list-item v-for="(item, index) in listItems" :key="index">
          <t-list-item-meta
            :title="item.title"
            :description="item.description"
          >
            <template #avatar>
              <t-avatar>{{ item.avatar }}</t-avatar>
            </template>
          </t-list-item-meta>
          <template #action>
            <t-space>
              <t-button variant="text" @click="handleView(item)">查看</t-button>
              <t-button variant="text" @click="handleEdit(item)">编辑</t-button>
            </t-space>
          </template>
        </t-list-item>
      </t-list>
    </div>

    <!-- 表格部分 -->
    <div class="section">
      <h3>表格示例</h3>
      <t-table
        :data="tableData"
        :columns="columns"
        :bordered="true"
        :stripe="true"
        :loading="loading"
        :pagination="pagination"
        @page-change="onPageChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TdesignDemo',
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
          colKey: 'name',
          title: '姓名',
          width: 100
        },
        {
          colKey: 'age',
          title: '年龄',
          width: 100
        },
        {
          colKey: 'address',
          title: '地址'
        },
        {
          colKey: 'operation',
          title: '操作',
          width: 200,
          cell: (h, { row }) => (
            <t-space>
              <t-button theme="primary" variant="text" onClick={() => this.handleEdit(row)}>
                编辑
              </t-button>
              <t-button theme="danger" variant="text" onClick={() => this.handleDelete(row)}>
                删除
              </t-button>
            </t-space>
          )
        }
      ],
      tableData: [
        { id: 1, name: '张三', age: 28, address: '北京市朝阳区' },
        { id: 2, name: '李四', age: 32, address: '上海市浦东新区' },
        { id: 3, name: '王五', age: 25, address: '广州市天河区' }
      ],
      pagination: {
        total: 0,
        current: 1,
        pageSize: 10
      }
    }
  },
  methods: {
    onSubmit({ validateResult, firstError }) {
      if (validateResult === true) {
        this.$message.success('提交成功');
      } else {
        this.$message.warning(firstError);
      }
    },
    onReset() {
      this.$refs.form.reset();
      this.$message.info('表单已重置');
    },
    handleView(item) {
      this.$message.info(`查看${item.title}`);
    },
    handleEdit(item) {
      this.$message.info(`编辑${item.title || item.name}`);
    },
    handleDelete(row) {
      this.$dialog.confirm({
        header: '确认删除',
        body: `确定要删除 ${row.name} 吗？`,
        onConfirm: () => {
          this.tableData = this.tableData.filter(item => item.id !== row.id);
          this.$message.success('删除成功');
        }
      });
    },
    onPageChange(pageInfo) {
      this.pagination.current = pageInfo.current;
      this.pagination.pageSize = pageInfo.pageSize;
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
  color: var(--td-brand-color);
  margin-bottom: 30px;
}

.section {
  background: var(--td-bg-color-container);
  padding: 24px;
  border-radius: var(--td-radius-medium);
  margin-bottom: 24px;
}

h3 {
  margin-top: 0;
  margin-bottom: 20px;
  color: var(--td-text-color-primary);
}
</style>