import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { Carousel } from '@mantine/carousel'
import products from "../products.json"
import Slide from './components/Slide.jsx'
import { Container, Flex, Title } from '@mantine/core'
const App = () => {
  console.log("running")
  console.log(products)
  return (
    <Flex p={56}>
      <Title style={{ textAlign: "center" }}>You May also Like</Title>
      <Carousel withIndicators>
        <Flex gap={16}>
          {products.map(product => <Slide key={product.sku} {...product}/>)}

        </Flex>
      </Carousel>
    </Flex>

  )
}

export default App
