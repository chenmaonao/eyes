<template>

	<div v-if="feedData.data">
		<div class="imgbox">
			<img class="auto-img"  @click="showV" :src="feedData.data.cover.feed" />
			<i class="daily-icon"></i>
			<Vduration :feedData="feedData" class="vduration"></Vduration>
		</div>

		<div class="author clearfix">
			<AuthorIcon :feedDataIcon="feedData.data.author.icon ? feedData.data.author.icon : '/img/ic_app.png'"></AuthorIcon>
			<div class="author-text">
				<span class="data-title">{{feedData.data.title}}</span>
				<span class="data-author">{{feedData.data.author.name}} / #{{feedData.data.category}}</span>
				<i class="share-icon"></i>
			</div>
		</div>

	</div>

</template>

<script>
	import Vduration from "./smallComponents/Vduration.vue"
	import AuthorIcon from "./smallComponents/AuthorIcon.vue"
	
	export default {
		props: {
			feedData: Object,
			index: Number
		},
		data: () => ({
			//proc: process.env.BASE_URL
		}),
		components:{
			Vduration,
			AuthorIcon
		},
		methods: {
			showV(){
				// this.$emit("showEyeVideo",this.index);
				this.$router.push({
					path: "/video",
					query:{
						'play-data': this.feedData
					}
				})
			}

		}


	}
</script>

<style scoped lang="scss">
	.imgbox {
		position: relative;
		height: 220px;
		width: 345px;
		margin: 0 auto;
		padding: 10px 0;
		border-radius: 4px;
		background-color: #FFFFFF;

		@media screen and (max-width: 380px) {
			height: 5.86rem;
			width: 9.2rem;
		}

		img {
			border-radius: 4px;
		}
		
		.vduration{
			display: block;
			font-size: 10px;
			background-color: rgba(0,0,0,0.8);
			border-radius: 4px;
			position: absolute;
			padding: 1px;
			font-weight: 200;
			bottom: 18px;
			right: 8px;
			
		}

		.daily-icon {
			position: absolute;
			display: block;
			height: 50px;
			width: 50px;
			top: 20px;
			left: 10px;
			background-image: url("/img/daily_label.png");
			background-position: center;
			background-size: cover;
		}


	}


	.author {

		border-bottom: 1px solid #eaeaea;
		background-color: #FFFFFF;
		padding-bottom: 10px;
		width: 345px;
		margin: 0 auto;

		@media screen and (max-width: 380px) {
			width: 9.2rem;
		}

		.author-text {
			width: calc(100% - 40px);
			float: left;
			padding-left: 10px;
			position: relative;

			.share-icon {
				position: absolute;
				display: block;
				height: 26px;
				width: 26px;
				bottom: 0;
				right: 0;
				background-image: url("/img/card_more_action_icon.png");
				background-position: center;
				background-size: cover;
			}
		}

		.data-title {
			display: block;
			font-size: 14px;
			line-height: 20px;
			font-weight: 600;
			width: 90%;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}

		.data-author {
			display: block;
			font-size: 10px;
			line-height: 20px;
			color: #818181;
		}
	}
</style>
