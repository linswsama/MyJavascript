<template>
	<view class="classify">
		<view class="">
			<view class="list-nav">
				<view class="nav-item" :class="curId == item.id?'select':''" v-for="item in navlist" @click="chooseNav(item.id)">
					{{item.title}}
				</view>
			</view>
			<view class="list-main">

			</view>
		</view>


		<tab-bar :select="'分类'"></tab-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				curId: 0,
				navlist: [{
					title: "衣服",
					id:'001'
				}, {
					title: "裤子",
					id:'002'
				}, {
					title: "鞋子",
					id:'003'
				}, {
					title: "内衣",
					id:'004'
				}]
			};
		},
		methods: {
			chooseNav(id) {
				this.curId=id;
			}
		}
	}
</script>

<style lang="less">
	.classify {
		.list-nav {
			width: 30vw;
			border-right: 1px solid #333333;

			.nav-item {
				text-align: center;
				line-height: 100rpx;
			}

			.select {
				background: #555555;
			}
		}
	}
</style>
