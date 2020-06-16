<template>
    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Role</th>
            <th>Actions</th>
        </tr>
    </thead>
</template>

<script>
export default {
    name: 'UserTableHeading'
}    
</script>

<style scoped>
#user-table th {
    border: 1px solid black;
    border-collapse: collapse;
    padding: 10px;
    background-color: #808080;
    color: white;
}    
</style>