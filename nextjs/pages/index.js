import StoreHeading from '@/components/StoreHeading'
import ProductListings from '@/components/ProductListings'

export const products = [
  {
    title: 'Nike Air Zoom Pegasus 38',
    handle: 'nike-pegasus-38',
    description: `The road is your runway. Get ready to take flight in the workhorse with wings. Back with extra bounce that's perfect for hitting the tarmac.`,
    variants: [
      {id: 'green', title: 'Green', price: 159},
      {id: 'white', title: 'White', price: 159},
      {id: 'hyper-violet', title: 'Hyper Violet', price: 179},
    ],
  },
  {
    title: "Nike Blazer Mid '77 Vintage",
    handle: 'nike-blazer',
    description: `In the '70s, Nike was the new shoe on the block. So new in fact, we were still breaking into the basketball scene and testing prototypes on the feet of our local team.`,
    variants: [
      {id: 'black', title: 'Black', price: 199},
      {id: 'white', title: 'White', price: 199},
    ],
  },
]

function IndexPage({products}) {
  return (
    <div className="mx-auto max-w-6xl">
      <StoreHeading />
      <ProductListings products={products} />
    </div>
  )
}

export const getServerSideProps = async () => {
  return {
    props: {
      products,
    },
  }
}

export default IndexPage
