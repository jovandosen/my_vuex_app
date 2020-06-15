<template>
    <div id="product-data">
        <h3>Product Data</h3>
        <div class="product-name">
            <strong>Name</strong>
        </div>
        <div class="product-description">
            <strong>Description</strong>
        </div>
        <div class="product-price">
            <strong>Price</strong>
        </div>
        <div class="product-actions">
            <strong>Actions</strong>
        </div>
        <div v-for="product in products" v-bind:key="product.id" class="product-details">
            <ProductRecord v-bind:product="product" v-on:get-product-data="productDetails"/>
        </div>
        <AddProduct v-bind:product="product" v-bind:updateState="updateState"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AddProduct from './AddProduct.vue'
import ProductRecord from './ProductRecord.vue'

export default {
    name: 'ProductData',
    data() {
        return {
            product: {},
            updateState: false
        }
    },
    computed: {
        ...mapGetters(['products'])
    },
    components: {
        AddProduct,
        ProductRecord
    },
    methods: {
        productDetails(item) {
            this.product = item
            this.updateState = true
        }
    }
}    
</script>

<style scoped>
#product-data {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}
.product-name, .product-description, .product-price, .product-actions {
    float: left;
    width: 23%;
    border: 1px solid #808080;
    padding: 10px;
}   
</style>