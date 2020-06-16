const state = {
    users: [
        { id: 1, firstName: 'John', lastName: 'Doe', email: 'johndoe@gmail.com', age: 29, role: 'admin' },
        { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'janedoe@gmail.com', age: 41, role: 'editor' },
        { id: 3, firstName: 'Jack', lastName: 'Smith', email: 'jacksmith@gmail.com', age: 37, role: 'admin' },
        { id: 4, firstName: 'Lilly', lastName: 'Lock', email: 'lillylock@gmail.com', age: 30, role: 'admin' },
        { id: 5, firstName: 'Ana', lastName: 'Jackson', email: 'anajackson@gmail.com', age: 23, role: 'subscriber' }
    ]
}
const getters = {
    users() {
        return state.users
    }
}
const actions = {
    addUser({ commit }, user) {
        commit('newUser', user)
    },
    removeUser({ commit }, id) {
        commit('removeUserData', id)
    }
}
const mutations = {
    newUser(state, user) {
        state.users.push(user)
    },
    removeUserData(state, id) {
        state.users = state.users.filter(function(user){
            if(user.id !== id){
                return user
            }
        })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}