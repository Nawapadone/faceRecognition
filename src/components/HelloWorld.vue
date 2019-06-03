<template>
  <div class="hello">
    <div class="container">
      <div class="row">
          <div class="col s6">
              <div class="card">
                <div class="card-image">
                  <img src="../assets/game.jpg">
                  <!-- <span class="card-title">Game</span> -->
                </div>
                <div class="card-content">
                  <p>Game last seen</p>
                  {{this.game}}
                </div>
                <div class="">
                  <a class="cards" href="https://www.facebook.com/panusron.phansod">Game</a>
                </div>
              </div>   
        </div>
        <div class="col s6">
            <div class="card">
                <div class="card-image">
                  <img src="../assets/yin.jpg">
                  <!-- <span class="card-title">Yin</span> -->
                </div>
                <div class="card-content">
                  <p>Yin last seen</p>
                  {{this.yin}}
                </div>
                <div class="">
                  <a class="cards" href="https://www.facebook.com/kidnpeach">Yin</a>
                </div>
              </div>      
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      users:{},
      game :'',
      yin:'',
    }
  },
  created(){
    this.setFirebase()
  },
  methods:{
    setFirebase(){
    // The key of any non-root reference is the last token in the path
    var adaRef = firebase
    .database()
    .ref("faces/")
    .on("value", snapshot => {
      // this.users.push(snapshot.val())
      // let key = snapshot.key
      // let val = snapshot.val()
      // this.users[key] = val

      let val = snapshot.val()
      this.users = val
      this.game = this.users['Game'].time
      this.yin = this.users['Yin'].time
    })
    
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.cards{
  color: #ffab40;
  margin-right: 24px;
  font-size: 25px;
}
</style>
