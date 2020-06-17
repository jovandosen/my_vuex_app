<template>
   <div id="app-tests">
        <h3>Tests</h3>
        <div>
            <div v-for="test in allTests" v-bind:key="test.code">
                <div>
                    <strong>{{ test.description }}:</strong>{{ test.rate_float | currencydecimal }}
                </div>
            </div>
        </div>
   </div> 
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'AppTests',
    computed: {
        ...mapGetters(["allTests"])
    },
    methods: {
        ...mapActions(["getTests"])
    },
    created() {
        this.getTests()
    },
    filters: {
        currencydecimal (value) {
            return value.toFixed(2)
        }
    }
}    
</script>

<style scoped>
#app-tests {
    float: left;
    border-top: 3px solid #808080;
    width: 1200px;
    margin-left: 360px;
}    
</style>