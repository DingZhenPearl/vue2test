<template>
  <div class="home-page">
    <h1>Vue 原生组件基础知识点</h1>
    
    <!-- 表单部分 -->
    <section class="section">
      <h2>1. 表单示例</h2>
      <div class="card">
        <h3>表单输入绑定 (v-model)</h3>
        <form @submit.prevent="handleSubmit">
          <div class="form-item">
            <label for="username">用户名：</label>
            <input id="username" type="text" v-model="formData.username" placeholder="请输入用户名" />
          </div>
          
          <div class="form-item">
            <label for="password">密码：</label>
            <input id="password" type="password" v-model="formData.password" placeholder="请输入密码" />
          </div>
          
          <div class="form-item">
            <label>性别：</label>
            <label class="radio-label">
              <input type="radio" v-model="formData.gender" value="male" /> 男
            </label>
            <label class="radio-label">
              <input type="radio" v-model="formData.gender" value="female" /> 女
            </label>
          </div>
          
          <div class="form-item">
            <label>爱好：</label>
            <label class="checkbox-label">
              <input type="checkbox" v-model="formData.hobbies" value="reading" /> 阅读
            </label>
            <label class="checkbox-label">
              <input type="checkbox" v-model="formData.hobbies" value="coding" /> 编程
            </label>
            <label class="checkbox-label">
              <input type="checkbox" v-model="formData.hobbies" value="music" /> 音乐
            </label>
          </div>
          
          <div class="form-item">
            <label for="city">城市：</label>
            <select id="city" v-model="formData.city">
              <option value="">请选择城市</option>
              <option v-for="city in cities" :key="city.value" :value="city.value">
                {{ city.label }}
              </option>
            </select>
          </div>
          

          
          <div class="form-item">
            <button type="submit">提交</button>
            <button type="button" @click="resetForm">重置</button>
          </div>
        </form>
        
        <div class="form-preview">
          <h4>表单数据预览 (插值语法 {{}})</h4>
          <pre>username:{{ formData.username }}</pre>
          <pre>password:{{ formData.password }}</pre>
          <pre>gender:{{ formData.gender }}</pre>
          <pre>hobbies:{{ formData.hobbies }}</pre>
          <pre>city:{{ formData.city }}</pre>
          <pre>description:{{ formData.description }}</pre>
        </div>
      </div>
    </section>
    
    <!-- 列表部分 -->
    <section class="section">
      <h2>2. 列表示例</h2>
      
      <div class="card">
        <h3>有序列表 (v-for)</h3>
        <ol>
          <li v-for="(item, index) in orderedList" :key="index">
            {{ item }}
          </li>
        </ol>
      </div>
      
      <div class="card">
        <h3>无序列表 (v-for)</h3>
        <ul>
          <li v-for="(item, index) in unorderedList" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
    </section>
    
    <!-- 表格部分 -->
    <section class="section">
      <h2>3. 表格示例</h2>
      <div class="card">
        <table class="data-table">
          <thead>
            <tr>
              <th v-for="column in tableColumns" :key="column.prop">{{ column.label }}</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in tableData" :key="index">
              <td v-for="column in tableColumns" :key="column.prop">{{ item[column.prop] }}</td>
              <td>
                <button @click="viewUser(item)">查看</button>
                <button @click="deleteUser(index)">删除</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      // 表单数据
      formData: {
        username: '',
        password: '',
        gender: '',
        hobbies: [],
        city: '',
      },
      cities: [
        { value: 'beijing', label: '北京' },
        { value: 'shanghai', label: '上海' },
        { value: 'guangzhou', label: '广州' },
        { value: 'shenzhen', label: '深圳' }
      ],
      
      // 列表数据
      orderedList: ['Vue 模板语法', 'Vue 组件基础', 'Vue 生命周期', 'Vue 指令', 'Vue 计算属性','Vue 计算属性'],
      unorderedList: ['v-model', 'v-if/v-else', 'v-for', 'v-show', 'v-bind', 'v-bind'],

      
      // 表格数据
      tableColumns: [
        { prop: 'id', label: 'ID' },
        { prop: 'name', label: '姓名' },
        { prop: 'age', label: '年龄' },
        { prop: 'email', label: '邮箱' }
      ],
      tableData: [
        { id: 1, name: '张三', age: 28, email: 'zhangsan@example.com' },
        { id: 2, name: '李四', age: 32, email: 'lisi@example.com' },
        { id: 3, name: '王五', age: 25, email: 'wangwu@example.com' },
        { id: 4, name: '赵六', age: 30, email: 'zhaoliu@example.com' }
      ]
    }
  },
  methods: {
    handleSubmit() {
      alert('表单已提交：' + JSON.stringify(this.formData))
    },
    resetForm() {
      this.formData = {
        username: '',
        password: '',
        gender: '',
        hobbies: [],
        city: '',
        description: ''
      }
    },
    viewUser(user) {
      alert('查看用户：' + JSON.stringify(user))
    },
    deleteUser(index) {
      this.tableData.splice(index, 1)
    }
  }
}
</script>

<style scoped>
/* 所有样式已清除 */
</style>
