<template>
	<div class="search-out">


		<div class="search">
			<input class="input" @keyup.enter="search(true)" type="text" v-model="searchText" />
			<span class="cancel" @click="back">取消</span>
		</div>

		<div class="search-content">
			<AtricleContent @getFeedData="search" class="show" :feedData="searchData" />
		</div>
	</div>
</template>

<script>
	import AtricleContent from "../components/AtricleContent.vue"
	
	export default {
		components:{
			AtricleContent
		},
		name: "search",
		data() {
			return {
				searchText: "",
				searchData: [],
				PageUrl: "/api/v1/search?query=",
				nextPageUrl: "",
				isNomore: false
			}
		},
		methods: {
			back(){
				this.searchData = [];
				this.$router.go(-1);
			},
			
			search(cont) {
				if (this.searchText && this.searchText.trim() != "") {
					let url;
					if (cont) {
						
						this.searchData = [];
						this.isNomore = false;
						url = this.PageUrl+this.searchText;
					}else{
						url = this.nextPageUrl;
					}
					
					if(this.isNomore){
						return;
					}

					this.$http(url).then(res => {
						if (res.status == 200 && res.statusText == 'OK') {
							this.searchData.push(...res.data.itemList);
							if (res.data.nextPageUrl) {
								this.nextPageUrl = res.data.nextPageUrl.replace(/.+\.com/, "");
							} else {
								this.isNomore = true;
							}

						}

					});
				}

			}
		}
	}
</script>

<style lang="scss" scoped>
	.search-out {
		position: relative;
		height: 100%;
		overflow: hidden;
		z-index: 5;
	}

	.search {

		position: fixed;
		z-index: 20;
		width: 100%;
		top: 0;
		padding-top: 15px;
		padding-bottom: 15px;
		background-color: #F9F9F9;

		.input {
			width: calc(100% - 75px);
			padding-left: 30px;
			height: 30px;
			border-radius: 6px;
			margin-left: 15px;
			background-color: #eee;
			background-image: url("/img/background-search.png");
			background-repeat: no-repeat;
			background-position-y: center;
			background-position-x: 7px;
			font-size: 14px;
			outline: none;

		}

		.cancel {
			display: inline-block;
			font-size: 16px;
			width: 60px;
			line-height: 30px;
			text-align: center;
		}
	}

	.search-content {
		width: 100%;
		background-color: #FFFFFF;
		height: calc(100% - 60px);
		margin-top: 60px;
		
		.show{
			box-sizing: content-box;
			transform: translateY(-45px);
			height: 100%;
		}
	}
</style>
