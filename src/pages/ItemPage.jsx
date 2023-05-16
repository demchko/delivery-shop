import { Box, Heading, Flex, Image, Button, Text} from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router";
import { addItem } from "../store/basketSlice";
import { useDispatch } from "react-redux";


const ItemPage = ({data}) => {
    const {id} = useParams();
    const flatData = data.flat();
    const product = flatData.find(product => product.id === parseInt(id));
    const dispatch = useDispatch();

    return(
       <Box>
            <Flex w='90%' ml='10' justifyContent='space-between' mt='10' >
                <Image w='50%' src={product.img} borderRadius='12' />
                <Box ml='10' >
                    <Text color='#7a7d82' mb='5' >{product.gr}гр.</Text>
                    <Flex justifyContent='space-between' alignItems='center' >
                        <Heading fontWeight='350' >{product.title}</Heading>
                        <Button bg='#439A97' color='white' borderRadius='23' onClick={() => dispatch(addItem(product))} >{product.price}грн</Button>
                    </Flex>
                    <Text textAlign='left' lineHeight='1' color='#5d5e5e' >{product.descr}</Text>
                    <Text mt='4' >Наші кур'єри - професіонали своєї справи та зроблять все можливе, щоб ваше замовлення було доставлено вчасно та безпечно. Ми використовуємо найкращі упакування для того, щоб ваші продукти залишилися свіжими та смачними протягом доставки.</Text>
                </Box>
            </Flex>
       </Box>
    )
}

export default ItemPage;