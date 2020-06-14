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
        <div v-for="product in products" v-bind:key="product.id" class="product-details">
            <div class="product-name">
                {{ product.name }}
            </div>
            <div class="product-description">
                {{ product.description }}
            </div>
            <div class="product-price">
                {{ product.price }}
            </div>
        </div>
        <div id="product-form">
            <h4>Add Product</h4>
            <div id="form-box">
                <form>
                    <div id="name-box">
                        <input type="text" v-model="name" placeholder="Enter Product Name..." autocomplete="off">
                    </div>
                    <div id="description-box">
                        <textarea cols="50" rows="5" v-model="description" 
                            placeholder="Enter Product Description..." autocomplete="off">
                            
                        </textarea>
                    </div>
                    <div id="price-box">
                        <input type="number" v-model="price" placeholder="Enter Product Price" 
                            autocomplete="off" min="0">
                    </div>
                    <div id="button-box">
                        <button type="button" id="add-product-button">ADD PRODUCT</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'ProductData',
    computed: {
        ...mapGetters(['products'])
    },
    data() {
        return {
            name: '',
            description: '',
            price: 0
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
.product-name, .product-description, .product-price {
    float: left;
    width: 31%;
    border: 1px solid #808080;
    padding: 10px;
}
#product-form {
    margin-top: 30px;
    float: left;
}

#product-form h4 {
    text-align: left;
}
input[type="text"], input[type="number"], textarea {
    padding: 5px;
    width: 100%;
    outline: 0;
}
textarea {
    resize: vertical;
}
#name-box, #description-box, #price-box {
    margin-bottom: 5px;
}
#add-product-button {
    padding: 5px;
    outline: 0;
}
#button-box {
    text-align: left;
}
</style>