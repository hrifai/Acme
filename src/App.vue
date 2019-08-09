<template>
  <v-app id="inspire">
    <v-navigation-drawer v-if="loggedIn" v-model="drawer" app clipped>

      <v-list dense>

        <v-list-item>
          <v-list-item-action>
            <v-icon>fa-user-circle</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{activeUser.fname}} {{activeUser.lname}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-layout v-for="item in menuItems" :key="item.text">
          <v-list-item @click="$router.push(item.route)">
            <v-list-item-action>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{item.text}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-layout>

        <v-spacer></v-spacer>

        <v-list-item class="mt-3" @click="logOut()">
            <v-list-item-action>
              <v-icon>fa-sign-in</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Log Out</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        <v-list-item @click="$router.push('/users')">
          <v-list-item-action>
            <v-icon>fas fa-user-friends</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>All Users</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>

    </v-navigation-drawer>

    <v-content>
      <v-layout align-center justify-center fill-height>
        <v-container>
          <router-view :activeUser="activeUser"></router-view>
        </v-container>
      </v-layout>
    </v-content>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon v-if="loggedIn" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Acme Studios.</v-toolbar-title>
    </v-app-bar>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  import utils from './firebaseCRUD'

    export default {
        props: {
            source: String,
        },
        data: () => ({
            drawer: false,
            loggedIn: false,
            activeUser: {},
            menuItems:[
                {text: "Menu", icon: "fa-home", route: "/home"},
                {text: "View Quiz's", icon: "fa-dashboard", route: "/quizs"},
                {text: "New Quiz", icon: "fa-plus", route: "/new-quiz"},
                {text: "View Results", icon: "fa-book", route: "/results"},
                {text: "Edit Profile", icon: "fa-cog", route: "/settings"}
            ]
        }),
        created () {
            this.$on('login', (user) => {
              this.activeUser = user;
              this.loggedIn = true;
            });

            this.$vuetify.theme.dark = true;
            window.Acme = window.Acme || {};
            window.Acme.store = window.Acme.store || {
                activeUserId: '',
                userObj: {},
                loggedInState: false
            };
        },
        methods: {
          logOut(){
              utils.log(this.activeUser.key, 'Log out');
              this.loggedIn = false;
              window.Acme.store = {
                  activeUserId: '',
                  userObj: {},
                  loggedInState: false
              };
              this.$router.push('/')
          }
        }
    }
</script>