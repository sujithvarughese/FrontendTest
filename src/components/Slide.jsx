import React from 'react'
import { Button, Card, Flex, Image, Text } from '@mantine/core'
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
  addItem
}) => {

  const { hovered, ref } = useHover();

  return (
    <Carousel.Slide>
      <Card>
        <Card.Section ref={ref} p={8}>
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
            <Flex gap={6} align="center">
              <Text
                style={{
                  textDecoration: salePrice ? "line-through" : "",
                  fontWeight: 500,
                  fontSize: 14
              }}
              >{price}
              </Text>
              {salePrice && <Text style={{ color: "red", fontWeight: 700, fontSize: 16 }}>${salePrice}</Text>}
            </Flex>
            <Button variant="gradient" size="xs" onClick={addItem}>Add to Cart</Button>
          </Flex>


        </Card.Section>
      </Card>
    </Carousel.Slide>

  )
}

export default Slide