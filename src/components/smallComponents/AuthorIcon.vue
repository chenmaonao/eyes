<template>
	<div class="author-icon">
		<img class="auto-img" :src="feedDataIcon" />
		<i class="star-icon"></i>
	</div>
</template>

<script>
	
	export default{
		props:{
			feedDataIcon: String
		}
	}
	
</script>

<style lang="scss" scoped>
	
	.author-icon {
		position: relative;
		height: 40px;
		width: 40px;
		border-radius: 50%;
		float: left;
	
		img {
			border-radius: 50%;
		}
	
		.star-icon {
			position: absolute;
			display: block;
			height: 12px;
			width: 12px;
			bottom: 0;
			right: 0;
			background-image: url("/img/author_icon.png");
			background-position: center;
			background-size: cover;
		}
	}
	
</style>
