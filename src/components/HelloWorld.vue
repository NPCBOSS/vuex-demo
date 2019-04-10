<template>
  <div>
    <p>{{'userAge:'+userAge}}</p>
    <p>{{'userName:'+userName}}</p>
    <p>{{health}}</p>
    <button @click="addAge">添加年龄</button>
    <button @click="weight">添加体重</button>
    <button @click="asyncAddAge">延时添加年龄</button>
    <button @click="actionsHeight">延时添加身高</button>
  </div>

</template>

<script>
  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

  export default {
    name: 'HelloWorld',
    data() {
      return {

      }
    },
    computed: {
      //note state初始调用方法
      // userAge(){
      //   return this.$store.state.userAge;
      // },
      //note mapState调用方法
      ...mapState([  ////计算属性的名称与 state 的子节点名称相同时
        'userAge'
      ]),
      ...mapState({
        userName:state => {
          return state.userName;
        }
      }),
      //note getters初始调用方法
      // userName(){
      //   return this.$store.getters.getUserAge;
      // }

      //note 数组形式
      ...mapGetters([
        'getUserName',
        'getUserAge',
        // 'getHealth'
      ]),
      //note 对象形式可以改变名字
      ...mapGetters({
        health: 'getHealth'
      })

    },
    methods: {
      ...mapMutations([
        'addAge'
      ]),
      ...mapMutations({
        weight: 'addWeight'
      }),
      //mutations初始调用方法
      add() {
        this.$store.commit('addAge');
      },
      ...mapActions([
        'asyncAddAge'
      ]),
      ...mapActions({
        actionsHeight:'asyncAddHeight'
      })
      //note actions初始调用方法
      // asyncAdd() {
      //   this.$store.dispatch('asyncAddAge');
      //   this.$store.dispatch('asyncAddHeight');
      //
      // }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
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
</style>
