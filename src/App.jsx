import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { Carousel } from '@mantine/carousel'
import products from "../products.json"
import Slide from './components/Slide.jsx'
import {  Container, Title } from '@mantine/core'

const App = () => {
  console.log("running")
  console.log(products)
  return (
    <Container>
      <Title style={{ textAlign: "center" }}>You May also Like</Title>
      <Carousel
        withIndicators
        slideSize={{ base: "100%", xs: "50%", md: "33.333333%" }}
        slidesToScroll={{ base: 1, xs: 2, md: 3 }}
        slideGap="md"
        align="start"
      >
        {products.map(product =>
          <Slide key={product.sku} {...product}/>
        )}
      </Carousel>
    </Container>

  )
}

export default App
