<template>
  <div>
      <v-container grid-list-md>
          <v-layout>
              <v-flex xs8>
                <v-layout justify-left class="headline pb-4">Search Quiz's</v-layout>
              </v-flex>
              <v-flex xs4>
                    <v-text-field v-model="search" outlined shaped :loading="searching" label="Search"></v-text-field>
              </v-flex>
          </v-layout>
      </v-container>

      <v-flex>
          <v-container grid-list-md>
              <v-layout row wrap>
                      <v-flex xs3 v-for="quiz in quizs" :key="quiz.key">
                            <button-card @click.native="showDialog(quiz)" :img="quiz.img" :text="quiz.name"></button-card>
                      </v-flex>
              </v-layout>
          </v-container>
      </v-flex>

      <v-overlay :value="loading">
          <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>

      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <quiz-profile :activeQuiz="activeQuiz"></quiz-profile>
      </v-dialog>

  </div>
</template>

<script>
    import ButtonCard from "../components/button-card";
    import ResultsCard from "../components/results-card";
    import QuizProfile from '../components/quiz-profile';
    import utils from '../firebaseCRUD';

    export default {
        components: {QuizProfile, ButtonCard, ResultsCard},
        beforeMount(){
           this.loading = true;
           utils.listenForQuiz((snap) => {
                   this.quizs = [];
                   snap.forEach(quiz => {
                       this.quizs.push(quiz.val());
                   });
                   setTimeout(() => {this.loading = false;}, 2000);
           })
        },
        methods: {
            showDialog(quiz) {
                this.activeQuiz = quiz;
                this.dialog = true;
            }
        },
        data: () => ({
            quizs:[],
            fab:true,
            loading:false,
            activeQuiz: {},
            dialog: false,
            search: "",
            searching:false
        }),
    }
</script>
