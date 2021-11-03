<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>

    <ul>
      <li v-for="student in students" :key="student.id">
        姓名：{{ student.name }} 年龄：{{ student.age }}
      </li>
      <li v-for="car in cars" :key="car.id">
         品牌：{{ car.name }} 价格：{{ car.price }}
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
      cars: [],
    };
  },
  methods: {
    getStudents() {
      axios.get("http://localhost:8080/demo/students").then(
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
      axios.get("http://localhost:8080/api/cars").then(
        (response) => {
          console.log("请求成功了", response.data);
          this.cars = response.data;
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
  },
};
</script>
