import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { NavBar } from "../components/molecules"

const IndexPage: React.FC<PageProps> = () => {
  return (
   <>
    <NavBar/>
   </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Anbuko</title>
