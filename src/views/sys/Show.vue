<template>
	<div id="showBox">
		<div id="base">
			<div class="label">
				<b>基本信息:</b>
				<p>css画的</p>
			</div>
			<div>
				<pie v-for="(item,index) in baseMessage" :key="index" :style='getStyle(item.color,item.percent)'
					:content='item.content' :colorType='item.color' :percent='item.percent'>
				</pie>
			</div>
			
			<div class="label"><b>身体外呈:</b></div>
			<div>
				<pie v-for="(item,index) in bodyMessage" :key="index" :style='getStyle(item.color,item.percent)'
					:content='item.content' :colorType='item.color' :percent='item.percent'>
				</pie>
			</div>
			
			<div class="label">
				<b>工作领域以及相关能力</b>
				<p>echarts导的</p>
			</div>
			<div>
				<solidPie v-for="(item,index) of workMessage" :key="index" :message='item.data' :colors='item.color'>
				</solidPie>
			</div>
		</div>
	</div>
</template>

<script>
import Pie from "../../components/Pie.vue"
import SolidPie from "../../components/SolidPie.vue"
export default{
	name: 'Find',
	data() {
		return {
			baseMessage: [
				{
					content: "信息1",
					color: "#48A6FF",
					percent: 28
				},
				{
					content: "信息2",
					color: "#79CA96",
					percent: 22
				},
				{
					content: "信息3",
					color: "#F2D854",
					percent: 22
				},
				{
					content: "信息1",
					color: "#48A6FF",
					percent: 28
				},
				{
					content: "信息2",
					color: "#79CA96",
					percent: 22
				},
				{
					content: "信息3",
					color: "#F2D854",
					percent: 22
				}
			],
			bodyMessage: [
				{
					content: "信息1",
					color: "#48A6FF",
					percent: 28
				},
				{
					content: "信息2",
					color: "#79CA96",
					percent: 22
				},
				{
					content: "信息3",
					color: "#F2D854",
					percent: 22
				},
				{
					content: "信息1",
					color: "#48A6FF",
					percent: 28
				},
				{
					content: "信息2",
					color: "#79CA96",
					percent: 22
				},
				{
					content: "信息3",
					color: "#F2D854",
					percent: 22
				}
			],
			workMessage: [
				{
					data:[
						{value:100, name:'JAVA'},
						{value:100, name:'WEB'},
						{value:100, name:'CPP'}
					],
					color:['#E5BFCE','#CB488C','#FEE1E1']
				},
				{
					data:[
						{value:21, name:''},
						{value:24, name:''},
						{value:25, name:''},
						{value:30, name:''}
					],
					color:['#5E3FC0','#F4F0FE','#E5DAFC','#CBB6F7']
				},
				{
					data:[
						{value:100, name:''},
						{value:100, name:''},
						{value:100, name:''},
						{value:100, name:''},
						{value:100, name:''},
						{value:100, name:''}
					],
					color:['#66C589','#EBF5ED','#C9EAD7','#A8DEBA','#88D2A1','#5AAA77']
				}
			]
		}
	},
	components: {
		Pie,
		SolidPie
	},
	methods:{
		getStyle(color,percent) {
			let colorA = "--color1"
			let percentB = "--percent"
			return {
				[colorA]:color,
				[percentB]:percent+"%"
				}
		}
	}
}
</script>

<style scoped>
	.label {
		float: left;
	}
</style>
