const axios = require('axios')

const baseURL = 'https://fh1jlggpf0.execute-api.us-east-1.amazonaws.com/Prod/hello'

export default class RamenClient {
  constructor () {
    // eslint-disable-next-line new-cap
    this.client = new axios.create({
      baseURL
    })
  }

  async getStatus () {
    const response = await this.client.get()
    return response.data
  };
}
