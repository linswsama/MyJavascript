<template>
	<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
		<swiper-item v-for="item in lunboList">
			<view class="swiper-item">
				<image :src="item.image" :mode="imgMode" class="img-size"></image>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default{
		props:["lunboList","imgMode"]
	}
</script>

<style scoped lang="less">
	swiper{
		margin: 0 2vw;
		border-radius: 16rpx;
		overflow: hidden;
		.img-size{
			width: 100%;
		  border-radius: 16rpx;
			background: #4CD964;
		}
	}
</style>
