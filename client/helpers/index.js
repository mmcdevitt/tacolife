export const createLocalCart = () => {
  localStorage.setItem(
    'cart',
    JSON.stringify({
      id: 'guestUserCart',
      cartItems: []
    })
  )
}

export const formatPrice = (price) => {
  return `$${parseFloat(price).toFixed(2)}`
}

export const urlHelper = (slug) => {
  const hostname = window.location.hostname.split('.').slice(1).join('.')
  const url = slug ? slug : 'www'

  return `http://${url}.${hostname}:8080`
}

export const fetchSubdomain = () => {
  return window.location.host.split('.')[0]
}