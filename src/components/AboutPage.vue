<template>
  <div class="about-page">
    <h1>关于页面</h1>
    <p>这是一个使用Vue 2构建的简单应用，具有左侧导航栏布局。</p>
    <p>您可以通过点击左侧的导航项在不同页面之间切换，而无需使用vue-router。</p>
    <div class="about-card">
      <h3>项目信息</h3>
      <p>这是一个示例项目，展示了如何在Vue 2中创建简单的页面导航系统。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.about-page {
  max-width: 800px;
}

h1 {
  color: #42b983;
  margin-bottom: 20px;
}

p {
  line-height: 1.6;
  margin-bottom: 15px;
}

.about-card {
  background-color: #f5f7fa;
  border-left: 4px solid #42b983;
  padding: 15px 20px;
  margin-top: 30px;
  border-radius: 4px;
}

.about-card h3 {
  margin-top: 0;
  color: #2c3e50;
}
</style>