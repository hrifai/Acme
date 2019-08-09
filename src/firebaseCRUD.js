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

utils.database = app.database();

var User = function(fname,lname, dob, password, email){
    this.email = email;
    this.fname = fname;
    this.lname = lname;
    this.dob = dob;
    this.isAdmin = false;
    this.password = md5(password);
    this.logs = [{
        time: new Date().toDateString(),
        type: 'Account Created'
    }];
};

var Quiz = function(name, questions, owner, img = "https://cdn.pixabay.com/photo/2017/03/07/13/02/question-mark-2123969__340.jpg"){
    this.name = name;
    this.questions = questions;
    this.owner = owner;
    this.img = img;
};

utils.auth = async function(email, password){

    var authObj = {},
        matched = [],
        users = await utils.getUsers();

    users.forEach((user) => {
        if(user.email === email && user.password === md5(password)){
            matched.push(user);
        }
    });

    authObj.user = matched[0];
    return authObj
};

utils.log = function(userKey, type){

    var log = {
        time: new Date().toDateString(),
        type: type
    };
    var logRef = utils.database.ref('/Users/'+userKey+'/logs');
    logRef.once('value', (snap) => {
        var logArray = snap.val();
        logArray.push(log);
        logRef.set(logArray);
    });
};

utils.getUsers = function(){
    return new Promise(resolve => {
        var users = [];
        utils.database.ref('/Users').once('value', (snap) => {
            snap.forEach(user => {
                var userObj = user.val();
                userObj.key = user.key;
                users.push(userObj);
            });
            resolve(users);
        });
    })
};

utils.addResults = function(userKey, results){
    var ref = utils.database.ref('/Users/'+userKey+'/results');
    ref.once('value', (snap) => {
        var current = snap.val();
        current.push(results);
        ref.set(current);
    });
};

utils.newUser = function(fname,lname,dob,password,email){
    var user = new User(fname,lname, dob, password, email);
    var reciept = utils.database.ref('/Users').push(user);
    return reciept.key;
};

utils.newQuiz = function(name, questions, owner, img){
    var quiz = new Quiz(name, questions, owner, img);
    var reciept = utils.database.ref('/Quizs').push(quiz);
    return reciept.key;
};

utils.listenForQuiz = function(callback){
    return utils.database.ref('/Quizs').on('value',callback);
};

utils.listenForUserUpdate = function(userkey, callback){
    return utils.database.ref('/Users/'+userkey).on('value',callback);
};

utils.getQuizs = function(){
    return new Promise((resolve) => {
        var quizs = [];
        utils.database.ref('/Quizs').once('value', (snap) => {
            snap.forEach((quiz) => {
                quizs.push(quiz.val())
            })
        });
        resolve(quizs);
    })
};

utils.playQuiz = function(){

};

export default utils;