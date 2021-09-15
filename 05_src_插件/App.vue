<template>
  <div>
     <Student/>
     <hr>
     <School/>
  </div>
</template>

<script>
//引入school组件
import School from '../src/components/School.vue'
import Student from '../src/components/Student.vue'
export default {
    name:'App',
    components:{School, Student}
}
</script>

<style>

</style>