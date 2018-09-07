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