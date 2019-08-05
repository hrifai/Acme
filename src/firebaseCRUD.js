var firebase = require('firebase');
import axios from 'axios';

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
    this.password = password;
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
    return reciept;
};

utils.newQuiz = function(){
    var quiz = new Quiz(name, questions, owner);
    var reciept = utils.database.ref('/Quizs').push(quiz);
    return reciept.val()
};

utils.getQuizs = function(){
    return utils.database.ref('/Quizs').val();
};

utils.playQuiz = function(){

};


export default utils;