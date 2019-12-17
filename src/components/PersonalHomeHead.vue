<template>
	<div class="head">
		<div class="head-img" @click="tologin">
			<img class="auto-img" src="/img/ic_app.png" />
		</div>
		<div class="title">点击登录即可评论及发布内容</div>
		
		<div class="card clearfix">
			<div class="">
				<div class="smallimg">
					<img class="auto-img" src="/img/ic_action_like_heart_grey.png" />
				</div>
				<span>收藏</span>
			</div>
			
			<div>
				<div class="smallimg">
					<img class="auto-img" src="/img/ic_action_like_heart_grey.png" />
				</div>
				<span>缓存</span>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		methods:{
			tologin(){
				this.$router.push("/login")
			}
		}
	}
</script>

<style lang="scss" scoped>
	.head{
		height: 235px;
		width: 100%;
		overflow: hidden;
		background-color: #f8f8f8;
		color: #7d7d7d;
		
		.head-img{
			height: 80px;
			width: 80px;
			padding: 2px;
			margin: 0 auto;
			margin-top: 20px;
			border: 1px solid #DDDDDD;
			border-radius: 50%;
			
			>img{
				border-radius: 50%;
			}
		}
		
		.title{
			font-size: 14px;
			text-align: center;
			margin-top: 30px;
		}
		
		.card{
			width: 100%;
			overflow:hidden;
			margin:0 auto;
			margin-top:50px;
			
			>div{
				width: 50%;
				float: left;
				text-align: center;
				font-size: 14px;
				border-right: 1px solid #ddd;
			}
			
			span{
				vertical-align: top;
				line-height: 20px;
			}
			

			.smallimg{
				display: inline-block;
				width: 20px;
				height: 20px;
				margin-right: 8px;
			}
		}
	}
</style>
