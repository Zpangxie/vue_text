<template>
  <div class="UserInfo">
    <input type="text" v-model="uid" />
    <button @click="getUserName">获取用户名</button>
    <p>{{ responseData }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      uid: "",
      responseData: null,
    };
  },
  methods: {
    getUserName() {
      axios
        // .get(`http://localhost:3000/api/user/getName?uid=${this.uid}`
        .get(`/3000api/user/getName`, {
          params: { uid: this.uid },
        })
        .then((res) => {
          this.responseData = res.data;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
