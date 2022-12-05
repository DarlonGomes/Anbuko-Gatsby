import * as React from "react";
import { Text } from "../../components/atoms";
import { NavBar } from "../../components/molecules";
import type { HeadFC, PageProps } from "gatsby";
const NewsPage: React.FC<PageProps> = () => {

  const text = 'Here will be displayed all news'
  return (
   <>
    <NavBar />
    <Text>{text}</Text>
   </>
  )
}

export default NewsPage

export const Head: HeadFC = () => <title>Anbuko</title>
