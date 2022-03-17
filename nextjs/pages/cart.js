import SEO from '@/components/SEO'
import PageTitle from '@/components/PageTitle'
import CartTable from '@/components/CartTable'
import CheckOutButton from '@/components/CheckOutButton'
import {useQuery} from 'react-query'

function CartPage() {
  const pageTitle = `Cart | ${process.env.siteTitle}`
  // const [cart, checkoutUrl] = useCartContext()

  const {data: cart} = useQuery('cart', () => fetch('/api/cart').then((r) => r.json()))

  return (
    <div className="container mx-auto mb-20 min-h-screen">
      <SEO title={pageTitle} />
      <PageTitle text="Your Cart" />
      <CartTable cart={cart} />
      <div className="max-w-sm mx-auto space-y-4 px-2">
        <CheckOutButton webUrl={''} />
      </div>
    </div>
  )
}

export default CartPage
