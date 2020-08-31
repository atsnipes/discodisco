const RamenClient = require('../../services/ramenClient').default
const rc = new RamenClient()

const state = {
  hasSadText: { loading: false, error: null, data: null },
  sadText: { loading: false, error: null, data: null }
}

const mutations = {
  updateSadTextStatus (curState, hasSadText) {
    curState.hasSadText = hasSadText
  },
  updateSadText (curState, sadText) {
    curState.sadText = sadText
  }
}

const actions = {
  async updateOpenedStatus ({ commit }) {
    commit('updateSadTextStatus', { loading: true })
    commit('updateSadText', { loading: true })
    try {
      // const stuff = await dc.getStuff()
      const response = await rc.getStatus()
      commit('updateSadTextStatus', { loading: false, data: response.hasSadText })
      commit('updateSadText', { loading: false, data: response.sadText })
    } catch (error) {
      console.error(error)
      commit('updateSadTextStatus', { loading: false, error })
      commit('updateSadText', { loading: false, error })
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
