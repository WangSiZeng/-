<template>
	<div id="homeBox">
		<el-carousel height="80px" v-for="(items,index) in this.$router.options.routes" 
		v-if="items.children" :key="index">
			<el-carousel-item v-for="(item,index) in items.children" :key="index">
				<h3 class="small">{{ item.name }}</h3>
			</el-carousel-item>
		</el-carousel>
		<div>
			日志
			<el-radio-group v-model="reverse">
				<el-radio :label="true">倒序</el-radio>
				<el-radio :label="false">正序</el-radio>
			</el-radio-group>
			<div v-if='activities'>
				<el-timeline :reverse="reverse">
					<el-timeline-item  v-for="(activity,index) in activities" 
					:key='index' style="max-width: 360px;"
					:timestamp='activity.time'>
						<p>{{inde}}</p>
						<p>{{activity.content}}</p>
						<span>{{activity.detail}}</span>
						<el-button type="text" @click="dialogVisible = true">详情</el-button>
						<el-dialog title="详情" :visible.sync="dialogVisible">
							<span>{{activity.detail}}</span>
							<span slot="footer" class="dialog-footer">
								<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
							</span>
						</el-dialog>
					</el-timeline-item>
				</el-timeline>
				
			</div>
		</div>
		<el-empty v-if='!activities' description="空空如也"></el-empty>
	</div>
	
</template>

<script>
export default{
	name: 'Home',
	data() {
		return{
			reverse: true,
			dialogVisible: false,
			activities: [
				{
					content: 'creat this',
					time: '2021-10-25',
					detail: 'In this day, this view is created!'
				},
				{
					content: 'hi, see you again',
					time: '2021-11-01',
					detail: 'Nothing haves done~_~'
				}
			]
		}
	}
}
</script>

<style>
#homeBox{
	text-align: center;
}
.el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
	background-color: #d3dce6;
}
</style>
