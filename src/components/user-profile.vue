<template>
    <div>
        <v-layout class="headline justify-center align-center pb-3">{{user.fname}}'s Profile</v-layout>
        <v-container grid-list-md>
            <v-layout wrap>
                <v-flex xs12 sm6 md6>
                    <v-text-field v-model="user.fname" label="First name" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md6>
                    <v-text-field  v-model="user.lname" label="Last name" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-text-field  v-model="user.email" label="Email" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-text-field  v-model="password" label="New Password" type="password" required></v-text-field>
                </v-flex>
            </v-layout>
        </v-container>

        <v-container grid-list-md>
            <v-layout wrap>
                <v-flex xs3>
                    <v-btn color="primary" @click="logsDialog = true">View Logs</v-btn>
                </v-flex>
                <v-flex xs3>
                    <v-btn color="red" @click="confirm = true">Delete User</v-btn>
                </v-flex>
                <v-flex xs3>
                    <v-btn color="green" @click="saveUser()">Save User</v-btn>
                </v-flex>
                <v-flex xs3>
                    <v-btn>Users Quizs</v-btn>
                </v-flex>
            </v-layout>
        </v-container>

        <v-dialog v-model="logsDialog" transition="dialog-bottom-transition">
            <v-card>
            <v-card-actions>
                <v-btn @click="logsDialog = false" fab absolute top right><v-icon>fa-close</v-icon></v-btn>
            </v-card-actions>
            <log-table :logs="user.logs"></log-table>
            </v-card>
        </v-dialog>

        <v-dialog width=350 v-model="done">
            <v-card>
                <v-card-title>
                    User has been updated.
                </v-card-title>
                <v-card-actions>
                    <v-layout>
                        <v-btn color="green" @click="done = false">Close</v-btn>
                    </v-layout>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog width=350 v-model="confirm">
            <v-card>
                <v-card-title>
                    Are you sure you want to delete this account?
                </v-card-title>
                <v-card-actions>
                    <v-layout>
                        <v-btn color="red" @click="deleteUser()">Yes</v-btn>
                        <v-btn color="dark" @click="confirm = false">No</v-btn>
                    </v-layout>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </div>
</template>

<script>
    import utils from '../firebaseCRUD'
    import LogTable from "./log-table";
    export default {
        name: "user-profile",
        components: {LogTable},
        created(){
        },
        data(){
            return {
                password: '',
                logsDialog: false,
                done: false,
                confirm: false
            }
        },
        methods:{
            saveUser(){
                utils.saveUserData(this.user,this.password);
                this.password = '';
                this.done = true;
            },
            deleteUser(){
                this.confirm = false;
                this.$parent.$parent.$parent.$parent.$emit('closeUser');
                if(this.user.key === window.Acme.store.activeUserId){
                    utils.deleteUser(this.user);
                    this.$router.push('/');
                    window.location.reload();
                } else {
                    utils.deleteUser(this.user);
                }
            }
        },
        props:{
            user:Object
        }
    }

</script>

<style scoped>

</style>