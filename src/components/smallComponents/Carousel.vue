<template>
	<div>
		<swiper :options="swiperOption" class="swiper-wrap" ref="mySwiper" v-if="CarouselImg.length!=0">
			<swiper-slide v-for="(item,index) in CarouselImg" :key="index">
				<img class="auto-img" :src="item.data.image" alt="" />
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
	import {
		swiper,
		swiperSlide
	} from "vue-awesome-swiper";

	export default {
		data: () => ({
				CarouselImg: [],
				swiperOption: {
					//是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
					notNextTick: true,
					//循环
					loop: true,
					//设定初始化时slide的索引
					initialSlide: 0,
					//自动播放
					autoplay: {
						delay: 3000,
						stopOnLastSlide: false,
						/* 触摸滑动后是否继续轮播 */
						disableOnInteraction: false
					},
					//滑动速度
					speed: 800,
					//滑动方向
					direction: "horizontal",
					//小手掌抓取滑动
					grabCursor: true,
					// on: {
					// 	//滑动之后回调函数
					// 	slideChangeTransitionStart: function() {
					// 		/* realIndex为滚动到当前的slide索引值 */
					// 		that.imgIndex = this.realIndex - 1;
					// 	},
					// },
				
			}
			}),

			components: {
				swiper,
				swiperSlide
			},

			mounted() {
				this.$http("/api/v4/tabs/discovery").then(res => {
					let list = res.data.itemList;
					for (let i = 0; i < list.length; i++) {
						if (list[i].type == "horizontalScrollCard") {

							this.CarouselImg = list[i].data.itemList;

						}
						break;
					}

				});
			}
		}
</script>

<style>
	.swiper-wrap{
		width: 90%;
		height: 200px;
		margin: 0 auto;
		margin-top: 50px;
	}
</style>
