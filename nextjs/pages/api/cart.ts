import {getProductImage} from '@/components/ProductCard'
import type {NextApiHandler, NextApiRequest, NextApiResponse} from 'next'
import {products} from 'pages'
import {v4} from 'uuid'
import {withFudge} from '@fudge-ai/nextjs'

const fetchCart: NextApiHandler = (req, res) => {
  const cart = getLatestCart()

  // Check the 'GET /cart' log in the Fudge dashboard and see
  // this log pop up there
  console.log('fetching cart', cart)

  res.status(200).json(cart)
}

// This is a super contrived error, but we hope it demonstrates
// just how useful Fudge can be!
const updateCart: NextApiHandler = (req, res) => {
  const cart = getLatestCart()

  console.warn('Cart is in locked state')
  console.log('cart', cart)

  cart.addItem({})

  res.status(200).json(cart)
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await sleep(500)

  if (req.method === 'POST') {
    await updateCart(req, res)
  } else if (req.method === 'GET') {
    await fetchCart(req, res)
  } else {
    throw new Error('Unsupported method')
  }
}

/**
 * 👋 Fudge Setup
 * Step 3 - Wrap each Next API Route (pages/api/*) with the `withFudge` middleware.
 * This adds tracking to API routes.
 */
export default withFudge(handler)

// These utilities are just to help with the demo
const getLatestCart = () => {
  return {
    id: v4(),
    locked: true,
    status: 'AWAITING_PAYMENT',
    items: [getCartItem(products[1])],
    addItem: undefined as any,
  }
}

const getCartItem = (product) => {
  const item = {
    ...product,
    variant: product.variants[0],
    quantity: 1,
    image: getProductImage(product),
  }

  delete item.variants

  return item
}

const sleep = (timeout: number) => new Promise((resolve) => setTimeout(resolve, timeout))
