<template>
  <div>
      <v-container grid-list-md>
          <v-layout>
              <v-flex xs8>
                <v-layout justify-left class="headline pb-4">All User's</v-layout>
              </v-flex>
              <v-flex xs4>
                    <v-text-field v-model="search" outlined shaped :loading="searching" label="Search"></v-text-field>
              </v-flex>
          </v-layout>
      </v-container>

      <v-flex>
          <v-container grid-list-md>
              <v-layout row wrap>
                      <v-flex xs3 v-for="user in users" :key="user.key">
                          <v-btn @click="showDialog(user)">{{user.fname}} {{user.lname}}</v-btn>
                      </v-flex>
              </v-layout>
          </v-container>
      </v-flex>

      <v-overlay :value="loading">
          <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>

      <v-dialog v-model="dialog" hide-overlay transition="dialog-bottom-transition">
          <v-card class="pa-4">
              <v-card-actions>
                  <v-btn @click="dialog = false" fab absolute top right><v-icon>fa-close</v-icon></v-btn>
              </v-card-actions>
            <user-profile :user="activeUser"></user-profile>
          </v-card>
      </v-dialog>

  </div>
</template>

<style>

</style>

<script>
    import utils from '../firebaseCRUD';
    import UserProfile from "../components/user-profile";

    export default {
        components: {UserProfile},
        beforeMount(){
            this.$on('closeUser', () => {
                this.dialog = false;
            });

           this.loading = true;
            utils.database.ref('/Users').on('value', (snap) => {
                this.users = [];
                snap.forEach(user => {
                    var u = user.val();
                    u.key = user.key;
                    this.users.push(u);
                });
                setTimeout(() => {this.loading = false;}, 2000);
            })
        },
        methods: {
            showDialog(user){
                this.activeUser = user;
                this.dialog = true;
            }
        },
        data: () => ({
            users:[],
            loading:false,
            activeUser: {},
            dialog: false,
            search: "",
            searching:false
        }),
    }
</script>
