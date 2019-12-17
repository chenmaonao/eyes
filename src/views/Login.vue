<template>
	<div class="login">
		<img
		class="auto-img" 
		src="/img/landing.jpg" 
		/>
		<div class="back" @click="back"></div>
		<div class="login-box">
			<input type="text" placeholder="请输入手机号/邮箱地址" />
			<input type="text" placeholder="请输入密码" />
			<button>登录</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			back() {
				this.$router.go(-1);
			}
		},
		activated() {
			this.$refs.video.play()
		}
	}
</script>

<style lang="scss" scoped>
	.login {
		position: relative;
		z-index: 20;
		width: 100%;
		height: 100%;
		font-size: 14px;
		// background-color: #468847;

		.back {
			width: 20px;
			height: 20px;
			position: absolute;
			top: 20px;
			left: 20px;
			background-image: url("/img/close.png");
			background-size: cover;
		}

		.login-box {
			position: absolute;
			top: 0;
			bottom: 1rem;
			padding-top: 50px;
			left: 0;
			right: 0;
			margin: auto;
			height: 7rem;
			width: 7rem;

			>input {
				width: 100%;
				padding-left: 20px;
				height: 1rem;
				color: #FFFFFF;
				margin: 10px 0;
				border-bottom: 1px solid #DDDDDD;
				background-color: transparent;
				outline: none;
			}

			>input::-webkit-input-placeholder {
				color: #FFFFFF;
			}

			>button {
				margin-top: 20px;
				width: 100%;
				height: 1rem;
				border: none;
				background-color: rgba(150, 150, 150, 0.6);
				outline: none;
				color: #333;
				font-size: 16px;
				font-weight: bold;
			}
		}
	}
</style>
