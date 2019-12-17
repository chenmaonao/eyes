<template>
	<div class="share" v-if="dataShare">
		<ul>
			<li>
				<i class="heart"></i>
				{{dataShare.collectionCount}}
			</li>
			<li>
				<i class="uploading"></i>
				{{dataShare.shareCount}}
			</li>
			<li>
				<i class="talking"></i>
				{{dataShare.replyCount}}
			</li>
			<li>
				<i class="downloading"></i>
				缓存
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		props:{
			dataShare:Object
		}
	}
</script>

<style lang="scss" scoped>
	.share{
		width: 100%;
		margin: 15px 0;
		font-size:14px;
		
		ul{
			display: flex;
			width: 100%;
			li{
				flex: 1;
				line-height: 22px;
				
			}
			
			i{
				display: inline-block;
				width: 22px;
				height: 22px;
				background-size: cover;
				vertical-align: bottom;
				margin-right: 5px;
				
			}
		}
		
		.heart{
			background-image: url("/img/1png/ic_action_favorites_without_padding.png");	
		}
		
		.uploading{
			background-image: url("/img/1png/ic_action_share_without_padding.png");	
		}
		
		.talking{
			background-image: url("/img/1png/ic_action_reply_without_padding.png");	
		}
		
		.downloading{
			background-image: url("/img/1png/ic_action_offline_without_padding.png");	
		}
	}
</style>
