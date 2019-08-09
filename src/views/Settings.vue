<template>
    <div>
        <v-layout class="headline justify-center align-center pb-3">{{activeUser.fname}}'s Profile</v-layout>
        <v-container grid-list-md>
            <v-layout wrap>
                <v-flex xs12 sm6 md6>
                    <v-text-field v-model="activeUser.fname" label="First name" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md6>
                    <v-text-field  v-model="activeUser.lname" label="Last name" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-text-field  v-model="activeUser.email" label="Email" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-text-field  v-model="password" label="Password" type="password" required></v-text-field>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import utils from '../firebaseCRUD'

    export default {
        components: {},
        created(){
           utils.database.ref('/Users/'+this.activeUser.key).on('value', (snap) => {
              this.activeUser = snap.val();
           })
        },
        data() {
          return {
              password: ''
          }
        },
        props:{
            activeUser: Object
        }
    }
</script>
