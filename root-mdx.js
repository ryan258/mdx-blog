import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import {
  Headings,
  Code,
  Blockquote,
  Example,
  PrismSetup,
} from './src/components/Complete'

//! vv move this to own file - ./src/components/Complete
// const myH2 = props => {
//   // console.log(props)
//   if (props.title) {
//     return (
//       <h2 {...props} style={{ fontSize: '4rem', color: 'red' }}>
//         {props.children}
//       </h2>
//     )
//   }
//   return (
//     <h2 {...props} className="code">
//       {props.children}
//     </h2>
//   )
// }

const Testing = ({ children }) => {
  return <div className="code">{children}</div>
}

const components = {
  // all the logic goes here
  //! vv this below will make all h2's these spans vv
  // h2: props => {
  //   console.log(props)
  //   return <h2 {...props}>{props.children}</h2>
  // },
  //! vv we'll seperate out the component into it's own fn above
  // h2: myH2,
  //! vv we'll access the component that now resides in a different file
  h2: Headings.myH2,
  h4: Headings.myH4,
  // inlineCode: Testing,
  inlineCode: Code,
  blockquote: Blockquote,
  pre: PrismSetup,
}

// wrapRootElement must be the name
export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
