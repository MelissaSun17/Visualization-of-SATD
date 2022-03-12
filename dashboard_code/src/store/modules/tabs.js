const tabs = {
  state: {
    tabOne: 0,
    tabTwo: 0,
    tabThree: 0,
    tabFour: 0
  },
  mutations: {
    tab_One: (state, tabOne) => { 
      state.tabOne = tabOne
      // storeLocalStore(state)
    },
    tab_Two: (state, tabTwo) => {  
      state.tabTwo = tabTwo
      // storeLocalStore(state)
    },
    tab_Three: (state, tabThree) => {  
      state.tabThree = tabThree
      // storeLocalStore(state)
    },
    tab_Four: (state, tabFour) => {  
      state.tabFour = tabFour
      // storeLocalStore(state)
    }
    // ADD_ERROR_LOG: (state, log) => {
    //   state.logs.push(log)
    // }
  },
  actions: {
    changeTabOne({ commit }, tabOne){ 
      commit('tab_One', tabOne)
    },
    changeTabTwo({ commit }, tabTwo){ 
      commit('tab_Two', tabTwo)
    },
    changeTabThree({ commit }, tabThree){ 
      commit('tab_Three', tabThree)
    },
    changeTabFour({ commit }, tabFour){ 
      commit('tab_Four', tabFour)
    }
    // addErrorLog({ commit }, log) {
    //   commit('ADD_ERROR_LOG', log)
    // }
  }
}

export default tabs
