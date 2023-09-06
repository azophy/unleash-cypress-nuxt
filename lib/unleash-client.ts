import { UnleashClient } from 'unleash-proxy-client'

// this is just for convinience. For actual production website, please use Nuxt's Runtime Config: https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
export const unleash =  new UnleashClient({
  url: 'http://localhost:4242/api/frontend',
  clientKey: 'default:development.unleash-insecure-frontend-api-token',
  refreshInterval: 3, // in seconds
  appName: 'dummy-frontend',
})

unleash.start()

export const isEnabled = (label) => {
  if (unleash) {
    return unleash.isEnabled(label)
  }

  // default return
  return false
}

