<template>
    <tbody>
        <tr v-for="user in users" v-bind:key="user.id" v-bind:class="rowHoverStyle">
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.role }}</td>
        </tr>
    </tbody>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'UserTableRows',
    computed: {
        ...mapGetters(["users"])
    },
    data() {
        return {
            rowHoverStyle: 'add-hover-style'
        }
    }
}    
</script>

<style scoped>
#user-table td {
    border: 1px solid black;
    border-collapse: collapse;
    padding: 10px;
}
.add-hover-style:hover {
    background-color: #C0C0C0FF;
}    
</style>