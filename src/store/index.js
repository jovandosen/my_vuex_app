import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products.js'
import users from './modules/users.js'
import tests from './modules/tests.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        products,
        users,
        tests
    }
})
