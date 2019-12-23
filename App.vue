<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="less">
	@import './common/variate.less';

	body {
		background-color: @BackHui;
		font-size: @foneBase;
	}

	.i-card {
		border-radius: @radiusBase;
		background: #FFFFFF;
		width: 94vw;
		margin: 10rpx auto;
	}
	.flex-row{
		display: flex;
		justify-content: space-around;
	}
	.flex-col{
		display: flex;
		flex-direction: column;
	}
	/** 复选框 **/
	uni-checkbox .uni-checkbox-input {
		transform: scale(0.8);
		border-radius: 50% !important;
	}

	uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked {
		color: #fff !important;
		background-color: @mainColor;
		border: 1px solid @mainColor;
	}
	button {
		width: 160rpx;
		line-height: 70rpx;
		color: #FFFFFF;
		background: @mainColor;
		border-radius: 50rpx
	}
</style>
