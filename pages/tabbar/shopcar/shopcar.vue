<template>
	<view class="shopcar">
		<checkbox-group class="shopcar-body">

			<shopCard v-for="item in shopList" :shopInfo="item" @changeNum="changeNum" @chooseItem="chooseItem"></shopCard>

		</checkbox-group>

		<!-- 结算 -->
		<view class="account flex-row">
			<label>
				<checkbox @click="chooseAll" :checked="isAll" /><text>全选</text>
			</label>
			<view class="account-right flex-row">
				<view class="">
					<text class="yunfei" v-show="total != 0">不含运费</text>
					<text class="total-text">合计：</text>
					<text class="money">￥{{total}}</text>
				</view>
				<button>结算</button>
			</view>
		</view>

		<tab-bar select='购物车'></tab-bar>
	</view>
</template>

<script>
	import shopCard from '../../../components/shopcar-card.vue'
	export default {
		data() {
			return {
				shopList: [{
					title: '商品1 xxxx xxx x  xxxxx',
					img: '',
					id: 'a0001',
					isChoose: false,
					types: '大码L',
					price: 30,
					num: 1
				}, {
					title: '商品2 xxxx xxx x  xxxxx pppp pppp',
					img: '',
					id: 'a0002',
					isChoose: false,
					types: '中码M',
					price: 60,
					num: 1
				}],
				tatol: 0,
				isAll: false
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: "购物车"
			})
		},
		methods: {
			changeNum(e) { // 改变数量
				//console.log(e);
				this.shopList.some(v => {
					if (v.id == e[1] && e[0] == 'dec') {
						if (v.num == 1) {
							return
						}
						v.num--
					} else if (v.id == e[1] && e[0] == 'add') {
						v.num++
					}
				})
			},
			chooseAll(e) { // 全选
				this.isAll = !this.isAll;
				if (this.isAll === true) {
					this.shopList.forEach(v => {
						v.isChoose = true
					})
				} else {
					this.shopList.forEach(v => {
						v.isChoose = false
					})
				}
			},
			chooseItem(e) {
				console.log(e)
				this.shopList.some(v => {
					if (v.id == e) {
						v.isChoose = !v.isChoose;
						return true
					}
				})
			}
		},
		components: {
			shopCard
		},
		computed: {
			total() {
				return this.shopList.reduce((total, v) => {
					if (v.isChoose) {
						return total += v.price * v.num;
					} else {
						return total
					}
				}, 0)
			}
		},
		watch: {
			'shopList': { // 监听选中
				handler(val, old) {
					let isAll = val.every(v => v.isChoose === true);
					// console.log(isAll);
					if (isAll) {
						this.isAll = true
					} else {
						this.isAll = false
					}
				},
				deep: true,
			}
		}
	}
</script>

<style lang="less">
	@import "../../../common/variate.less";

	.shopcar {
		.account {
			justify-content: space-between;
			align-items: center;
			width: 100vw;
			position: fixed;
			bottom: 100rpx;
			background: #FFFFFF;
			line-height: 90rpx;

			label {
				padding-left: 30rpx;
			}

			.account-right {
				align-items: center;
				.yunfei {
					font-size: @foneMin;
					color: @shengHui;
					padding: 0 10rpx;
				}

				.money {
					color: @mainColor;
				}

				button {
					margin-right: 30rpx;
					margin-left: 10rpx;
				}
			}

		}
	}
</style>
