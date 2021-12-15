<template>
	<div id="signBox">
		<TopNav title="注册" :canBack='true'/>
		<img alt="Vue logo" src="../assets/logo.png">
		<el-form  label-position="left" label-width="auto"
		:rules="rules" ref="signForm" :model="signForm">
			<el-form-item prop="username" label="真实姓名">
				<el-input
				type="text"
				auto-complete="false"
				v-model="signForm.username"
				placeholder="真实姓名">
				<template slot="prepend">
					<i class="el-icon-user-solid"></i>
				</template>
				</el-input>
			</el-form-item>
			<el-form-item prop="password" label="密码">
				<el-input
				type="password"
				auto-complete="false"
				v-model="signForm.password"
				placeholder="密码">
				<template slot="prepend">
					<i class="el-icon-lock"></i>
				</template>
				</el-input>
			</el-form-item>
			<el-form-item prop="rePassword" label="确定密码">
				<el-input
				type="password"
				auto-complete="false"
				v-model="signForm.rePassword"
				placeholder="再次确定密码">
				<template slot="prepend">
					<i class="el-icon-unlock"></i>
				</template>
				</el-input>
			</el-form-item>
			<el-form-item prop="telphone" label="电话">
				<el-input
				type="input"
				auto-complete="false"
				v-model="signForm.telphone"
				placeholder="电话">
				<template slot="prepend">
					<i class="el-icon-phone"></i>
				</template>
				</el-input>
			</el-form-item>
			<el-link href="/" type="info" :underline="false">登陆</el-link>
			<el-button type="primary" style="width:100%" 
			@click="submitSignForm()">注册</el-button>
		</el-form>
	</div>
</template>

<script>
import TopNav from '../components/TopNav.vue'
export default {
	name: 'Sign',
	data() {
		const usernameValidator = (rule, value, callback) => {
			if(value === '') {
				callback(new Error('用户名未填写'))
			} else {
				callback()
			}
		}
		const passwordValidator = (rule, value, callback) => {
			if(value === '') {
				callback(new Error('密码未填写'))
			} else {
				callback()
			}
		}
		const rePasswordValidator = (rule, value, callback) => {
			if(value === '') {
				callback(new Error('再次确定密码未填写'))
			} else if (value !== this.signForm.password) {
				callback(new Error('两次输入密码不一致!'))
			} else {
				callback()
			}
		}
		const telphoneValidator = (rule, value, callback) => {
			if (!Number.isInteger(value)) {
				callback(new Error('请输入数字值'));
			} else{
				if(value === '') {
					callback(new Error('电话未填写'))
				} else {
					callback()
				}
			}
		}
		return {
			rules: {
				username: [
					{validator: usernameValidator, trigger: 'blur'}
				],
				password: [
					{validator: passwordValidator, trigger: 'blur'}
				],
				rePassword: [
					{validator: rePasswordValidator, trigger: 'blur'}
				],
				telphone: [
					{validator: telphoneValidator,min:6,max:11,trigger: 'blur'}
				]
			},
			signForm: {
				username: '',
				password: '',
				telphone: ''
			}
		}
	},
	components: {
		  TopNav
	},
	methods: {
		submitSignForm() {
			this.$refs.loginForm.validate((valid) => {
				if (valid) {
					console.log(this.signForm)
					this.loading = true
					this.$ajax('/api/sign', this.loginForm).then((resp) => {
					if (resp) {
						this.loading = false
						const tokenStr = resp.obj.tokenHead + resp.obj.token
						window.sessionStorage.setItem('tokenStr', tokenStr)
						this.$router.push('/')
					}
				})} else {
					this.$message.error('请填写完整')
					// console.log('请填写完整')
					return false
				}
			})
		}
	}
}
</script>

<style>
	#signBox{
		text-align: center;
	}
</style>
