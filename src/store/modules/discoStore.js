const { DiscogsClient } = require('../../services/discogsClient')
const dc = new DiscogsClient()

const state = {
  userCollection: { loading: false, error: null, data: null },
  record: { loading: false, error: null, data: null }
}

const mutations = {
  updateUserCollection (curState, coll) {
    curState.userCollection = coll
  },
  updateRecord (curState, record) {
    curState.record = record
  }
}

const actions = {
  async updateRecord ({ commit }) {
    commit('updateRecord', { loading: true })
    try {
      const stuff = await dc.getStuff()
      console.log(`here's my client = ${JSON.stringify(stuff)}`)
      commit('updateRecord', { loading: false, data: stuff })
    } catch (error) {
      console.error(error)
      commit('updateRecord', { loading: false, error })
    }
  }
}

export default {
  /* we're using namespaces to avoid accidental cross refences of funcitons or duplication
  as a reminder state is always namespaced actions and mutations are not
  */
  namespaced: true,
  // we can use vuemc (model and collections) to later define the actual objects https://vuemc.io/#introduction
  state,
  mutations,
  actions
}
