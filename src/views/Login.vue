<template>
  <div id="loginBox">
	<TopNav title="登录" :canBack='false'/>
	<img alt="Vue logo" src="../assets/logo.png">
	<el-form label-position="left" label-width="auto"
	:rules="rules" ref="loginForm" :model="loginForm">
		<el-form-item prop="username" label="用户名">
			<el-input
			type="text"
			auto-complete="false"
			v-model="loginForm.username"
			placeholder="用户名">
			<template slot="prepend">
				<i class="el-icon-user-solid"></i>
			</template>
			</el-input>
		</el-form-item>
		<el-form-item prop="password" label="密码">
			<el-input
			type="password"
			auto-complete="false"
			v-model="loginForm.password"
			placeholder="密码">
			<template slot="prepend">
				<i class="el-icon-lock"></i>
			</template>
			</el-input>
		</el-form-item>
		<el-link href="http://localhost:8080/#/sign" type="primary" :underline="false">注册</el-link>
		<el-button type="primary" style="width:100%" 
		@click="submitLoginForm()">登陆</el-button>
	</el-form>
  </div>
</template>

<script>
import TopNav from '../components/TopNav.vue'
export default {
	name: 'Login',
	data() {
		return {
			rules: {
				username: [{ required: true, message: '用户名未填写', trigger: 'blur'}],
				password: [{ required: true, message: '密码未填写', trigger: 'blur'}]
			},
			loginForm: {
				username: '',
				password: ''
			}
		}
	},
	components: {
		TopNav
	},
	methods: {
		submitLoginForm() {
			this.$refs.loginForm.validate((valid) => {
				if (valid) {
					// console.log(this.loginForm)
					this.loading = true
					
					// this.loading = false
					// sessionStorage.setItem('isFirstLogin',true)
					// this.$router.push('/home')
					// sessionStorage.setItem('isFirstLogin',false)
					// this.$router.push('/menu')
					
					this.$ajax('/api/login', this.loginForm).then((resp) => {
						if (resp) {
							this.loading = false
							console.log(resp.data.data)
							// sessionStorage.setItem('isFirstLogin',true)
							sessionStorage.setItem('isFirstLogin',JSON.stringify(resp.data.data.isFirstLogin))
							if (sessionStorage.getItem('isFirstLogin')) {
								this.$router.push('/menu')
							} else {
								this.$router.push('/home')
							}
							
						}
					})
				} else {
					this.$message.error('请填写完整')
					// console.log('请填写完整')
					return false
				}
			})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#loginBox{
		text-align: center;
	}
</style>
