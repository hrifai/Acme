<template>
    <div>
        <v-layout class="headline justify-center align-center pb-3">Acme Studios Quiz.</v-layout>
        <v-layout class="justify-center align-center"><small>Welcome Back {{activeUser.fname}}</small></v-layout>
        <v-container grid-list-md>
            <v-layout wrap>
                <v-flex xs4 v-for="button in buttonCards" :key="button.text">
                    <!--<router-link :to="button.route">-->
                        <button-card @click.native="$router.push(button.route)" :img="button.img" :text="button.text"></button-card>
                    <!--</router-link>-->
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import ButtonCard from "../components/button-card";
    export default {
        components: {ButtonCard},
        data() {
          return {
            buttonCards:[
                {
                    img: "https://images.pexels.com/photos/239548/pexels-photo-239548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    text: "Host A Quiz",
                    route: '/quizs'
                },
                {
                    img: "https://images.pexels.com/photos/1366942/pexels-photo-1366942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    text: "Create New Quiz",
                    route: '/new-quiz'
                },
                {
                    img: "https://images.pexels.com/photos/63901/pexels-photo-63901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    text: "Lookup Quiz's",
                    route: '/quizs'
                },
                {
                    img: "https://images.pexels.com/photos/357514/pexels-photo-357514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    text: 'View Past Results',
                    route: '/results'
                },
                {
                    img: "https://images.pexels.com/photos/842339/pexels-photo-842339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    text: "Edit User Profile",
                    route: '/settings'
                },
                {
                    img: "https://images.pexels.com/photos/9816/pexels-photo-9816.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                    text: "Log Out"
                }]
          }
        },
        props:{
            activeUser: Object
        }
    }
</script>
