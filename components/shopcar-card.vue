<template>
	<view class="card-body i-card flex-row">
			<checkbox :checked="shopInfo.isChoose" class="checkbox" @click="chooseItem" />
			<image :src="shopInfo.img" mode="aspectFit"></image>
			<view class="card-main">
				<view class="card-title">
					{{shopInfo.title}}
				</view>
				<view class="card-type">
					{{shopInfo.types}}
				</view>
				<view class="numbox">
					<view class="price">
						￥ {{shopInfo.price}}
					</view>
					<numbox :amount="shopInfo.num" :id="shopInfo.id" @changeNum="changeNum"></numbox>
				</view>

			</view>
	</view>
</template>

<script>
	import numbox from './numberBox.vue'
	export default {
		props: {
			shopInfo: {},
			curVal: ''
		},
		data() {
			return {

			};
		},
		methods: {
			changeNum(e) { //改变数量
				//console.log(e)
				this.$emit("changeNum", e);
			},
			chooseItem(e) { //选中
				// console.log(this.curVal)
				this.$emit("chooseItem", this.shopInfo.id);
			},
		},
		components: {
			numbox
		}
	}
</script>

<style lang="less">
	@import "../common/variate.less";

	.card-body {
		padding-top: 30rpx;
		padding-bottom: 30rpx;

		.checkbox {
			margin-top: 60rpx;
			margin-left: 20rpx;
		}

		image {
			width: 180rpx;
			height: 180rpx;
			border-radius: @radiusMin;
			margin: 10rpx;
			background: #8F8F94;
		}

		.card-main {
			display: flex;
			flex-direction: column;
			padding: 0 20rpx;
			flex: 1;
			font-size: @foneBase;

			.card-type {
				display: inline-block;
				background-color: @BackHui;
				padding: 0 10rpx;
				margin: 20rpx 0;
				line-height: 50rpx;
			}

			.numbox {
				display: flex;
				justify-content: space-between;

				.price {
					color: @mainColor;
				}
			}
		}
	}
</style>
