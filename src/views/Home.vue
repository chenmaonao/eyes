<template>
	<div class="home">
		<div v-if="isloading">
			<div class="discovery">
				<ul>
					<router-link tag="li" to="/home/discovery">发现</router-link>
					<router-link tag="li" to="/home/feed">推荐</router-link>
					<li>日报</li>
				</ul>
				
				<div class="search" @click="toSearch">
					<img class="auto-img" src="/img/search_icon.png" />
				</div>
			</div>
			
			<router-view :ishome="true" @getFeedData="getFeedData" :feedData="feedData" @showEyeVideo = "showEyeVideo"/>
			
			<!-- <keep-alive>
				<AtricleContent ></AtricleContent>
			</keep-alive> -->
			
			<!-- <EyeVideoPlay @downVideo = "downVideo" v-show="isShowEyeVideo" ref="evp"></EyeVideoPlay> -->
		
		</div>

	</div>
</template>

<script>
	// @ is an alias to /src
	//import AtricleContent from "../components/AtricleContent.vue"
	// import EyeVideoPlay	from "./EyeVideoPlay.vue"
	
	export default {
		name: 'home',
		props: {

		},
		data() {
			return {
				"feedData": [],
				"isloading": false,
				"isShowEyeVideo": false,
				"nextPageUrl":"/api/v4/tabs/selected",
				isNomore: false
			}
		},
		mounted() {
			this.getFeedData();
		},

		components: {
			// EyeVideoPlay
		},

		methods: {
			getFeedData() {
				this.$http(this.nextPageUrl).then(res => {
					if (res.status == 200 && res.statusText == 'OK' && !this.isNomore) {
						this.feedData.push(...res.data.itemList);
						this.isloading = true;
						if(res.data.nextPageUrl){
							this.nextPageUrl = res.data.nextPageUrl.replace(/.+\.com/,"");
						}else{
							this.isNomore = true;
						}
						
					}

				});
			},
			
			
			//跳转到搜索页
			toSearch(){
				this.$router.push("/search")
			},
			
			showEyeVideo(index){
				this.isShowEyeVideo = true;
				this.$refs.evp._data.playData = this.feedData[index];
				
			},
			
			downVideo(){
				this.isShowEyeVideo = false;
			}
		}

	}
</script>

<style lang="scss" scoped>
	.home {
		height: 100%;
		
		>div{
			height: 100%;
		}
	}
	
	.discovery{
		z-index: 2;
		position: fixed;
		height: 45px;
		width: 100%;
		top: 0;
		background-color: #f7f7f7;
		text-align: center;
		
		.search{
			position: absolute;
			top: 12px;
			right: 12px;
			height: 17px;
			width: 17px;
		}
		
		li{
			position: relative;
			display: inline-block;
			font-size: 14px;
			color: #949494;
			padding: 14px;
		}
		.router-link-exact-active{
			color: #000000;
			
			&:after{
				position: absolute;
				content: "";
				display: block;
				height: 3px;
				width: 10px;
				background-color: #000000;
				bottom: 5px;
				left: 50%;
				transform: translateX(-50%);
			}
		}
	}

	.imgbox {
		width: 100%;
		height: 100px;
	}
</style>
