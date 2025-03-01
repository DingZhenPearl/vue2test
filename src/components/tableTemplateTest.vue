<template class="tableBox">
  <div class="tableItem">
    <!--<h3 style="text-align: center">标题</h3>-->
    <!-- el-table是调用了element-ui这一三方库的table组件 -->
    <!--将表格数据绑定在data中；style中控制表格的样式；有无border决定带不带表格-->
    <!--定义height属性，height="100",即可实现固定表头-->
    <el-table :data="tableData" style="width: 100%" border>
      <!--prop用来绑定数据键值对中的键名；label用来定义表格的列名；width用来定义列宽-->
      <el-table-column prop="number" label="标签1"></el-table-column>
      <el-table-column prop="name" label="标签2"></el-table-column>
      <el-table-column prop="address" label="标签3"></el-table-column>
    </el-table>
    <el-button @click="requireFansParam">端到端测试</el-button>
  </div>
  <!-- 添加其他元素 -->

  <!-- 总结：
          基础知识点：
          el-table标签：el-table是调用了element-ui这一三方库的table组件
            data -- 显示的数据
            prop -- 对应列内容的字段名，也可以使用 property 属性
            label	-- 显示的标题
  -->
</template>

<script>
export default {
  data(){
    return{
      //数组中的每一组数据是一个一个的对象，为键值对
      tableData:[{
        number: '01',
        name: '故障原因1',
        address: '地址1',
      },{
        number: '02',
        name: '故障原因2',
        address: '地址2',
      },{
        number: '03',
        name: '故障原因3',
        address: '地址3',
      }]
    }
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
  methods:{
    // 定义函数
    requireFansParam() {
      var httpRequest = new XMLHttpRequest();
      // URL填写
      const url = "http://10.160.4.92:8018/cloudForm/getAllFormByUid/20231001";
      // 请求方法
      httpRequest.open("GET", url);
      // 请求头
      httpRequest.setRequestHeader(
          "Content-Type",
          "application/x-www-form-urlencoded"
      );
      // 请求参数
      httpRequest.send(null);
      //在API中的this指代的是返回值的对象，如果想在API返回值中对data内的值进行赋值，可以_this来指向vue的component
      var _this = this
      httpRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          const result = JSON.parse(httpRequest.responseText);
          console.log(result)
          // 数据格式转化
          // var mainArray = []
          // for (var i = 0; i < result.data.length; i++) {
          //   if (result.data[i].deviceName.split('-')[0] === 'Paderborn滚动轴承') {
          //     mainArray.push(result.data[i]);
          //   }
          // }
          // var tempArr = []
          // for (var j = 0; j < mainArray.length; j++) {
          //   tempArr.push({
          //     number : mainArray[j].deviceId,
          //     name : mainArray[j].deviceName,
          //     address : mainArray[j].deviceDetails
          //   })
          // }

          let tempArr = []
          // eslint-disable-next-line no-unused-vars
          let length = result.data.length
          for(let i = 0; i< 3; i++){
            tempArr.push({
              number : result.data[i].form.id,
              name  : result.data[i].form.deviceName,
              address : result.data[i].form.lineStation
            })
          }
          console.log(tempArr)
          _this.tableData = tempArr
        }
      }
    },


  }

}
</script>

<style scoped>
.tableBox {
  width: 100%;
  text-align: center;
}
.tableItem {
  width: 100%;
  margin-top: 3%;
}
</style>