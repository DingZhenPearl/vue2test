<template class="formBox">
  <div class="formItem">
    <!-- form标签表示form内容 -->
    <form>
      <div>
        <!-- label表示标签文本 -->
        <label>用户名：</label>
        <!-- input表示输入框；v-model表示双向绑定 -->
        <input type="text" v-model="user.username">
      </div>
      <div>
        <label>密码：</label>
        <input type="password" v-model="user.password">
      </div>
      <div>
        <label>爱好：</label>
        <!-- select表示选择框，option表示选择框的内容 -->
        <select name="" id="" v-model="user.hobby">
          <option value="basketball">篮球</option>
          <option value="football">足球</option>
        </select>
      </div>
      <div>
        <label>性别：</label>
        <label>男</label>
        <input type="radio" v-model="user.sex" value="boy">
        <label>女</label>
        <input type="radio" v-model="user.sex" value="girl">
      </div>
      <div>
        <label>技能：</label>
        <label>前端</label>
        <input type="checkbox" v-model="user.skill" value="前端">
        <label>java</label>
        <input type="checkbox" v-model="user.skill" value="java">
        <label>php</label>
        <input type="checkbox" v-model="user.skill" value="php">
      </div>
      {{user}}
    </form>
  </div>
  <!-- 总结：
          基础知识点：
          1、form标签：表单是一个包含表单元素的区域。表单元素是允许用户在表单中输入内容，比如：文本域（textarea）、下拉列表（select）、单选框（radio-buttons）、复选框（checkbox） 等等。
          2、div标签：HTML <div> 元素是块级元素，它可用于组合其他 HTML 元素的容器。<div> 元素没有特定的含义。除此之外，由于它属于块级元素，浏览器会在其前后显示折行。
          3、label标签：<label> 标签为 input 元素定义标注（标记）。
          4、input标签：<input> 标签规定了用户可以在其中输入数据的输入字段。<input> 元素在 <form> 元素中使用，用来声明允许用户输入数据的 input 控件。
          5、select标签：<select> 元素用来创建下拉列表。<select> 元素中的 <option> 标签定义了列表中的可用选项。
  -->
</template>

<script>
export default {
  // 数据区域
  data() {
    return {
      user: {
        username: "",
        password: "",
        hobby: "",
        sex: "",
        skill: [],
      },
    };
  },
  // 组件初始化前的准备操作，在此处执行
  created() {
    // 事件监听，bus.$on事件一般在此处定义
    
    // 初始数据载入
    
    
  },
  // 组件初始化后需要进行的操作，在此处执行
  mounted() {
    // 组件渲染，传递参数，bus.$emit

  },
  // JS方法
  methods: {

  }
}

</script>

<style scoped>
.formBox {
  width: 100%;
  text-align: center;
}
.formItem{
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  margin-bottom: 5%;
  text-align: center;
}
</style>
