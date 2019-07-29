<template>
    <div>
        <v-layout class="headline justify-center align-center pb-3">Acme Studios Quiz.</v-layout>
        <v-container grid-list-md>
            <v-layout wrap>
                <v-flex xs4>
                     <button-card img="https://cdn.vuetifyjs.com/images/cards/docks.jpg" text="Start Existing Quiz"></button-card>
                </v-flex>
                <v-flex xs4>
                    <button-card img="https://cdn.vuetifyjs.com/images/cards/docks.jpg" text="Create New Quiz"></button-card>
                </v-flex>
                <v-flex xs4>
                    <button-card img="https://cdn.vuetifyjs.com/images/cards/docks.jpg" text="Lookup Quiz's"></button-card>
                </v-flex>
            </v-layout>
            <v-layout wrap>
                <v-flex xs4>
                    <button-card img="https://cdn.vuetifyjs.com/images/cards/docks.jpg" text="View Past Results"></button-card>
                </v-flex>
                <v-flex xs4>
                    <button-card img="https://cdn.vuetifyjs.com/images/cards/docks.jpg" text="Edit User Profile"></button-card>
                </v-flex>
                <v-flex xs4>
                    <button-card img="https://cdn.vuetifyjs.com/images/cards/docks.jpg" text="Log Out"></button-card>
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
            buttonCards:{}
          }
        }
    }
</script>
