import React from 'react'
import SingleCard from '../components/SingleCard'
import products from '../data/product'

const ProductsList = () => {
  return (
    <div className='container d-flex justify-content-center flex-wrap align-items-center mt-5 gap-5'>
      {products.map((item: any, i: number) => (
        <SingleCard
          id={item.id}
          img={item.image}
          title={item.title}
          price={item.price}
          descr={item.description}
        />
      ))}
    </div>
  )
}

export default ProductsList