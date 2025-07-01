

// import { createStore } from 'vuex';

// export default createStore({
//   state: {
//     items: []
//   },
//   mutations: {
//     addItem(state, item) {
//       state.items.push(item);
//     },
//     removeItem(state, index) {
//       state.items.splice(index, 1);
//     }
//   },
//   actions: {
//     addItem({ commit }, item) {
//       commit('addItem', item);
//     },
//     removeItem({ commit }, index) {
//       commit('removeItem', index);
//     }
//   },
//   getters: {
//     items(state) {
//       return state.items;
//     }
//   }
// });


// Task--- 2
import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      userName: 'Soundharya !'
    };
  },
  mutations: {
    setUserName(state, name) {
      state.userName = name;
    }
  },
  actions: {
    async fetchUserName({ commit }) {
      try {
        const response = await fetch('/user.json');
        const data = await response.json();
        console.log('user fetch:',data);
        commit('setUserName', data.username);
      } catch (error) {
        console.error('Failed to fetch username:', error);
      }
    }
  }
});


// import { createStore } from 'vuex';

// const store = createStore({
//   state() {
//     return {
//       theme: 'light' 
//     };
//   },
//   mutations: {
//     toggleTheme(state) {
//       state.theme = state.theme === 'light' ? 'dark' : 'light';
//     }
//   },
//   getters: {
//     currentTheme(state) {
//       return state.theme;
//     }
//   }
// });
// export default store;
