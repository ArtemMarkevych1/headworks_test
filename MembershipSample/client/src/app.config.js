export default {
  url: '{yourOktaDomain}',
  issuer: '{yourOktaOrgUrl}/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '{yourClientID}'
}