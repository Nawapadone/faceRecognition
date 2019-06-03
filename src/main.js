import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyApzkfrAO5FzptWyOBICv1020ee3vChRrc",
  authDomain: "test-f7208.firebaseapp.com",
  databaseURL: "https://test-f7208.firebaseio.com",
  projectId: "test-f7208",
  storageBucket: "test-f7208.appspot.com",
  messagingSenderId: "788999287227",
  appId: "1:788999287227:web:44db1d1868912aa7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// console.log("test")

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')