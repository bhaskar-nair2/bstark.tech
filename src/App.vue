<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="scss">
@import "@/theme/main.scss";
@import url('https://fonts.googleapis.com/css?family=Indie+Flower|Montserrat&display=swap');
$textFont: "Montserrat";	

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
