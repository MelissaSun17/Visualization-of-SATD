import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import tabs from './modules/tabs'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    tabs
  },
  getters
})

export default store

// const state={   //global state object
//   tabOne: [],
//   tabTwo: [],
//   tabThree: [],
//   tabFour: []
// };
// const getters = {  
//   tabOne(state){ 
//      return state.tabOne
//   },
//   tabTwo(state){  
//      return state.tabTwo
//   },
//   tabThree(state){  
//     return state.tabThree
//   },
//   tabFour(state){  
//     return state.tabFour
//   }
// };
// const mutations = {
//   tabOne(state){ 
//     return state.tabOne
//   },
//   tabTwo(state){  
//       return state.tabTwo
//   },
//   tabThree(state){  
//     return state.tabThree
//   },
//   tabFour(state){  
//     return state.tabFour
//   }
// };
// const actions = {
//   tabOne(state){ 
//     return state.tabOne
//   },
//   tabTwo(state){  
//       return state.tabTwo
//   },
//   tabThree(state){  
//     return state.tabThree
//   },
//   tabFour(state){  
//     return state.tabFour
//   }
// };

// const store = new Vuex.Store({
//     state,
//     getters,
//     mutations,
//     actions
// });