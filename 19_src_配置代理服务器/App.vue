<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>

    <ul>
      <li v-for="student in students" :key="student.id">
        姓名：{{ student.name }} 年龄：{{ student.age }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      students: [],
    };
  },
  methods: {
    getStudents() {
      axios.get("/api/studentInfo").then(
        (response) => {
          console.log("请求成功了", response.data);
          this.students = response.data;
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
    getCars() {
      axios.get("/demo/cars").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
  },
};
</script>
