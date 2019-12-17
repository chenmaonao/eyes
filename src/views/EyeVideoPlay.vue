<template>
	<div class="v-big-box" v-if="playData.type">
		
		<!-- video-box播放器 -->
		<div class="video-box">
			<span class="down_video" @click="downVideo()"></span>
			<video-player
			class="video-player vjs-custom-skin" 
			ref="videoPlayer" 
			:playsinline="true" 
			:options="playerOptions"
			></video-player>
		</div>
		<!-- video-box播放器--end -->
		
		<div class="title">
			<h3>{{playData.data.title}}</h3>
			<div class="classTitle">
				<span class="data-author">#{{playData.data.category}} /
				<Vduration :feedData="playData"></Vduration>
				/ 开眼精选</span>
			</div>
			<div class="description">{{playData.data.description}}</div>
			
			<FourShare :dataShare="dataShare"></FourShare>
			
		</div>
		
		<div class="author-box">
			<AuthorIcon :feedDataIcon="playData.data.author.icon"></AuthorIcon>
			<div class="author-text">
				<h3 class="data-title">{{playData.data.author.name}}</h3>
				<span class="data-author">{{playData.data.author.description.slice(0,14)}}</span>
			</div>
			
			<div class="follow">+关注</div>
		</div>
		
		
		
	</div>
</template>

<script>
	import {videoPlayer} from 'vue-video-player'
	
	//静态组件
	import Vduration from "../components/smallComponents/Vduration.vue"
	import FourShare from "../components/smallComponents/FourShare.vue"
	import AuthorIcon from "../components/smallComponents/AuthorIcon.vue"
	
	export default{
		components:{
			videoPlayer,
			Vduration,
			FourShare,
			AuthorIcon
		},

		methods:{
			downVideo(){
				this.$refs.videoPlayer.player.pause();
				this.$router.go(-1);
				// this.$emit("downVideo")
			}
		},
		activated() {
			this.playerOptions.poster = this.playData.data.cover.feed;
			this.playerOptions.sources[0].src = this.playData.data.playUrl;
			this.dataShare = this.playData.data.consumption;
			
		},
		
		//video-player 配置信息
		data:()=>({
			playerOptions: {
				// playbackRates: [ 1.0], //播放速度
				autoplay: false, //如果true,浏览器准备好时开始回放。
				muted: false, // 默认情况下将会消除任何音频。
				loop: false, // 导致视频一结束就重新开始。
				preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
				language: 'zh-CN',
				aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
				fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
				sources: [{
					type: "video/mp4",
					src: "http://baobab.kaiyanapp.com/api/v1/playUrl?vid=175407&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&f=iphone&u=&vc=0" //url地址
				}],
				poster: "../../static/images/test.jpg", //你的封面地址
				// width: document.documentElement.clientWidth,
				notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息
				controlBar: {
					timeDivider: true,
					durationDisplay: true,
					remainingTimeDisplay: false,
					fullscreenToggle: true, //全屏按钮
					volumeControl: false,
					MuteToggle:false
				}
			},
			
			dataShare: null
		
		}),
		
		props:{
			playData:Object
		},
		
		watch:{
			
		}
	}
	
</script>

<style scoped lang="scss">
	.v-big-box{
		position: fixed;
		height: 100%;
		width: 100%;
		overflow: auto;
		top: 0;
		background-color: #000000;
		z-index: 3;
		color:#fff;
		
		.vjs-user-active{	
				color: #42B983;
			
		}
		
		.video-box{
			position: relative;
			border-bottom: 1px solid #ddd;
			
			
		}
		
		.down_video{
			z-index: 4;
			position: absolute;
			top: 10px;
			left: 10px;
			display: block;
			height: 25px;
			width: 25px;
			border-radius: 50%;
			background-color: #FFFFFF;
			background-image: url("/img/ic_down_video.png");
			background-size: 15px 15px;
			background-repeat: no-repeat;
			background-position: 5px 5px;
			// display: none;
		}
	}
	
	.title{
		padding:0px 15px 0px 20px;
		
		
		h3{
			margin-top: 15px;
			font-size: 18px;
		}
		
		.classTitle{
			font-size: 14px;
			margin-top: 7px;
			margin-bottom: 18px;
			font-weight: lighter;
		}
		
		.description{
			font-size: 14px;
			color: #c4c4c4;
			line-height: 20px;
		}
	}
	
	.author-box{
		position: relative;
		margin-top: 5px;
		border-top: 1px solid #565656;
		border-bottom: 1px solid #565656;
		padding: 15px;
		height: 70px;
		
		.author-text{
			float: left;
			padding-left:15px;
			
			h3{
				font-weight: 800;
				font-size: 14px;
				line-height: 20px;
			}
			span{
				font-weight: 100;
				font-size: 12px;
				line-height: 20px;
				vertical-align: top;
			}
		}
		
		.follow{
			position: absolute;
			right: 15px;
			top: 25px;
			font-size: 12px;
			border: 1px solid #FFFFFF;
			padding: 2px 4px;
			border-radius: 4px;
		}
	}
	
</style>
