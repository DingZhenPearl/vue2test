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
        <replication v-if="currentPage === 'replication'"/>
        <exploration1 v-if="currentPage === 'exploration1'"/>
        <SettingsPage v-if="currentPage === 'settings'"/>
      </div>
    </div>
  </div>
</template>

<script>
import replication from './components/replication.vue'
import exploration1 from './components/exploration1.vue'
import SettingsPage from './components/SettingsPage.vue'

export default {
  name: 'App',
  components: {
    replication,
    exploration1,
    SettingsPage
  },
  data() {
    return {
      currentPage: 'replication',
      navItems: [
        { id: 'replication', name: '复现' },
        { id: 'exploration1', name: '探索1' },
        { id: 'settings', name: '设置' }
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
</style>
