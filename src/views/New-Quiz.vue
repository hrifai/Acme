<template>
  <div>

      <v-container grid-list-md>
        <v-layout justify-center align-center class="headline pb-5">Create A New Quiz</v-layout>
        <v-layout justify-center align-center>
            <v-flex xs7>
                <v-text-field v-model="quizTitle" outlined shaped label="Quiz Title"></v-text-field>
            </v-flex>
        </v-layout>
      </v-container>

      <v-flex v-for="(question,index) in questionBank" :key="question.id">
          <v-container>
              <v-card>
                <v-card-title class="justify-center">Question {{index+1}}</v-card-title>
                  <v-container grid-md-list>
                      <v-layout justify-center>
                        <v-flex xs8>
                            <v-text-field v-model="question.q" label="Question:"></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout justify-center>
                          <v-flex xs2 v-for="(n,i) in 4">
                              <v-text-field v-model="question.a[i]" :label="'Answer #'+ (i+1)"></v-text-field>
                          </v-flex>
                      </v-layout>
                  </v-container>
                  <v-card-actions>
                      <v-btn v-if="index!=0" fab top right absolute color="red" @click="removeQuestion(index)"><v-icon>fa-trash</v-icon></v-btn>
                      <v-btn v-if="index+1==questionBank.length" fab bottom left absolute color="purple" @click="questionBank.push({id:index+1, q: '', a: []})"><v-icon>fa-plus</v-icon></v-btn>
                      <v-btn v-if="index+1==questionBank.length" fab bottom right absolute color="green" @click="save()"><v-icon>fa-check-circle</v-icon></v-btn>
                  </v-card-actions>
              </v-card>
          </v-container>
      </v-flex>

      <v-overlay :value="loading">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>

  </div>
</template>

<script>

    import utils from '../firebaseCRUD'

    export default {
        methods:{
            saveQuiz(){
                utils.newQuiz(quizTitle,questionBank)
            },
            removeQuestion(index){
                console.log(index);
                this.questionBank.splice(index,1);
            }
        },
        data: () => ({
            questionBank:[{id:0, q: "", a: []}],
            quizTitle: "",
            loading:false
        }),
    }
</script>
