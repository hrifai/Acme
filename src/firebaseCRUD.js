const firebase = require('firebase');
const axios = require('axios');
const md5 = require('md5');

var utils = {};

var app = firebase.initializeApp({
    apiKey: "AIzaSyCDh-29CQtwkwCv6M3WheOdkHSwaj1q0Ig",
    authDomain: "acmestudios-ca284.firebaseapp.com",
    databaseURL: "https://acmestudios-ca284.firebaseio.com",
    projectId: "acmestudios-ca284",
    storageBucket: "",
    messagingSenderId: "198696009280",
    appId: "1:198696009280:web:0599b40157a42a53"
});

var User = function(name, dob, password, email){
    this.email = email;
    this.name = name;
    this.dob = dob;
    this.password = md5(password);
    this.logs = {
        login: [],
        logout: []
    }
};

var Questions = function(question, options, img){
    this.question = question;
    this.options = options;
    this.img = img;
};

var Quiz = function(name, questions, owner){
    this.name = name;
    this.questions = questions;
    this.owner = owner;
};

utils.database = app.database();


utils.newUser = function(name,dob,password,email){
    var user = new User(name, dob, password, email);
    var reciept = utils.database.ref('/Users').push(user);
    return reciept.key;
};

utils.newQuiz = function(name, questions, owner){
    var quiz = new Quiz(name, questions, owner);
    var reciept = utils.database.ref('/Quizs').push(quiz);
    return reciept.key;
};

utils.getQuizs = function(){
    return new Promise((resolve) => {
        var quizs = [];
        utils.database.ref('/Quizs').once('value', (quiz) => {
            quiz.forEach()
        })
    })
};

utils.playQuiz = function(){

};

utils.init = function(){
    console.log(utils.newUser('Hani','03/31/2000','123','hani@rifai.net'));
    console.log(utils.newUser('Tim','03/31/2000','345','tim@test.net'));
    console.log(utils.newUser('James','03/31/2000','678','james@test.net'));


    utils.newQuiz('Quiz1',[
        {question: "How are you?", answers: [{a: "yes", correct: false},{a: "no", correct: false},{a: "maybe", correct: true},{a: "don't ask", correct: false}]},
        {question: "How art thou?", answers: [{a: "yes", correct: false},{a: "no", correct: false},{a: "maybe", correct: true},{a: "don't ask", correct: false}]},
        {question: "How is it going?", answers: [{a: "yes", correct: false},{a: "no", correct: false},{a: "maybe", correct: true},{a: "don't ask", correct: false}]}
    ],'-LlVDxVclo5S_6zhVkOb');

    utils.newQuiz('Quiz2',[
        {question: "How are you?", answers: [{a: "yes", correct: false},{a: "no", correct: false},{a: "maybe", correct: true},{a: "don't ask", correct: false}]},
        {question: "How art thou?", answers: [{a: "yes", correct: false},{a: "no", correct: false},{a: "maybe", correct: true},{a: "don't ask", correct: false}]},
        {question: "How is it going?", answers: [{a: "yes", correct: false},{a: "no", correct: false},{a: "maybe", correct: true},{a: "don't ask", correct: false}]}
    ],'-LlVDxVclo5S_6zhVkOb')

    // utils.database.ref('/Users').push(hani);
    // utils.database.ref('/Users').push(tim);
    // utils.database.ref('/Users').push(james);

};

utils.init();

// axios.post('https://us-central1-acmestudios-ca284.cloudfunctions.net/authenticateUser', {
//     email: 'test',
//     password: '123'
// }).then(response => {
//     console.log(response.data);
// }).catch(error => {
//     console.log(error);
// });


// export default utils;