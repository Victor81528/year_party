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
body {
	min-height: 100vh;
	background-color: rgb(31, 31, 31);
	margin: 0;
}
#app {
}
</style>
