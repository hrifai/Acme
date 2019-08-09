<template>
    <div>
        <v-layout class="headline justify-center align-center pb-3">Acme Studios Quiz.</v-layout>
        <v-layout class="justify-center align-center"><small>Welcome Back {{activeUser.fname}}</small></v-layout>
        <v-container grid-list-md>
            <v-layout wrap>
                <v-flex xs4>
                     <button-card img="https://images.pexels.com/photos/239548/pexels-photo-239548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" text="Host A Quiz"></button-card>
                </v-flex>
                <v-flex xs4>
                    <button-card img="https://images.pexels.com/photos/1366942/pexels-photo-1366942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" text="Create New Quiz"></button-card>
                </v-flex>
                <v-flex xs4>
                    <button-card img="https://images.pexels.com/photos/63901/pexels-photo-63901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" text="Lookup Quiz's"></button-card>
                </v-flex>
            </v-layout>
            <v-layout wrap>
                <v-flex xs4>
                    <button-card img="https://images.pexels.com/photos/357514/pexels-photo-357514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" text="View Past Results"></button-card>
                </v-flex>
                <v-flex xs4>
                    <button-card img="https://images.pexels.com/photos/842339/pexels-photo-842339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" text="Edit User Profile"></button-card>
                </v-flex>
                <v-flex xs4>
                    <button-card img="https://images.pexels.com/photos/9816/pexels-photo-9816.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" text="Log Out"></button-card>
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
            buttonCards:{
                row1: [],
            }
          }
        },
        props:{
            activeUser: Object
        }
    }
</script>
