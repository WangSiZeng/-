<template>
	<div ref="work" class="work"></div>
</template>

<script>
export default {
	name: 'SoildPie',
	props: {
		message: {
			type: Array,
			required: true
		},
		colors: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			messageAll: this.message,
			color: this.colors
		}
	},
	methods: {
		init() {
			var echarts = require('echarts');
			echarts.init(this.$refs.work).setOption({
				series :[{
					type: 'pie', 
					radius: '100%',
					label: {
						show: true,
						position: 'inside'
					},
					fontSize: 20,
					fontWeight:'bold',
					color: this.color,
					data: this.messageAll
				}]
				
			});
		}
	},
	mounted() {
		this.init()
	}
}
	
</script>

<style scoped>
	.work {
		margin: 30px;
		padding: 10px;
		width: 140px;
		height: 140px;
		display: inline-block;
	}
</style>
