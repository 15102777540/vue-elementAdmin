<template>
  <el-table :data="tableData">
    <el-table-column prop="date" label="姓名" width="140"></el-table-column>
    <el-table-column prop="name" label="日期" width="120"></el-table-column>
    <el-table-column prop="status" label="状态"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
  </el-table>
</template>
<script>
export default {
  name: "PetList",
  data() {
    const item = {
      date: "2016-05-02",
      name: "徐一",
      status: "审核中",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item)
    };
  }
};
</script>