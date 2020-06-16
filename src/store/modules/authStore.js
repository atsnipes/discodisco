import axios from 'axios'

const createAccessTokenClient = () => {
  const instance = axios.create({
    baseURL: 'https://api.discogs.com/oauth/request_token',
    timeout: 1000,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/x-www-form-urlencoded',
      oauth_nonce: Date.now().toString(),
      oauth_consumer_key: 'PoFRtgBAtLhXfektnFgX',
      oauth_signature: 'aoFyFxOUBFJmMnyuHLRLYvZthIaqmBpR',
      oauth_signature_method: 'PLAINTEXT',
      oauth_timestamp: Date.now().toString(),
      oauth_callback: 'http://localhost:8080/',
      'User-Agent': 'AaronsDiscogsClient'
    }
  })

  return instance
}

const state = {
  token: { loading: false, error: null, data: null }
}

const mutations = {
  updateToken (curState, token) {
    curState.token = token
  }
}

const actions = {
  async getToken ({ commit }) {
    commit('updateToken', { loading: true })
    try {
      const client = createAccessTokenClient()
      console.log(`here's my client = ${JSON.stringify(client)}`)
      const response = await client.get('/')
      console.log(`get access token = ${JSON.stringify(response)}`)
      commit('updateToken', { loading: false, data: response.data.data })
    } catch (error) {
      console.error(error)
      commit('updateToken', { loading: false, error })
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
