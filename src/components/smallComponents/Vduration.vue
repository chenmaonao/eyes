<template>
	<span class="v-duration">
		{{timeTransition(feedData.data.duration)}}
	</span>
</template>

<script>
	export default {
		
		props:{
			feedData:Object
		},
		
		methods: {
			timeTransition(second) {
				let s = second % 60;
				if (s < 10) {
					s = "0" + s;
				}
				let m = Math.floor(second / 60);
				if (m >= 60) {
					let h = Math.floor(m / 60);
					m = m % 60;
					if (m < 10) {
						m = "0" + m;
					}
					if (h < 10) {
						h = "0" + h;
					}

					return (h + ':' + m + ':' + s);
				}

				if (m < 10) {
					m = "0" + m;
				}

				return (m + ':' + s);
			}

		}
	}
</script>

<style lang="scss" scoped>
	.v-duration {
		color: #FeFeFe;
	}
</style>
