<template>
	<div class="Message" ref="sellerSlider">
		<div class="conte">
			<MessTitle v-for="(itme,index) in messageData" :key="index" :messdata="itme"/>
		</div>
	</div>
</template>

<script>
	import MessTitle from "../components/MessTitle.vue"
	import BScroll from "better-scroll"
	
	export default{
		data(){
			return {
				messageData:[],
				messageUrl: '/api/v3/messages?vc=552&deviceModel=BLN-AL20',
				isNomore: false
			}
		},
		watch:{
			messageData(){
				this._initSellerSliderScroll()
			}
		},
		components:{
			MessTitle
		},
		methods:{
			getMessageData(){
				
				if(!this.isNomore){
					this.$http(this.messageUrl).then(res=>{
						
						if(res.data.nextPageUrl){
							this.messageUrl = res.data.nextPageUrl.replace(/.+\.com/, "");
						}else{
							this.isNomore = true;
						}
						
						this.messageData.push(...res.data.messageList);

					})
				}
				

			},
			_initSellerSliderScroll() {
				this.$nextTick(() => {
					if (this.messageData) {
						// 强制设置滑动容器内部content宽度 在ul元素上强制指定宽度
						if (!this.sellerScroll) { // 避免页面多次实例化BScroll引起内存泄漏
							this.sellerScroll = new BScroll(this.$refs.sellerSlider, {
								scrollY: true, // 让滑动容器横轴滚动
								click: true,
								pullUpLoad: true
							})
							this.sellerScroll.on("scrollEnd", this.addFeedData);
							this.sellerScroll.on("pullingUp", this.getMessageData);
							// this.goodScroll.on('scroll', this.goodWrapperScroll)
						} else {
							this.sellerScroll.refresh()
						}
					}
				})
			}
			
		},
		
		mounted(){
			this.getMessageData()
			this._initSellerSliderScroll()
		}
		
		
	}
</script>

<style lang="scss" scoped>
	.Message{
		height: 100%;
		
		>.conte{
			box-sizing: content-box;
			padding-bottom: 50px;
		}
	}
</style>
