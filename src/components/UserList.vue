<template>
    <div id="user-list">
        <h3>User List</h3>
        <div id="user-table-data">
            <table style="width: 100%" id="user-table">
                <UserTableHeading/>
                <UserTableRows/>
            </table>
        </div>
        <div id="user-form-box">
            <AddUser/>
        </div>
    </div>
</template>

<script>
import UserTableHeading from './UserTableHeading.vue'
import UserTableRows from './UserTableRows.vue'
import AddUser from './AddUser.vue'

export default {
    name: 'UserList',
    components: {
        UserTableHeading,
        UserTableRows,
        AddUser
    }
}    
</script>

<style scoped>
#user-list {
    float: left;
    border-top: 3px solid #808080;
    margin-top: 20px;
    max-width: 1200px;
    width: 1200px;
    margin-left: 355px;
}    
#user-table {
    border: 1px solid black;
    border-collapse: collapse;
}
</style>