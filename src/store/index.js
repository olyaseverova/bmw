import { createStore } from 'vuex'

export default createStore({
  actions: {
    async fetchCharacters(ctx) { ctx.commit('updateCharacters', await (await fetch("characters.json")).json()) },
  },
  mutations: {
    updateCharacters(state, data) { state.characters = data },
  },
  state: {
    characters: []
  },
})
