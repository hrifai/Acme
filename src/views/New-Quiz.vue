<template>
  <div>
    <v-layout justify-center align-center class="headline">Create A New Quiz</v-layout>
      <v-layout justify-left class="subtitle-1 pb-3">Add Questions</v-layout>

      <v-flex v-for="question in questionBank" :key="question.id">
          <v-container>
              <v-card>
                <v-card-title class="justify-center">Question 1</v-card-title>
                  <v-content>
                  </v-content>
              </v-card>
          </v-container>
      </v-flex>

      <v-btn fab bottom left absolute color="purple" @click="questionBank.push(1)"><v-icon>fa-plus</v-icon></v-btn>
      <v-btn fab bottom right absolute color="green" @click="save()"><v-icon>fa-check-circle</v-icon></v-btn>

  </div>
</template>

<script>
    export default {
        methods:{
            save(){

            }
        },
        data: () => ({
            questionBank:[{id:1, q: "a", a: "3"}]
        }),
    }
</script>
