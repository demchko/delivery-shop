import { Box, Heading, Flex, Image, Button, Text} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearBasket, decreaseQuantity, increaseQuantity } from "../store/basketSlice";
import { useNavigate } from "react-router";
import AuthContext from "../context/AuthContext";
import { ModalContext } from "../context/ModalContext";

const BasketPage = () => {

    const dispatch = useDispatch();
    const basket = useSelector(state => state.basket.items);
    const total = useSelector(state => state.basket.total);
    const currentUser = useContext(AuthContext);
    const {openModal} = useContext(ModalContext);
    
    const pay = () => {
        currentUser ? alert('Оплата') : openModal();
    }

    return(
       <Box p='15' mb='10' >
        {
            basket.length
            ? <Box>
                {
                    basket.map(item => (
                        <Flex justifyContent='space-around' alignItems='center' mt='2' >
                            <Image w='12%' src={item.img} />
                            <Heading fontWeight='300' ml='2' >{item.title}</Heading>
                            <Flex alignItems='center' >
                                <Button bg='#439A97' borderRadius='50' color='white' fontWeight='600' onClick={() => dispatch(decreaseQuantity(item.id))} >-</Button>
                                <Text mr='1' ml='1' >{item.quantity}</Text>
                                <Button bg='#439A97'  borderRadius='50' color='white' fontWeight='600' onClick={() => dispatch(increaseQuantity(item.id))}  >+</Button>
                            </Flex>
                            <Heading color='#439A97' fontWeight='400' >{item.price*item.quantity}</Heading>
                        </Flex>
                    ))
                }
                <Flex alignItems='center' mt='10' justifyContent='space-around' >
                        <Heading>{total}</Heading>
                        <Button  bg='#439A97' color='white' borderRadius='20' onClick={() => pay()} >Оплатити</Button>
                        <Button bg='#ad2a40' color='white' borderRadius='20' onClick={() => dispatch(clearBasket())} >Очистити</Button>
                    </Flex>
            </Box>
            : <Text textAlign='center' >Корзина порожня</Text>
        }
       </Box>
    )
}

export default BasketPage;