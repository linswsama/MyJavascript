<template>
	<view class="mycenter">
		<view class="my-head" v-if="isLogin">
			<image :src="userInfo.avatar" mode="scaleToFill"></image>
			<view class="userName">{{userInfo.name}}</view>
		</view>
		<view class="my-head" v-else @click="goLogin">
			<image src="../../../static/avatar.png" mode="scaleToFill"></image>
			<view class="userName">登录/注册</view>
		</view>

		<view class="my-body">
			<view class="i-card">
				<view>收藏商品</view>
			</view>
			<view class="i-card">
				<view>所有订单</view>
			</view>
			<view class="i-card">
				<view>我的积分</view>
			</view>
			<view class="i-card">
				<view>优惠券</view>
			</view>
			<view class="i-card">
				<view>我的足迹</view>
			</view>
			<view class="i-card">
				<view>消息</view>
			</view>
			<view class="i-card">
				<view>设置</view>
			</view>
		</view>


		<tab-bar select='我的'></tab-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLogin: false,
				userInfo: {
					name: 'XXX',
					avatar: ''
				}
			};
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: "个人中心"
			})
		},
		methods: {
			goLogin() {
				uni.navigateTo({
					url: '../../login/login'
				})
			}
		}
	}
</script>

<style lang="less">
	.mycenter {
		.my-head {
			display: flex;
			align-items: center;
			height: 220rpx;
			margin: 10rpx 30rpx;

			image {
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
			}

			.userName {
				padding: 20rpx;
			}
		}

		.my-body {
			line-height: 100rpx;

			.i-card {
				display: flex;
				justify-content: space-between;
				view {
					padding-left: 30rpx;
				}
			}

		}
	}
</style>
