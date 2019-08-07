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
                                <v-text-field v-model="fname" label="First name" required></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md6>
                                <v-text-field  v-model="lname" label="Last name" required></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field  v-model="email" label="Email" required></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field  v-model="password" label="Password" type="password" required></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <v-select
                                        v-model="age"
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
                    <v-btn color="blue darken-1" text @click="handleRegister()">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog width=350 v-model="validation">
            <v-card>
                <v-card-title>
                    Please Fill Out All Fields Properly Before Saving
                </v-card-title>
                <v-card-actions>
                    <v-layout>
                        <v-btn color="red" @click="validation = false">Close</v-btn>
                    </v-layout>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog width=350 v-model="done">
            <v-card>
                <v-card-title>
                   User has been created.
                </v-card-title>
                <v-card-actions>
                    <v-layout>
                        <v-btn color="green" @click="done = false">Close</v-btn>
                    </v-layout>
                </v-card-actions>
            </v-card>
        </v-dialog>


    </div>
</template>

<script>

    import utils from '../firebaseCRUD'

    export default {
        components: {},
        methods:{
            handleLogin(){
                this.loading = true;
                //checkAuth
                //ifAuth then re route and place token
                //ifNot then show error screen and warning
                setTimeout(()=>{
                    this.loading=false
                },2000)
            },
            handleRegister(){
                if(this.isValid()){
                    this.loading = true;
                    utils.newUser(this.fname + ' ' +this.lname,this.age,this.password,this.email)
                    this.registerDialog = false;
                    this.done = true;
                    this.clearScreen();
                    setTimeout(() => {this.loading = false}, 2000)
                } else {
                    this.registerDialog = false;
                    this.validation = true;
                }
            },
            clearScreen(){
                this.fname = '';
                this.lname = '';
                this.age = '';
                this.email = '';
                this.password = '';
            },
            isValid(){
              var isValidEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email);
              var isValidName = /^[^0-9]+$/.test(this.fname) && /^[^0-9]+$/.test(this.lname)
                return isValidEmail && isValidName
            }
        },
        data() {
          return {
              dialog:false,
              registerDialog:false,
              loading:false,
              validation: false,
              fname: '',
              lname: '',
              age: '',
              email: '',
              password: '',
              done: false
          }
        }
    }
</script>
