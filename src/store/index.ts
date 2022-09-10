import createPersistedState from "vuex-persistedstate";
import { createStore } from 'vuex'

export default createStore({
  state: {
    news:0,
    data:[],
    title:'',
    postSelected:[],
  },
  getters: {
  },
  mutations: {
    addTen :(state ,nu)=>{
      state.news += nu
    },
    getData: state=>{
      const url :string =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5f8ce8e05e814e47822d05da4e46adf7`
      fetch(url)
      .then(resp=>{if(resp.ok){return resp.json()}}).
      then(data =>{
        state.data=data.articles;
      })

    },
    getPost:(state,w)=>{
      state.postSelected=w
    }
    
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]

})
