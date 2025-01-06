import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { Carousel } from '@mantine/carousel'
import products from "../products.json"
import Slide from './components/Slide.jsx'
import { ActionIcon, Box, Container, Flex, Indicator, Title } from '@mantine/core'
import { IoCartOutline, IoRemoveCircleOutline } from "react-icons/io5";

import { useState } from 'react'

const App = () => {

  const [numItemsCart, setNumItemsCart] = useState(0)
  return (
    <Box>
      <Flex justify="flex-end" p={36} gap={16}>
        {numItemsCart > 0 && <ActionIcon color="red" onClick={() => setNumItemsCart(numItemsCart - 1)}><IoRemoveCircleOutline /></ActionIcon>}
        <Indicator label={numItemsCart} size={24}>
          <IoCartOutline size={36}/>
        </Indicator>
      </Flex>
      <Container py={16}>
        <Title style={{ textAlign: "center" }}>You May also Like</Title>
        <Carousel
          withIndicators
          slideSize={{ base: "100%", xs: "50%", md: "33.333333%" }}
          slidesToScroll={{ base: 1, xs: 2, md: 3 }}
          slideGap="md"
          align="start"
        >
          {products.map(product =>
            <Slide key={product.sku} {...product} addItem={() => setNumItemsCart(numItemsCart + 1)}/>
          )}
        </Carousel>
      </Container>
    </Box>


  )
}

export default App
