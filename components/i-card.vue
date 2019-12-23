<template>
	<view :class="column" class="i-card">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		props: ["column"]
	}
</script>

<style lang="less">
	.i-card {
		border-radius: 20rpx;
		background: #4CD964;
		min-height: 100rpx;
		width: 96vw;
		margin: 10rpx auto;
	}

	.one {
		display: flex;
		justify-content: space-between;
	}

	.two {
		width: 46vw;
		margin: 10rpx auto;
		display: inline-block;
	}
</style>
