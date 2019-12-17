<template>

	<div class="bigbox" ref="sellerSlider">
		<ul ref="listOfVideo">
			<component @showEyeVideo="showEyeVideo" v-for="(item,index) in feedData" :index="index" :key="index" :is="`Atricle${ item.type}`|typeFilters" :feedData="item"></component>
			<!-- <div v-if="feedData.type=='textFooter'">2 textFooter</div>
			<div v-else-if="feedData.type=='videoCollectionWithCover'">3 videoCollectionWithCover</div>
			<div v-else-if="feedData.type=='banner2'">4 banner2</div>
			<div v-else-if="feedData.type=='textHeader'">5 textHeader</div>
			<div v-else-if="feedData.type=='videoCollectionOfFollow'">6 videoCollectionOfFollow</div> -->
		</ul>	
	</div>

</template>

<script>
	import AtricleVideo from "./AtricleVideo.vue"
	import BScroll from "better-scroll"



	export default {
		props: {
			feedData: Array,
			ishome: Boolean
		},
		filters: {
			typeFilters(value) {
				if (value == "Atriclevideo") {
					return "Atriclevideo"
				}
				return ""
			}
		},
		data: () => ({

		}),
		mounted() {
			this._initSellerSliderScroll()
		},
		watch: {
			feedData() {
				this._initSellerSliderScroll()
			}
		},
		components: {
			"Atriclevideo": AtricleVideo
		},
		methods: {

			showEyeVideo(index) {
				this.$emit("showEyeVideo", index)
				//this.sellerScroll.refresh()
			},

			addFeedData({y}) {
				let bottom = this.$refs.listOfVideo.getBoundingClientRect().height - 30;
				if ((document.body.clientHeight - y) >= bottom) {
					this.$emit("getFeedData")
				}
			},

			refresh() {
				if(!this.ishome){
					this.$emit("getFeedData", true)
					this.$nextTick(() => {
						this.sellerScroll.finishPullDown()
					})
				}else{
					this.sellerScroll.finishPullDown()
				}
			},

			_initSellerSliderScroll() {
				this.$nextTick(() => {
					if (this.feedData.length > 0) {
						// 强制设置滑动容器内部content宽度 在ul元素上强制指定宽度
						if (!this.sellerScroll) { // 避免页面多次实例化BScroll引起内存泄漏
							this.sellerScroll = new BScroll(this.$refs.sellerSlider, {
								scrollY: true, // 让滑动容器横轴滚动
								click: true,
								probeType: 2,
								pullDownRefresh: true
							})
							this.sellerScroll.on("scrollEnd", this.addFeedData);
							this.sellerScroll.on("pullingDown", this.refresh);

							// this.goodScroll.on('scroll', this.goodWrapperScroll)
						} else {
							this.sellerScroll.refresh()
						}
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.bigbox {
		position: relative;
		height: calc(100% - 45px);
		padding-top: 45px;
		background-image: url("/img/ic_app.png");
		background-size: 40px 40px;
		background-position:center 60px;
		background-repeat: no-repeat;

		>ul {
			padding-top: 45px;
			
		}
	}
</style>
