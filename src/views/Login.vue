<template>
    <div>
        <v-layout class="headline justify-center align-center pb-3">Acme Studios.</v-layout>
        <v-container grid-list-md>
            <v-layout class="subheading justify-center align-center pb-5">Sign In</v-layout>
            <v-layout row justify-center align-center>
                <v-flex xs4>
                    <v-text-field label="Email"></v-text-field>
                </v-flex>
                <v-flex xs4>
                    <v-text-field label="Password" type="password"></v-text-field>
                </v-flex>
            </v-layout>
            <v-layout row justify-center align-center>
                <v-flex xs2>
                        <v-btn large depressed @click="handleLogin">Log-In</v-btn>
                </v-flex>
                <v-flex xs2>
                    <v-btn large depressed color="primary" @click="registerDialog=true">Register</v-btn>
                </v-flex>
            </v-layout>
        </v-container>

        <v-overlay :value="loading">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>

        <v-dialog v-model="registerDialog" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <v-layout class="headline justify-center align-center">Register New User</v-layout>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12 sm6 md6>
                                <v-text-field label="First name" required></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md6>
                                <v-text-field
                                        label="Last name"
                                        required
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field label="Email" required></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field label="Password" type="password" required></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <v-select
                                        :items="['0-17', '18-29', '30-54', '54+']"
                                        label="Age*"
                                        required
                                ></v-select>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <v-autocomplete
                                        :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                        label="Interests"
                                        multiple
                                ></v-autocomplete>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="registerDialog = false">Close</v-btn>
                    <v-btn color="blue darken-1" text @click="registerDialog = false">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>


    </div>
</template>

<script>
    export default {
        components: {},
        methods:{
            handleLogin(){
                this.loading=true;
                //checkAuth
                //ifAuth then re route and place token
                //ifNot then show error screen and warning
                setTimeout(()=>{
                    this.loading=false
                },4000)
            }
        },
        data() {
          return {
              dialog:false,
              registerDialog:false,
              loading:false
          }
        }
    }
</script>
