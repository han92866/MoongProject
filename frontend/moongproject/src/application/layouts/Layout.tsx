import { observer } from 'mobx-react'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Footer from './Footer'
import Header from './Header'

export default observer(Layout)

function Layout(props: { children: React.ReactNode }) {
  return (
    <Container style={{ margin: 'auto' }}>
      <Header />
      {props.children}
      <Footer />
    </Container>
  )
}
