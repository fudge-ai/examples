import {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {useCartContext, useAddToCartContext} from '@/context/Store'
import {useMutation} from 'react-query'
import {toast} from 'react-toastify'
import clsx from 'clsx'

function ProductForm({title, handle, variants, variant, setVariant, mainImg}) {
  const [quantity, setQuantity] = useState(1)
  const isLoading = useCartContext()[2]
  // const addToCart = useAddToCartContext()

  const atcBtnStyle = isLoading
    ? `pt-3 pb-2 bg-palette-primary text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex 
                      justify-center items-baseline  hover:bg-palette-dark opacity-25 cursor-none`
    : `pt-3 pb-2 bg-palette-primary text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex 
                      justify-center items-baseline  hover:bg-palette-dark`

  function handleColorChange(e) {
    const selectedVariant = variants.filter((v) => v.id === e).pop()
    setVariant(selectedVariant)
  }

  function updateQuantity(e) {
    if (e === '') {
      setQuantity('')
    } else {
      setQuantity(Math.floor(e))
    }
  }

  const addToCart = useMutation((newItem) => {
    console.log('newItem', newItem)
    return fetch('/api/cart', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({item: newItem}),
    }).then((res) => {
      if (res.ok) return res.json()
      else toast.error(res.statusText, {position: 'bottom-right'})
    })
  })

  async function handleAddToCartOld() {
    const varId = variant.id
    // update store context
    if (quantity !== '') {
      addToCart({
        productTitle: title,
        productHandle: handle,
        productImage: mainImg,
        variantId: varId,
        variantPrice: variant.price,
        variantTitle: variant.title,
        variantQuantity: quantity,
      })
    }
  }

  return (
    <div className="w-full">
      <div className="flex justify-start space-x-2 w-full">
        <div className="flex flex-col items-start space-y-1 flex-grow-0">
          <label className="text-gray-500 text-base">Qty.</label>
          <input
            type="number"
            inputMode="numeric"
            id="quantity"
            name="quantity"
            min="1"
            step="1"
            value={quantity}
            onChange={(e) => updateQuantity(e.target.value)}
            className="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
          />
        </div>
        <div className="flex flex-col items-start space-y-1 flex-grow">
          <label className="text-gray-500 text-base">Color</label>
          <select
            id="color-selector"
            name="color-selector"
            onChange={(event) => handleColorChange(event.target.value)}
            value={variant.id}
            className="form-select border border-gray-300 rounded-sm w-full text-gray-900 focus:border-palette-light focus:ring-palette-light"
          >
            {variants.map((item) => (
              <option id={item.id} key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        className={clsx(atcBtnStyle, addToCart.isLoading && 'opacity-50')}
        aria-label="cart-button"
        onClick={() =>
          addToCart.mutate({
            product: {title, handle},
            variant: {...variant, quantity},
          })
        }
      >
        Add To Cart
        <FontAwesomeIcon icon={faShoppingCart} className="w-5 ml-2" />
      </button>
    </div>
  )
}

export default ProductForm
