<template>
	<HomeView v-if="store.step === 1"/>
	<InvitView v-if="store.step === 2"/>
</template>

<script setup>
import HomeView from '@/views/HomeView'
import InvitView from '@/views/InvitView'
import { useIndexStore } from '@/store/index'

const store = useIndexStore()

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300&display=swap');
body {
	min-height: 100vh;
	background-color: rgb(31, 31, 31);
	margin: 0;
}
#app {
	font-family: 'Noto Sans TC', sans-serif;
}
</style>
