<template>
    <div id="product-form">
        <h4>Add Product</h4>
        <div id="form-box">
            <form>
                <div id="name-box">
                    <input type="text" v-model="product.name" placeholder="Enter Product Name..." autocomplete="off">
                </div>
                <div id="description-box">
                    <textarea cols="50" rows="5" v-model="product.description" 
                        placeholder="Enter Product Description..." autocomplete="off">
                        
                    </textarea>
                </div>
                <div id="price-box">
                    <input type="number" v-model="product.price" placeholder="Enter Product Price" 
                        autocomplete="off" min="0">
                </div>
                <div id="button-box">
                    <button type="button" id="add-product-button" v-on:click="addProductData">ADD PRODUCT</button>
                    <button type="button" id="update-product-button" style="display: none;" 
                        v-bind:class="{'is-active': updateState}" v-on:click="updateProductRecord">
                        UPDATE PRODUCT
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'AddProduct',
    props: ["product", "updateState"],
    methods: {
        ...mapActions(['addProduct', 'updateProduct']),
        addProductData() {
            var productRecord = {}
            productRecord.name = this.product.name
            productRecord.description = this.product.description
            productRecord.price = this.product.price
            this.addProduct(productRecord)
        },
        updateProductRecord() {
            var productInformation = {}
            productInformation.id = this.product.id
            productInformation.name = this.product.name
            productInformation.description = this.product.description
            productInformation.price = parseInt(this.product.price)
            this.updateProduct(productInformation)
        }
    }
}    
</script>

<style scoped>
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
    background: #1F88DFFF;
    color: white;
}
#button-box {
    text-align: left;
}    
#update-product-button {
    padding: 5px;
    outline: 0;
    background: #2DD15FFF;
    color: white;
    margin-left: 2px;
}
.is-active {
    display: inline-block !important;
}
</style>