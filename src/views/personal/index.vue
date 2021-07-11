<template>
	<div class="personal-page">
		<div class="sign-in">
			<div class="avatar-box">
				<img src="@/assets/personal/avatar.png" class="avatar-icon">
				<span class="avatar-info">请登录</span>
			</div>
			<img src="@/assets/personal/arrow-right.png" class="arrow-right-icon">
		</div>

		<div class="my-order">
			<div class="my-order-head">
				<span>我的订单</span>
				<img src="@/assets/personal/arrow-right.png" class="my-order-arrow">
			</div>
			<div class="my-order-content">
				<div v-for="item in orderList" :key="item.id" class="my-order-info">
					<img :src="item.icon" class="my-order-icon">
					<span class="my-order-desc">{{item.name}}</span>
				</div>
			</div>
		</div>

		<div class="other">
			<div v-for="item in otherlList" :key="item.id" class="other-list">
				<div class="other-info">
					<img :src="item.icon" class="other-icon">
					<span class="other-desc">{{item.name}}</span>
				</div>
				<img src="@/assets/personal/arrow-right.png" class="other-arrow-icon">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	setup () {
		const orderList = [
			{ id: 1, name: '待付款', icon: require('../../assets/personal/wallet.png') },
			{ id: 2, name: '待收货', icon: require('../../assets/personal/transport.png') },
			{ id: 3, name: '评价', icon: require('../../assets/personal/evaluate.png') },
			{ id: 4, name: '退货/售后', icon: require('../../assets/personal/evaluate.png') },
		]

		const otherlList = [
			{ id: 1, name: '我的资产', icon: require('../../assets/personal/myassets.png') },
			{ id: 2, name: '优惠券', icon: require('../../assets/personal/coupon.png') },
			{ id: 3, name: '我的收藏', icon: require('../../assets/personal/collection.png') },
			{ id: 4, name: '地址管理', icon: require('../../assets/personal/address.png') },
			{ id: 4, name: '资质证照', icon: require('../../assets/personal/licence.png') },
			{ id: 4, name: '协议规则', icon: require('../../assets/personal/rules.png') },
			{ id: 4, name: '帮助与反馈', icon: require('../../assets/personal/feedback.png') },
		]

		return {
			orderList,
			otherlList
		}
	}
}
</script>

<style lang="less">
.personal-page {
	width: 100%;
	height: calc(~'100% - 60px');
	background-color: #f3f3f3;

	.sign-in {
		width: 100%;
		height: 100px;
		padding: 0 24px;
		box-sizing: border-box;
		background: #83603f;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 5px solid #f4f4f4;

		.avatar-box {
			display: flex;
			align-items: center;

			.avatar-icon {
				height: 60px;
				width: 60px;
				padding-right: 20px;
				border-radius: 30px;
			}

			.avatar-info {
				color: rgb(255, 255, 255);
				font: 14px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
					Helvetica, Arial, sans-serif;
			}
		}

		.arrow-right-icon {
			width: 18px;
			height: 18px;
			padding: 41px 0;
		}
	}

	.my-order {
		width: 100%;
		height: 110px;
		background: #fff;
		border-bottom: 5px solid #f4f4f4;

		&-head {
			display: flex;
			padding: 0 20px;
			font-size: 14px;
			color: #333;
			line-height: 40px;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid #e5e5e5;
		}

		&-arrow {
			width: 15px;
			height: 15px;
		}

		&-content {
			width: 100%;
			display: flex;
			flex-shrink: 0;
			height: 70px;
			flex-direction: row;
			box-sizing: border-box;
			align-content: flex-start;
		}

		&-info {
			display: flex;
			flex: 1 1 auto;
			align-items: center;
			flex-direction: column;
			align-content: flex-start;
		}

		&-icon {
			width: 40px;
			height: 40px;
		}
	}

	.other {
		&-list {
			width: 100%;
			height: 50px;
			padding: 0 20px;
			background: #fff;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #e5e5e5;
			justify-content: space-between;
		}

		&-info {
			display: flex;
			align-items: center;
			height: 50px;
		}

		&-icon {
			width: 38px;
			height: 38px;
			display: flex;
			align-items: center;
		}

		&-arrow-icon {
			width: 15px;
			height: 15px;
		}
	}
}
</style>