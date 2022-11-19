import 'bootstrap/dist/css/bootstrap.min.css'
import { observer } from 'mobx-react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import styles from './layout.module.css'

export default observer(Header)

function Header() {
  return (
    <>
      <div className={styles.heard}>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <h3
                onClick={() => window.location.replace(`/`)}
                style={{ fontWeight: 'bold' }}
              >
                MoongProject🧡
              </h3>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/board/">게시판</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  )
}
