<template>
	<div id="app">
		<baseModal></baseModal>
		<globalNav></globalNav>
		<router-view />
		<social></social>
		<h5 class="version">v2.1.5 Grayzone</h5>
	</div>
</template>

<script>
import social from '@/components/socialNav';

export default {
	name: 'App',
	components: {
		baseModal: () => import('@/components/baseModal'),
		globalNav: () => import('@/components/globalNav'),
		social
	}
};
</script>

<style lang="scss">
@import '@/theme/main.scss';
@import url('https://fonts.googleapis.com/css?family=Indie+Flower|Montserrat&display=swap');
$textFont: 'Montserrat';

#app {
	font-family: $textFont;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
