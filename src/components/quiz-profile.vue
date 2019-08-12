<template>
    <v-card>
        <v-img class="white--text" height="200px" :src="activeQuiz.img">
            <v-overlay absolute color="#000">
                <v-layout justify-center align-center fill-height>
                    <v-card-title>{{activeQuiz.name}} - Questions</v-card-title>
                </v-layout>
            </v-overlay>
        </v-img>
        <v-toolbar dark>
            <v-toolbar-title>Quiz Preview</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn dark text @click="dialog = false" color="green">Start Quiz<v-icon class="pl-3">fa-play-circle</v-icon></v-btn>
                <v-btn dark text @click="closeMe()" color="blue" left>Edit</v-btn>
                <v-btn dark text @click="closeMe()" color="red" left>Delete</v-btn>
                <v-btn dark text @click="closeMe()">Exit</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
            <v-container v-for="(questionSet,i) in activeQuiz.questions" :key="JSON.stringify(questionSet)" grid-list-md>
                <v-layout class="headline">
                    <v-flex xs12>
                        Question {{i + 1}}: {{questionSet.q}}
                    </v-flex>
                    <v-flex xs3 v-for="answer in questionSet.a" :key="JSON.stringify(answer)">
                        <v-layout v-if="answer.correct == true">
                            <span style="color:lightgreen;">{{answer}}</span>
                        </v-layout>
                        <v-layout>
                            {{answer}}
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
    // import utils from '../firebaseCRUD'

    export default {
        name: "quiz-profile",
        components: {},
        created(){
        },
        data(){
            return {
            }
        },
        methods:{
            closeMe(){
                this.$parent.$parent.$parent.dialog = false
            }
        },
        props:{
            activeQuiz:Object,
            isAdmin: Boolean,
            isOwner: Boolean
        }
    }

</script>

<style scoped>

</style>