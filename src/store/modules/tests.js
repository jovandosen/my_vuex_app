import axios from 'axios'

const state = {
    tests: null
}
const getters = {
    allTests() {
        return state.tests
    }
}
const actions = {
    async getTests({ commit }) {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
                                    .catch(error => console.log(error))
        commit('setTests', response.data.bpi)
    }
}
const mutations = {
    setTests(state, responseData) {
        state.tests = responseData
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}