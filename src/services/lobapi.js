import BaseApiClient from '@liveoak/lob-api-client'
import endpoints from '../enums/endpoints'

const getAccessToken = () => {
  return 'abcdef'
}

const baseURL = 'https://api.discogs.com'

const baseApiClient = new BaseApiClient({
  baseURL,
  endpoints,
  requestInterceptor: async (config) => {
    try {
      const accessToken = getAccessToken()
      config.headers['Authorization'] = `Bearer ${accessToken}`; // eslint-disable-line
    } catch (error) {
      if (error.error === 'login_required') {
        // router.push('/login')
      }
    }
    return config
  },
  errorResponseInterceptor: (error) => {
    if (error && error.message.includes('Network Error')) {
      // Catch CORS errors that come from AWS as 500s
      // router.push({ path: '/500', query: { error: error.message } })
    }

    if (!error || !error.response) {
      return Promise.reject(error)
    }

    const { status, config: { skipResponseInterceptor = {} } } = error.response

    switch (status) {
      case 401:
        if (skipResponseInterceptor['401']) break
        // router.push('/login')
        console.log('401 -> go to login page')
        break
      case 404:
        if (skipResponseInterceptor['404']) break
        console.log('404 -> go to 404 page')
        // router.push('/404')
        break
      case 500:
        if (skipResponseInterceptor['500']) break
        console.log('500 -> go to err page')
        console.error(error.response)
        // router.push({ path: '/500', query: { error: error.response.data } })
        break
      default:
    }

    return Promise.reject(error)
  }
})

export default baseApiClient
