const state = {
    products: [
        { id: 1, name: 'Product One', description: 'Product One Description', price: 100 },
        { id: 2, name: 'Product Two', description: 'Product Two Description', price: 200 },
        { id: 3, name: 'Product Three', description: 'Product Three Description', price: 150 }
    ]
}
const getters = {
    products: state => state.products
}
const actions = {
    addProduct({ commit }, product) {
        commit('addNewProduct', product)
    },
    removeProduct({ commit }, id) {
        commit('removeProductData', id)
    },
    updateProduct({ commit }, record) {
        commit('updateProductData', record)
    }
}
const mutations = {
    addNewProduct: (state, product) => state.products.push(product),
    removeProductData: (state, id) => state.products = state.products.filter(product => product.id !== id),
    updateProductData(state, productData) {
        state.products = state.products.filter(product => product.id !== productData.id)
        state.products.push(productData)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}