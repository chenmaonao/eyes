<template>
	<div id="app">
		<!-- 视图显示 -->
		<keep-alive>
			<router-view />
		</keep-alive>


		<!-- 底部路由 -->
		<div class="tabbar">
			<router-link tag="div" to="/home">
				<i class="feed"></i>
				<span>首页</span>
			</router-link>
			<router-link tag="div" to="/community">
				<i class="follow"></i>
				<span>刷刷</span>
			</router-link>
			<div @click="gotoLogin">
				<i class="publish-add"></i>
			</div>
			<router-link tag="div" to="/message">
				<i class="category"></i>
				<span>通知</span>
			</router-link>
			<router-link tag="div" to="/mine">
				<i class="profile"></i>
				<span>我的</span>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data: () => ({
			feedData: null
		}),

		methods: {
			gotoLogin(){
				this.$router.push("/login")
			}
		},

		mounted() {

		}
	}
</script>



<style lang="scss" scoped>
	@import "./assets/scss/mixin.scss";

	#app {
		position: relative;
		height: 100%;

	}

	.tabbar {
		display: flex;
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 50px;
		border-top: 1px solid #eee;
		background-color: #fff;

		div {
			height: 100%;
			flex: 1;
			text-align: center;
			color: #9b9b9b;

			span {
				position: absolute;
				bottom: 3px;
				transform: translateX(-50%);
				font-size: 10px;
			}

			i {
				margin: 0 auto;
				margin-top: 5px;
				display: block;
				width: 44px;
				height: 27px;
			}
			
			.publish-add{
				margin-top: 10px;
				width: 30px;
				height: 30px;
				background-image: url("/img/publish_add.png");
				background-repeat: no-repeat;
				background-size: 49px 49px;
				background-position: -9px -10px;
			}

			.feed {
				
				@include bg_img(feed, 44px 27px)
			}

			.follow {

				@include bg_img(follow, 44px 27px)
			}

			.category {

				@include bg_img(category, 44px 27px)
			}

			.profile {

				@include bg_img(profile, 44px 27px)
			}
		}

		.router-link-active {
			color: #000000;

			.feed {
				
				@include bg_img(feed_selected, 44px 27px)
			}

			.follow {

				@include bg_img(follow_selected, 44px 27px)
			}

			.category {

				@include bg_img(category_selected, 44px 27px)
			}

			.profile {

				@include bg_img(profile_selected, 44px 27px)
			}
		}

	}
</style>
