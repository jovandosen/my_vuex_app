<template>
    <div id="add-new-user">
        <h4>New User</h4>
        <div id="new-user-form">
            <form>
                <div id="first-name-box">
                    <input type="text" v-model="firstName" name="firstName" id="firstName" 
                        placeholder="Enter Your First Name..." autocomplete="off">
                </div>
                <div id="last-name-box">
                    <input type="text" v-model="lastName" name="lastName" id="lastName" 
                        placeholder="Enter Your Last Name..." autocomplete="off">
                </div>
                <div id="email-box">
                    <input type="text" v-model="email" name="email" id="email" 
                        placeholder="Enter Your Email Address..." autocomplete="off">
                </div>
                <div id="age-box">
                    <input type="number" v-model="age" name="age" id="age" 
                        placeholder="Enter Your Age..." autocomplete="off" min="1">
                </div>
                <div id="role-box">
                    <select v-model="role" id="role">
                        <option value="" disabled>Please select role</option>
                        <option value="admin">Admin</option>
                        <option value="editor">Editor</option>
                        <option value="subscriber">Subscriber</option>
                    </select>
                </div>
                <div id="button-box">
                    <button type="button" id="add-user-button" v-on:click="addNewUser">ADD USER</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'AddUser',
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            age: '',
            role: '',
            errors: []
        }
    },
    methods: {
        ...mapActions(['addUser']),
        addNewUser() {
            var result = this.validateForm()
            if(result){
                var maxId = this.findMaxUserId()
                var userId = maxId + 1
                var user = {}
                user.id = userId
                user.firstName = this.firstName
                user.lastName = this.lastName
                user.email = this.email
                user.age = parseInt(this.age)
                user.role = this.role
                this.addUser(user)
                this.clearForm()
            } else {
                var errorMessages = ''
                for(var i = 0; i < this.errors.length; i++){
                    errorMessages += this.errors[i] + '\n'
                }
                alert('Please fill out the form.\n\n' + errorMessages)
            }
        },
        findMaxUserId() {
            var ids = []
            var allUsers = this.users
            for(var i = 0; i < allUsers.length; i++){
                ids.push(allUsers[i].id)
            }
            return Math.max.apply(Math, ids)
        },
        clearForm() {
            this.firstName = ''
            this.lastName = ''
            this.email = ''
            this.age = ''
            this.role = ''
        },
        validateForm() {
            this.errors = []
            if(!this.firstName){
                this.errors.push('First Name Required.')
            }
            if(!this.lastName){
                this.errors.push('Last Name Required.')
            }
            if(!this.email){
                this.errors.push('Email Required.')
            } else {
                if(!this.validateEmail(this.email)){
                    this.errors.push('Invalid Email.')
                }
            }
            if(!this.age){
                this.errors.push('Age Required.')
            }
            if(!this.role){
                this.errors.push('Role Required.')
            }
            if(this.errors.length === 0){
                return true
            } else {
                return false
            }
        },
        validateEmail(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        }
    },
    computed: {
        ...mapGetters(['users'])
    },
    props: {
        user: {
            type: Object,
            required: false
        }
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            value = value.trim()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
}    
</script>

<style scoped>
#add-new-user {
    float: left;
}    
#add-new-user h4 {
    float: left;
}
#new-user-form {
    width: 300px;
}
#firstName, #lastName, #email, #age {
    padding: 5px;
    outline: 0;
    width: 100%;
}
#role {
    width: 105%;
    padding: 5px;
    float: left;
}
#first-name-box, #last-name-box, #email, #age, #role {
    margin-bottom: 5px;
}
#add-user-button {
    width: 105%;
    padding: 5px;
    color: white;
    background-color: #21A2DDFF;
    outline: 0;
}
#button-box {
    margin-bottom: 20px;
}
</style>