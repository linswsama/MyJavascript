<template>
	<view class="mall-tabbar">
		<view v-for="(item,i) in tabbarList" :id="item.title" class="tabbar-item" :class="select ==item.title?' ative':''"
		 @click="selectItem">
			<image v-show="select !=item.title" :src="item.img" mode="scaleToFill"></image>
			<image v-show="select ==item.title" :src="item.selectImg" mode="scaleToFill"></image>
			<view class="tab-title">{{item.title}}</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabbarList: [{
					title: "首页",
					img: require('../static/home.png'),
					selectImg: require('../static/homesel.png'),
					url: '../home/home'
				}, {
					title: "分类",
					img: require('../static/fenlei.png'),
					selectImg: require('../static/fenleisel.png'),
					url: '../classify/classify'
				}, {
					title: "购物车",
					img: require('../static/shopcar.png'),
					selectImg: require('../static/shopcarsel.png'),
					url: '../shopcar/shopcar'
				}, {
					title: "我的",
					img: require('../static/wode.png'),
					selectImg: require('../static/wodesel.png'),
					url: '../mycenter/mycenter'
				}]
			};
		},
		methods: {
			selectItem(e) {
				let select = e.currentTarget.id;
				if (select == this.select) {
					return
				}

				this.tabbarList.some(v => {
					if (v.title == select) {
						uni.navigateTo({
							url: v.url
						})
						return true;
					}
				})
			}
		},
		props: ["select"]
	}
</script>

<style lang="less">
	@import "../common/variate.less";

	.mall-tabbar {
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: space-around;
		width: 100vw;
		height: 100rpx;
		background: #FFFFFF;

		.tabbar-item {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;

			image {
				height: 56rpx;
				width: 56rpx;
				margin-top: 8rpx;
			}

			.tab-title {
				height: 36rpx;
				line-height: 36rpx;
				letter-spacing: 4rpx;
				font-size: 26rpx;
			}

		}

		.ative {
			color: @mainColor;
		}
	}

	.mall-tabbar::before {
		content: " ";
		width: 200%;
		height: 200%;
		position: absolute;
		top: 0;
		left: 0;
		transform: scale(.5);
		transform-origin: 0 0;
		border-top: 1px solid @borderCol;
	}
</style>
