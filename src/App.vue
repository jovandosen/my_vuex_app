<template>
    <div id="app">
        <ProductData/>
        <UserList/>
        <AppTests/>
        <pdf src="./static/CV.pdf"></pdf>   
    </div>
</template>

<script>
import ProductData from './components/ProductData.vue'
import UserList from './components/UserList.vue'
import AppTests from './components/AppTests.vue'
import pdf from 'vue-pdf'

export default {
    name: 'App',
    components: {
        ProductData,
        UserList,
        AppTests,
        pdf
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 30px;
}
</style>
