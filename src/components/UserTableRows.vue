<template>
    <tbody>
        <tr v-for="user in users" v-bind:key="user.id" v-bind:class="rowHoverStyle" v-on:click="$emit('get-user', user)">
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.role }}</td>
            <td class="actions-box"><a v-on:click="deleteUser(user.id)">delete</a></td>
        </tr>
    </tbody>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'UserTableRows',
    computed: {
        ...mapGetters(["users"])
    },
    data() {
        return {
            rowHoverStyle: 'add-hover-style'
        }
    },
    methods: {
        ...mapActions(['removeUser']),
        deleteUser(id) {
            this.removeUser(id)
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
.actions-box a {
    color: red;
}   
.actions-box a:hover {
    text-decoration: underline;
    cursor: pointer;
}
</style>