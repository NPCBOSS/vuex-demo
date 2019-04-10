/**
 *@author       孙冬冬
 *@date         2019/4/9 0009 下午 6:14
 *@Copyright    天源迪科信息技术股份有限公司
 *@Description
 */
import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex);

const state = {
  userName:'xiaoming',
  userAge:15,
  height:180,
  weight:85
};
const getters = {
  getUserName(state){
    return state.userName;
  },
  getUserAge(){
    return state.userAge;
  },
  getHealth(){
    return `my height is ${state.height}cm,but my weight is ${state.weight}kg!`
  }
};
const mutations = {
  addAge(){
    return state.userAge++ ;
  },
  addHeight(){
    return state.height++;
  },
  addWeight(){
    return state.weight++;
  }

};
const actions = {
  asyncAddAge(context){
    setTimeout(() =>{
      context.commit('addAge')
    },1000)
  },
   asyncAddHeight(context){
    setTimeout(() =>{
      context.commit('addHeight')
    },1000)
  },

};

const store = new vuex.Store({
  state,
  getters,
  mutations,
  actions
});


export default store;
