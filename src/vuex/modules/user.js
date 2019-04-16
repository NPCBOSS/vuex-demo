/**
 *@author       孙冬冬
 *@date         2019/4/10 0010 上午 10:11
 *@Copyright    天源迪科信息技术股份有限公司
 *@Description
 */
const state ={
  userName:'Helen',
  userSex:'man'
};
const getters = {
  getUserName(){
    return state.userName;
  },
  getUserSex(){
    return state.userSex;
  }
};
const mutations = {
  changeSex(state){
    return state.userSex === 'man' ?state.userSex = 'women':state.userSex='man';
  }
};
const actions = {

}
