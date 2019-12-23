<template>
	<view>
		<view class="home-body">

			<view class="search" @click="goSearch">
				<image src="../../../static/search.png" mode="scaleToFill" />
				<view class="search-txt">
					商品搜索
				</view>
			</view>
			<Swiper :lunboList="lunboList" :imgMode="'scaleToFill'"></Swiper>
		</view>


		<tab-bar :select="'首页'"></tab-bar>
	</view>
</template>

<script>
	import Swiper from '../../../components/swiper.vue'

	export default {
		data() {
			return {
				lunboList: [],
				goodList: []
			}
		},
		onLoad() {
			this.getLunboList();
		},
		methods: {
			getLunboList() {
				this.http({
					url: 'http://123.207.32.32:8000/home/multidata'
				}).then(res => {
					//console.log(res.data.data)
					this.lunboList = res.data.data.banner.list;
					this.recommend = res.data.data.keywords.list;
					this.goodList = res.data.data.recommend.list;
				})
			}
		},
		components: {
			Swiper
		}
	}
</script>

<style lang="less">
	@import "../../../common/variate.less";

	.home-body {
		.search {
			display: flex;
			align-items: center;
			width: 77vw;
			height: 70rpx;
			border: 1px solid @mainColor;
			border-radius: 40rpx;
			margin: 20rpx auto;
			padding-left: 3vw;

			image {
				width: 40rpx;
				height: 40rpx;
				margin: 5rpx 10rpx;
				z-index: 10;
			}
			.search-txt{
				line-height:70rpx;
				color: @ColorHui;
			}
		}

		.goodlist {
			column-count: 2;
			column-gap: 10rpx;
			padding-bottom: 110rpx;
		}
	}
</style>
