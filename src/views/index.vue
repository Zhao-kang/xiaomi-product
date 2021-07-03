<template>
	<router-view></router-view>
	<tab />
</template>

<script>
import tab from './tab'
export default {
	components: { tab }
}
</script>

<style>
#app {
	flex: 1;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: flex-start;
}
</style>