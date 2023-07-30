



import Link from 'next/link'
import React from 'react'
import AddProducts from './components/AddProducts';

const page = () => {
  return (
    <div>
      <h1>Products</h1>
      <div>
        <Link href="/Products/AddProducts">
          AddProducts
        </Link>
      </div>
    </div>
  )
}

export default page