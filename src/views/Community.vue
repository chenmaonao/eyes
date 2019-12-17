<template>
	<div class="communtiy">
		<AtricleContent class="hot" 
		@getFeedData="getFeedData" 
		:feedData="feedData" 
		@showEyeVideo = "showEyeVideo"/>
	</div>
</template>

<script>
	// @ is an alias to /src
	//import AtricleContent from "../components/AtricleContent.vue"
	import AtricleContent from "../components/AtricleContent.vue"
	
	export default {
		name: 'home',
		props: {

		},
		data() {
			return {
				"feedData": [],
				"isloading": false,
				"isShowEyeVideo": false,
				"nextPageUrl":"",
				"pageUrl":"/api/v4/discovery/hot"
			}
		},
		mounted() {
			this.getFeedData(true);
		},

		components: {
			AtricleContent
		},

		methods: {
			getFeedData(tw) {
				if(tw == true){

					this.$http(this.pageUrl).then(res => {
						if (res.status == 200 && res.statusText == 'OK') {
							this.feedData = res.data.itemList;
							this.isloading = true;
							this.nextPageUrl = res.data.nextPageUrl.replace(/.+\.com/,"");
						}	
					});
					
				}else{
					this.$http(this.nextPageUrl).then(res => {
						if (res.status == 200 && res.statusText == 'OK' && res.data.nextPageUrl) {
							this.feedData.push(...res.data.itemList);
							this.isloading = true;
							this.nextPageUrl = res.data.nextPageUrl.replace(/.+\.com/,"");
						}	
					});
				}
				
				
				
			},

			showEyeVideo(index){
				this.isShowEyeVideo = true;
				// console.log(this.$refs.evp._data)
				this.$refs.evp._data.playData = this.feedData[index];
				
			},
			
			downVideo(){
				this.isShowEyeVideo = false;
			}
		}

	}
</script>


<style lang="scss" scoped>
	.communtiy{
		height: 100%;
		
		.hot{
			box-sizing: content-box;
			height: calc(100% - 50px);
			transform: translateY(-45px);
		}
	}
</style>
