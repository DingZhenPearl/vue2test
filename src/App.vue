<template>
  <div id="app">
    <div class="layout">
      <!-- 左侧导航栏 -->
      <div class="sidebar">
        <div class="logo">
          <img alt="Vue logo" src="./assets/logo.png" class="logo-img">
          <h2>Vue 2 应用</h2>
        </div>
        <ul class="nav-menu">
          <li class="nav-item" 
              v-for="(item, index) in navItems" 
              :key="index"
              :class="{ active: currentPage === item.id }"
              @click="changePage(item.id)">
            {{ item.name }}
          </li>
        </ul>
      </div>
      
      <!-- 主内容区域 -->
      <div class="main-content">
        <!-- 根据选中页面显示不同组件 -->
        <div v-if="currentPage === 'replication'">
          <replication />
          <div class="components-container">
            <HelloWord />


            <h2>基础组件演示</h2>
            <div class="component-section">
              <h3>基础表单</h3>
              <BasicForm />
            </div>
            <div class="component-section">
              <h3>基础列表</h3>
              <BasicList />
            </div>
            <div class="component-section">
              <h3>基础表格</h3>
              <BasicTable />
            </div>
            <div class="component-section">
              <h3>表单模板测试</h3>
              <FormTemplateTest />
            </div>
            <div class="component-section">
              <h3>表格模板测试</h3>
              <TableTemplateTest />
            </div>
            <div class="component-section">
              <h3>列表模板测试</h3>
              <ListTemplateTest />
            </div>
          </div>
        </div>

        <exploration1 v-if="currentPage === 'exploration1'"/>
        <TDesign v-if="currentPage === 'exploration2'"/>
        <AntDesign v-if="currentPage === 'exploration2'"/>

        <industry-test v-if="currentPage === 'industry'"/>
      </div>
    </div>
  </div>
</template>

<script>
import replication from './components/replication.vue'
import exploration1 from './components/exploration1.vue'
import TDesign from './components/TDesign.vue'
import industryTest from './components/industryTest.vue'
import BasicForm from './components/basicForm.vue'
import BasicList from './components/basicList.vue'
import BasicTable from './components/basicTable.vue'
import FormTemplateTest from './components/formTemplateTest.vue'
import TableTemplateTest from './components/tableTemplateTest.vue'
import ListTemplateTest from './components/listTemplateTest.vue'
import HelloWord from './components/helloWord.vue'
import AntDesign from './components/antDesign.vue'
export default {
  name: 'App',
  components: {
    replication,
    exploration1,
    TDesign,
    industryTest,
    BasicForm,
    BasicList,
    BasicTable,
    FormTemplateTest,
    TableTemplateTest,
    ListTemplateTest,
    HelloWord,
    AntDesign
  },
  data() {
    return {
      currentPage: 'replication',
      navItems: [
        { id: 'replication', name: '复现' },
        { id: 'exploration1', name: '探索1' },
        { id: 'exploration2', name: '探索2' },
        { id: 'industry', name: '工业测试' }  // 新增导航项
      ]
    }
  },
  methods: {
    changePage(pageId) {
      this.currentPage = pageId;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  margin: 0;
}

.layout {
  display: flex;
  height: 100%;
}

.sidebar {
  width: 220px;
  background-color: #2c3e50;
  color: #fff;
  padding: 20px 0;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
}

.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  padding: 0 20px;
}

.logo-img {
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
}

.nav-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  padding: 15px 25px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.nav-item:hover {
  background-color: #34495e;
}

.nav-item.active {
  background-color: #42b983;
}

.main-content {
  flex: 1;
  padding: 25px;
  overflow-y: auto;
}

.components-container {
  margin-top: 20px;
}

.component-section {
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
}

.component-section h3 {
  margin-top: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #ebeef5;
  color: #42b983;
}
</style>
