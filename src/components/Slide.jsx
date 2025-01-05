import React from 'react'
import { Box, Button, Card, Flex, Image, Text, Title } from '@mantine/core'
import backupImageMain from "../assets/images/image_main.jpg"
import backupImageAlt from "../assets/images/image_alt.jpg"
import { useHover } from '@mantine/hooks'
import { Carousel } from '@mantine/carousel'
const Slide = ({
  productName,
  imageMain,
  imageAlt,
  category,
  price,
  salePrice,
  priceCurrency
}) => {

  const { hovered, ref } = useHover();


  return (
    <Carousel.Slide>
      <Card>
        <Card.Section ref={ref}>
          <Image
            src={hovered ? imageAlt : imageMain}
            fallbackSrc={hovered ? backupImageAlt : backupImageMain}
            alt="image-main"
            radius={8}
          />
        </Card.Section>
        <Card.Section>

          <Text style={{ fontSize: 12, color: "gray" }}>{category}</Text>
          <Text style={{ fontWeight: 700, fontSize: 14}}>{productName}</Text>


          <Flex justify="space-around" align="center" py={12}>
            <Flex gap={6}>
              <Text style={{ textDecoration: salePrice ? "line-through" : "" }}>{price}</Text>
              {salePrice && <Text style={{ color: "red" }}>${salePrice}</Text>}
            </Flex>
            <Button variant="gradient">Buy Now</Button>
          </Flex>


        </Card.Section>
      </Card>
    </Carousel.Slide>

  )
}

export default Slide