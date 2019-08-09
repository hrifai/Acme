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
                    <v-text-field  v-model="password" label="Password" type="password" required></v-text-field>
                </v-flex>
            </v-layout>
        </v-container>

        <v-container grid-list-md>
            <v-layout wrap>
                <v-flex xs3>
                    <v-btn color="primary" @click="logsDialog = true">View Logs</v-btn>
                </v-flex>
                <v-flex xs3>
                    <v-btn color="red">Delete User</v-btn>
                </v-flex>
                <v-flex xs3>
                    <v-btn color="green">Save User</v-btn>
                </v-flex>
                <v-flex xs3>
                    <v-btn>Download User</v-btn>
                </v-flex>
            </v-layout>
        </v-container>

        <v-dialog v-model="logsDialog" transition="dialog-bottom-transition">
            <log-table :logs="user.logs"></log-table>
        </v-dialog>

    </div>
</template>

<script>
    import LogTable from "./log-table";
    export default {
        name: "user-profile",
        components: {LogTable},
        data(){
            return {
                password: '',
                logsDialog: false
            }
        },
        props:{
            user:Object
        }
    }

</script>

<style scoped>

</style>