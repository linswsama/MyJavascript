<template>
	<view class="numbox">
		<view class="numbox-body flex-row">
			<!-- "-"按钮，点击可减小当前数值 -->
			<view class="numbox-dec" @click="changeAmount(['dec',id])">-</view>
			<input class="numbox-input" type="number" v-model="curAmount"/>
			<!-- "+"按钮，点击可增大当前数值 -->
			<view class="numbox-add" @click="changeAmount(['add',id])">+</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['amount','id'],
		data() {
			return {
				curAmount:this.amount
			};
		},
		methods:{
			changeAmount(v){
				this.$emit("changeNum",v);
			}
		},
		watch:{
			amount(val){
				this.curAmount = val;
			}
		}
	}
</script>

<style lang="less">
	@import "../common/variate.less";

	.numbox {
		width: 200rpx;
		height: 56rpx;
		.numbox-body{
			width: 200%;
			height: 200%;
			border: 1px solid @borderCol;
			border-radius: @radiusMin;
			transform: scale(.5); 
			transform-origin: 0 0;
			margin-right: -200rpx;
			text-align: center;
			
			view {
				width: 80%;
				font-size: @foneScale;
				line-height: 110rpx;
				color: @ColorHui !important;
			}
			
			.numbox-dec {
				border-right: 1px solid @borderCol;
			}
			
			.numbox-input {
				height: 100%;
				font-size: 56rpx;
			}
			
			.numbox-add {
				border-left: 1px solid @shengHui;
			}
		}
	}
</style>
