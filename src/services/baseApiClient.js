import axios from 'axios'
import Endpoint from './Endpoint'

class BaseApiClient {
  constructor ({
    endpoints, requestInterceptor, errorResponseInterceptor, ...rest
  }) {
    this.endpoints = endpoints
    this.instance = axios.create({
      ...rest
    })

    this.generateApiClient(endpoints)
    this.instance.interceptors.request.use(requestInterceptor)
    this.instance.interceptors.response.use(response => response, errorResponseInterceptor)

    return this
  }

  addHeader (key, value) {
    this.instance.defaults.headers[key] = value
    return this
  }

  addDefaults (key, value) {
    this.instance.defaults[key] = value
    return this
  }

  generateApiClient (endpoints) {
    Object
      .keys(endpoints)
      .forEach((endpoint) => {
        const path = this.endpoints[endpoint]
        this[endpoint] = new Endpoint(this.instance, path)
      })
  }
}

export default BaseApiClient
