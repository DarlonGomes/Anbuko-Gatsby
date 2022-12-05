import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const NewsPage: React.FC<PageProps> = () => {
  return (
   <>
    <h3>News</h3>
   </>
  )
}

export default NewsPage

export const Head: HeadFC = () => <title>Anbuko</title>
