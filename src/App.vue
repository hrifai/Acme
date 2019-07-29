<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>

      <v-list dense>

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

      </v-list>

    </v-navigation-drawer>

    <v-content>
      <v-layout align-center justify-center fill-height>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-layout>
    </v-content>

    <v-app-bar app clipped-left >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Acme Studios.</v-toolbar-title>
    </v-app-bar>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
    export default {
        props: {
            source: String,
        },
        data: () => ({
            drawer: null,
            menuItems:[
                {text: "Menu", icon: "fa-home", route: "/"},
                {text: "View Quiz's", icon: "fa-dashboard", route: "/quizs"},
                {text: "New Quiz", icon: "fa-plus", route: "/new-quiz"},
                {text: "View Results", icon: "fa-book", route: "/results"},
                {text: "Edit Profile", icon: "fa-cog", route: "/settings"}
            ]
        }),
        created () {
            this.$vuetify.theme.dark = true
        },
    }
</script>