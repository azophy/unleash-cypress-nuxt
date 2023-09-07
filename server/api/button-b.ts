import { isEnabled } from '../../lib/unleash-client'

export default defineEventHandler((event) => {
  const cookies = parseCookies(event)
  const overrides = cookies.OVERRIDE_FEATURE_TOGGLE ?
    JSON.parse(cookies.OVERRIDE_FEATURE_TOGGLE) :
    null ;

  return {
    enabled: isEnabled('ENABLE-BUTTON-B', overrides),
  }
})

