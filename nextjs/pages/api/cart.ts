import {getProductImage} from '@/components/ProductCard'
import type {NextApiRequest, NextApiResponse} from 'next'
import {products} from 'pages'
import {v4} from 'uuid'
import {withFudge} from '@fudge-ai/nextjs'

const sleep = (timeout: number) => new Promise((resolve) => setTimeout(resolve, timeout))

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await sleep(500)

  if (req.method === 'POST') {
    console.error('Trying to add item to a locked cart')

    throw new Error('Internal server error')
  } else if (req.method === 'GET') {
    const body = {
      id: v4(),
      locked: true,
      status: 'AWAITING_PAYMENT',
      items: [getCartItem(products[1])],
    }

    console.log('fetching cart', body)

    res.status(200).json(body)
  } else {
    throw new Error('Unsupported method')
  }
}

export default withFudge(handler)

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
