import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <Layout>
      <Routes />
    </Layout>
  )
}

export default App
