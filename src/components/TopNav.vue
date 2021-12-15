<template>
	<div>
		<el-page-header 
			:content="title"
			@back="goBack" >
		</el-page-header>
	</div>
	
</template>

<script>
	export default {
		data () {
			return {
			}
		},
		props: ['title','canBack'],
		methods: {
			goBack() {
				if (this.$props.canBack === true && window.history.length > 1) {
					window.history.back()
				} else {
					this.$alert('<p style="color:red; width:20%">无法返回</p>','警告',{
						confirmButtonText: '确定',
						dangerouslyUseHTMLString: true
					})
				}
			}
		}
	}
</script>

<style>
</style>
