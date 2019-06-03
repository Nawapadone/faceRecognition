import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyAWf0Le8TwWO3Fq9KwdOQWjLlE8D5YYXeM",
  authDomain: "facerecognition-b6c43.firebaseapp.com",
  databaseURL: "https://facerecognition-b6c43.firebaseio.com",
  projectId: "facerecognition-b6c43",
  storageBucket: "facerecognition-b6c43.appspot.com",
  messagingSenderId: "679829275861",
  appId: "1:679829275861:web:1ce02000211a6959"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// console.log("test")

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')