import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { NavBar } from "../../components/molecules";
import { Text } from "../../components/atoms";

const ProductPage: React.FC<PageProps> = () => {
  return (
   <>
   <NavBar/>
    <Text>Here will be displayed the product</Text>
   </>
  )
}

export default ProductPage

export const Head: HeadFC = () => <title>Anbuko</title>
