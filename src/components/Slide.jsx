import React from 'react'
import { Box, Button, Card, Flex, Image, Text, Title } from '@mantine/core'

const Slide = ({
  productName,
  imageMain,
  imageAlt,
  category,
  price,
  salePrice,
  priceCurrency
}) => {
  return (
    <Card>
      <Card.Section>
        <Image src={imageMain} alt="image-main" radius={8}/>
        <Text style={{ fontSize: 12, color: "gray" }}>{category}</Text>
        <Text style={{ fontWeight: 700}}>{productName}</Text>

        <Flex justify="space-between">
          <Flex>
            <Text style={{ textDecoration: salePrice ? "line-through" : "" }}>{price}</Text>
            {salePrice && <Text>${salePrice}</Text>}
          </Flex>

          <Button>Buy Now</Button>
        </Flex>

      </Card.Section>
    </Card>
  )
}

export default Slide