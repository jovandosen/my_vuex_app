<template>
    <div class="product-information">
        <div class="product-name" v-on:click="getProductData(product)">
            {{ product.name }}
        </div>
        <div class="product-description" v-on:click="getProductData(product)">
            {{ product.description }}
        </div>
        <div class="product-price" v-on:click="getProductData(product)">
            {{ product.price }}
        </div>
        <div class="product-actions" v-on:click="getProductData(product)">
            <a v-on:click="removeProductDetails(product.id)">remove</a>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'ProductRecord',
    props: ["product"],
    data() {
        return {
            id: 0,
            name: '',
            description: '',
            price: 0
        }
    },
    methods: {
        ...mapActions(['removeProduct']),
        removeProductDetails(id) {
            this.removeProduct(id)
        },
        findProduct(product) {
            this.updateState = true
            this.id = product.id
            this.name = product.name
            this.description = product.description
            this.price = product.price
        },
        getProductData(item) {
            this.$emit('get-product-data', item)
        }
    }
}    
</script>

<style scoped>
.product-name, .product-description, .product-price, .product-actions {
    float: left;
    width: 23%;
    border: 1px solid #808080;
    padding: 10px;
}
.product-actions a {
    color: red;
}
.product-actions a:hover {
    text-decoration: underline;
    cursor: pointer;
}    
</style>