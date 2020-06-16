import LOBAuthClient from 'lob-auth'; // eslint-disable-line
import { env } from '@liveoak/lob-vue-utils'

const scope = [
  'lob.users.me',
  'lob.loans.read'
]

const {
  LOAN_SERVICING_IDP_API_URL: domain,
  LOAN_SERVICING_IDP_CLIENT_ID: clientId,
  LOAN_SERVICING_IDP_REDIRECT_URI: redirectUri,
  LOAN_SERVICING_IDP_ISSUER: issuer,
  LOAN_SERVICING_IDP_TOKEN_STORAGE: tokenStorage,
  LOAN_SERVICING_IDP_POST_LOGOUT_REDIRECT_URL: postLogoutRedirectUrl
} = env

export default new LOBAuthClient({
  domain,
  clientId,
  issuer,
  redirectUri,
  tokenStorage,
  postLogoutRedirectUrl,
  scope
})
