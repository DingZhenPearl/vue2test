<template>
  <div class="settings-page">
    <h1>设置页面</h1>
    <div class="settings-section">
      <h3>应用设置</h3>
      <div class="setting-item">
        <label>
          <input type="checkbox" v-model="darkMode"> 深色模式
        </label>
      </div>
      <div class="setting-item">
        <label>
          <input type="checkbox" v-model="notifications"> 开启通知
        </label>
      </div>
    </div>
    
    <div class="settings-section">
      <h3>账户信息</h3>
      <div class="setting-item">
        <label for="username">用户名</label>
        <input type="text" id="username" v-model="username" class="input-field">
      </div>
      <div class="setting-item">
        <label for="email">电子邮箱</label>
        <input type="email" id="email" v-model="email" class="input-field">
      </div>
      <button class="save-button">保存设置</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingsPage',
  data() {
    return {
      darkMode: false,
      notifications: true,
      username: 'user1',
      email: 'user@example.com'
    }
  }
}
</script>

<style scoped>
.settings-page {
  max-width: 600px;
}

h1 {
  color: #42b983;
  margin-bottom: 30px;
}

.settings-section {
  margin-bottom: 30px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.settings-section h3 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #2c3e50;
}

.setting-item {
  margin-bottom: 15px;
}

.input-field {
  display: block;
  width: 100%;
  padding: 8px 12px;
  margin-top: 6px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.save-button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

.save-button:hover {
  background-color: #3aa876;
}
</style>