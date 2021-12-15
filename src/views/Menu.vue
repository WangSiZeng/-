<template>
	<div id="menuBox">
		<el-header>
			<TopNav title="主页" :canBack='false'/>
		</el-header>
		<el-container v-if="!isFirstLogin">
			<el-container>
				<el-aside width='auto'>
					<el-menu v-for="(items,index) in this.$router.options.routes" v-if="items.children" :key="index"
					 router>
						<el-menu-item v-for="(item,index) in items.children" :index="item.path" :key="index">
							<template style="width: auto;">
								<i class="el-icon-location"></i>
								<span slot="title">{{item.name}}</span>
							</template>
						</el-menu-item>
					</el-menu>
				</el-aside>
				<el-main>
					<router-view />
				</el-main>
			</el-container>
		</el-container>
		<!-- 首次登录必填 -->
		<el-form  label-position="right" label-width="auto" 
		v-if="isFirstLogin" :rules="rules" ref="firstLoginForm"
		:model="firstLoginForm" inline>
		<el-form-item prop="name" label="昵称">
			<el-input
			type="text"
			auto-complete="false"
			v-model="firstLoginForm.name"
			placeholder="昵称">
			</el-input>
		</el-form-item>
			<el-form-item label="性别">
				<el-select v-model="firstLoginForm.gender">
					<el-option
					v-for="e in gender"
					:label="e.sex"
					:value="e.value" 
					prop="firstLoginForm.gender">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item prop="age" label="年龄">
				<el-input-number
				type='num'
				auto-complete="false"
				v-model="firstLoginForm.age"
				placeholder="年龄">
				</el-input-number>
			</el-form-item>
			<el-form-item prop="qq" label="QQ号">
				<el-input
				type="text"
				auto-complete="false"
				v-model="firstLoginForm.qq"
				placeholder="qq号">
				</el-input>
			</el-form-item>
			<el-form-item prop="wechat" label="微信号">
				<el-input
				type="text"
				auto-complete="false"
				v-model="firstLoginForm.wechat"
				placeholder="微信号">
				</el-input>
			</el-form-item>
			<el-button type="primary" style="width:100%"
			@click="submitfirstLoginForm()">提交</el-button>
		</el-form>
		
	</div>
</template>

<script>
import TopNav from '../components/TopNav.vue'
export default{
	name: 'Menu',
	data() {
		const nameValidator = (rule, value, callback) => {
			if(value === '') {
				callback(new Error('请填写昵称'))
			} else {
				callback()
			}
		}
		return{
			// isFirstLogin: sessionStorage.getItem('isFirstLogin'),
			isFirstLogin: false,
			gender: [
				{sex:'男',value: 0},
				{sex:'女',value: 1}
			],
			rules:{
				name:[{validator: nameValidator, trigger: 'blur'}],
				gender:[{required: true}],
				age:[{required:true}],
				qq: [{required: true,min:10}],
				wechat:[{required: true,min:10}]
			},
			firstLoginForm:{
				name: '',
				gender: 0,
				age: '0',
				qq: '',
				wechat: ''
			}
		}
	},
	components: {
		TopNav
	},
	methods:{
		submitfirstLoginForm() {
			this.$refs.firstLoginForm.validate((valid) => {
				if (valid) {
					// console.log(sessionStorage.getItem('isFirstLogin'))
					sessionStorage.setItem('isFirstLogin',false)
					this.isFirstLogin = false
					this.$router.push('/home')
				} else {
					this.$message.error('请填写完整')
					console.log('请填写完整')
					return false
				}
			})
		}
	}
} 
</script>

<style>
	#menuBox{
		text-align: center;
	}
</style>
