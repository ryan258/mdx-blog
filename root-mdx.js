import React from 'react'
import { MDXProvider } from '@mdx-js/react'

const components = {
  // all the logic goes here
}

// wrapRootElement must be the name
export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
