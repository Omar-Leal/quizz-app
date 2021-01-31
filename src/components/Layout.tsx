import React from 'react'

import Header from './Header'

type Props = {
  children?: JSX.Element | JSX.Element[];
}

function Layout (props: Props)  {
  return (
    <React.Fragment>
      <Header />
     {props.children}
    </React.Fragment>  
  )
}

export default Layout;