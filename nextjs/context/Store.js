import {saveLocalData, setLocalData} from '@/utils/helpers'
import {createContext, useContext, useState, useEffect} from 'react'

const CartContext = createContext()
const AddToCartContext = createContext()
const UpdateCartQuantityContext = createContext()

export function useCartContext() {
  return useContext(CartContext)
}

export function useAddToCartContext() {
  return useContext(AddToCartContext)
}

export function useUpdateCartQuantityContext() {
  return useContext(UpdateCartQuantityContext)
}

export function CartProvider({children}) {
  const [cart, setCart] = useState([])
  const [checkoutId, setCheckoutId] = useState('')
  const [checkoutUrl, setCheckoutUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setLocalData(setCart, setCheckoutId, setCheckoutUrl)
  }, [])

  useEffect(() => {
    // do this to make sure multiple tabs are always in sync
    const onReceiveMessage = (e) => {
      console.log(e)
      setLocalData(setCart, setCheckoutId, setCheckoutUrl)
    }

    window.addEventListener('storage', onReceiveMessage)
    return () => {
      window.removeEventListener('storage', onReceiveMessage)
    }
  }, [])

  async function addToCart(newItem) {
    setIsLoading(true)
    // empty cart
    if (cart.length === 0) {
      setCart([...cart, newItem])

      console.log('API Call - new checkout', newItem)
      saveLocalData(newItem)
    } else {
      let newCart = [...cart]
      let itemAdded = false
      // loop through all cart items to check if variant
      // already exists and update quantity
      newCart.map((item) => {
        if (item.id === newItem.id) {
          item.variantQuantity += newItem.variantQuantity
          itemAdded = true
        }
      })

      let newCartWithItem = [...newCart]
      if (itemAdded) {
      } else {
        // if its a new item than add it to the end
        newCartWithItem = [...newCart, newItem]
      }

      setCart(newCartWithItem)
      console.log('API Call - update checkout', newCartWithItem)
      saveLocalData(newCartWithItem)
    }
    setIsLoading(false)
  }

  async function updateCartItemQuantity(id, quantity) {
    setIsLoading(true)
    let newQuantity = Math.floor(quantity)
    if (quantity === '') {
      newQuantity = ''
    }
    let newCart = [...cart]
    newCart.forEach((item) => {
      if (item.variantId === id) {
        item.variantQuantity = newQuantity
      }
    })

    // take out zeroes items
    newCart = newCart.filter((i) => i.variantQuantity !== 0)
    setCart(newCart)

    saveLocalData(newCart, checkoutId, checkoutUrl)
    setIsLoading(false)
  }

  return (
    <CartContext.Provider value={[cart, checkoutUrl, isLoading]}>
      <AddToCartContext.Provider value={addToCart}>
        <UpdateCartQuantityContext.Provider value={updateCartItemQuantity}>
          {children}
        </UpdateCartQuantityContext.Provider>
      </AddToCartContext.Provider>
    </CartContext.Provider>
  )
}
