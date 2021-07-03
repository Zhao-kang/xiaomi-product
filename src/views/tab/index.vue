<template>
	<div class="tab-warp" @click="handleTabclick">
		<div class="tab-list">
			<img src="@/assets/none-image.png" class="image-info home" />
			<span class="desc-info">首页</span>
		</div>
		<div class="tab-list">
			<image src="@/assets/none-image.png" class="image-info category" />
			<span class="desc-info">分类</span>
		</div>
		<div class="tab-list">
			<img src="@/assets/none-image.png" class="image-info cart" />
			<span class="desc-info">购物车</span>
		</div>
		<div class="tab-list">
			<img src="@/assets/none-image.png" class="image-info personal" />
			<span class="desc-info">个人</span>
		</div>
	</div>
</template>

<script>
// import { setup } from 'vue'
export default {
	setup(props) {
		console.log(props)

		function handleTabclick(event) {
			console.log(event)
		}

		return {
			handleTabclick
		}
	}
}
</script>

<style lang="less" scoped>
@imgUrl: '../../assets';

.tab-warp {
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	display: flex;
	flex-shrink: 0;
	height: 55px;
	flex-direction: row;
	box-sizing: border-box;
	align-content: flex-start;

	.tab-list {
		position: relative;
		display: flex;
		flex: 1 1 auto;
		height: 100%;
		align-items: center;
		box-sizing: border-box;
		flex-direction: column;
		align-content: flex-start;

		.image-info {
			width: 26px;
			height: 26px;
			margin: 4px 0;
			background-size: 100%;
			background-image: url('@{imgUrl}/tab-images.png');
		}

		.home {
			background-position: 0px 260px;

			&:active {
				background-position: 0px 234px;
			}
		}

		.category {
			background-position: 0px 468px;
		}

		.cart {
			background-position: -1px 622px;
		}

		.personal {
			background-position: 0 832px;
		}

		.desc-info {
			color: rgb(132, 95, 63);
		}
	}
}
</style>