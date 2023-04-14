let env = 'production'

if (document.location.hostname.indexOf("localhost") !== -1) {
  env = 'development'
}

export default env