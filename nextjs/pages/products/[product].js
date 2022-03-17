import ProductSection from '@/components/ProductSection'
import {products} from 'pages'

function ProductPage({productData}) {
  return (
    <div className="min-h-screen py-12 sm:pt-20">
      <ProductSection productData={productData} />
    </div>
  )
}

export async function getStaticPaths() {
  const productSlugs = products.map((product) => product.handle)

  const paths = productSlugs.map((product) => {
    return {
      params: {product},
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params}) {
  const productData = products.find((product) => product.handle === params.product)

  return {
    props: {
      productData,
    },
  }
}

export default ProductPage
