import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const ProductPage: React.FC<PageProps> = () => {
  return (
   <>
    <h3>Product</h3>
   </>
  )
}

export default ProductPage

export const Head: HeadFC = () => <title>Anbuko</title>
