<template>
	<nav class="tab-warp">
		<router-link v-for="item in tabList" :to="item.path" :key="item.id" class="tab-list">
			<img src="@/assets/none-image.png" class="image-info" :class="item.id" />
			<span class="decs-info">{{item.name}}</span>
		</router-link>
	</nav>
</template>

<script>
export default {
	name: 'tabs',
	setup () {
		const tabList = [
			{ id: 'home', name: '首页', path: '/home' },
			{ id: 'category', name: '分类', path: '/category' },
			{ id: 'cart', name: '购物车', path: '/cart' },
			{ id: 'personal', name: '个人', path: '/personal' }
		]
		return { tabList }
	}
}
</script>

<style lang="less">
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
		cursor: pointer;
		align-items: center;
		box-sizing: border-box;
		flex-direction: column;
		align-content: flex-start;
		color: rgb(102, 102, 102);

		.image-info {
			width: 26px;
			height: 26px;
			margin: 4px 0;
			background-size: 100%;
			background-image: url('@{imgUrl}/tab-images.png');
		}

		.home {
			background-position: 0 260px;
		}

		.category {
			background-position: 0 468px;
		}

		.cart {
			background-position: 0 622px;
		}

		.personal {
			background-position: 0 832px;
		}
	}

	.router-link-active {
		color: rgb(132, 95, 63);

		.home {
			background-position: 0 -26px;
		}

		.category {
			background-position: 0 -78px;
		}

		.cart {
			background-position: 0 -182px;
		}

		.personal {
			background-position: 0 -234px;
		}
	}
}
</style>