import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Questions from './Questions'


import Layout from './Layout'


function App() {
  return (
    <BrowserRouter>
                  <Layout>
                          <Switch>
                                 <Route exact path="/" component={Home} />
                                 <Route exact path="/questions" component={Questions} />
                          </Switch>  
                  </Layout>
    </BrowserRouter>
  )
}

export default App;