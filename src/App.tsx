import { Container, Flex } from '@chakra-ui/react'
import './App.css'
import Cart from './components/Cart'
import Details from './components/Details'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar />
      <Container maxW="container.xl" p={0} >
        <Flex h={{ base: "auto", md: "120vh" }} py={[0, 10, 20]} direction={{ base: "column-reverse", md: "row" }}>
          <Details />
          <Cart />
        </Flex>
      </Container>
    </>
  )
}

export default App
