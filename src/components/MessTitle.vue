<template>
	<div class="mess" v-if="messdata">
		<div class="ic-eyes">
			<img class="auto-img" src="/img/ic_app.png" />
		</div>
		
		<div class="text">
			<div class="title">{{messdata.title}}</div>
			<div class="date">{{showTime(messdata.date)}}</div>
			<div class="content">{{messdata.content}}</div>
		</div>
	</div>
</template>

<script>
	
	export default{
		data(){
			return {
				
			}
			
		},
		props:{
			messdata:Object
		},
		methods:{
			showTime(date){
				let t = new Date(date)
				let now = new Date().getTime();
				let time = (now-date)/1000/3600/24;
				if(time<1){
					let h = t.getHours()>9?t.getHours():("0"+t.getHours())
					let m = t.getMinutes()>9?t.getMinutes():("0"+t.getMinutes())
					return h+':'+m;
				}
				if(time<7){
					
					return Math.floor(time)+"天前"
					
				}
				
				return Math.floor(Math.floor(time)/7)+"周前"
				
				
			}
		}
	}
	
</script>

<style lang="scss" scoped>
	
	.mess{
		width:100%;
		height:90px;
		font-size:14px;
		line-height: 20px;
		
		.ic-eyes{
			float: left;
			height: 40px;
			width: 40px;
			margin: 15px;
			border-radius: 50%;
			border: 1px solid #DDDDDD;
			overflow: hidden;
		}
		
		.text{
			height: 100%;
			padding-top: 15px;
			width: calc(100% - 70px);
			float: left;
			border-bottom:1px solid #ddd;

			
			.title{
				width: calc(100% - 30px);
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
				font-weight: 600;
			}
			
			.date{
				color: #565656;
			}
			
			.content{
				width: calc(100% - 30px);
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				color: #3b3b3b;
				margin-top: 4px;
			}
		}
	}
	
	
</style>
