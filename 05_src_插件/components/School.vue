<template>
	<div>
		<h2>学校名称：{{name|myslice}}</h2>
		<h2>学校地址：{{address}}</h2>
		<button @click='test'>点我</button>
	</div>
</template>

<script>

	export default {
		name:'School',
		data() {
			return {
				name:'尚硅谷atshangguigu',
				address:'北京',
			}
		},
        methods:{
			fest(){
				this.hello()
			}
		}
	}
</script>