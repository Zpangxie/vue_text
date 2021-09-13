<template>
  <div>
     <Student name="李四" sex="女" :age="18"/>
  </div>
</template>

<script>
//引入school组件
import Student from '../src/components/Student.vue'
export default {
    name:'App',
    components:{Student}
}
</script>

<style>

</style>