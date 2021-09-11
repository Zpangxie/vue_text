<template>
  <div>
      <h1 v-text='msg' ref='title'></h1>
      <School ref="sch"></School>
      <button ref='btn' @click="showDOM">点我获取上面的DOM元素</button>
  </div>
</template>

<script>
//引入school组件
import School from './components/School.vue'
export default {
    name:'App',
    data() {
        return {
            msg:'欢迎学习Vue！'
        }
    },
    components:{School},
    methods:{
        showDOM(){
            console.log(this.$refs.title);
            console.log(this.$refs.btn);
            console.log(this.$refs.sch);
        }
    }
}
</script>

<style>

</style>