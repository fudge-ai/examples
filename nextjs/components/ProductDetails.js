import {useState} from 'react'
import ProductInfo from '@/components/ProductInfo'
import ProductForm from '@/components/ProductForm'
import {getProductImage} from './ProductCard'

function ProductDetails({productData}) {
  const [variant, setVariant] = useState(productData.variants[0])

  return (
    <div className="grid grid-cols-2 space-x-10">
      <div
        className="col-span-1 bg-cover bg-center"
        style={{backgroundImage: `url('${getProductImage(productData, variant)}')`}}
      />
      <div className="flex flex-col justify-between space-y-4 col-span-1">
        <div>
          <ProductInfo title={productData.title} description={productData.description} price={variant.price} />
          <ProductForm
            title={productData.title}
            handle={productData.handle}
            variants={productData.variants}
            mainImg={getProductImage(productData, variant)}
            variant={variant}
            setVariant={setVariant}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
