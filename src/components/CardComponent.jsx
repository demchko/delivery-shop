import { Box, Input, Text, useStatStyles, Grid, Card, CardBody, Stack, Heading, Flex, Image, Button } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../store/basketSlice";

const CardComponent = ({data}) => {

    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const filteredData = useMemo(() => {
        return data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
    }, [data, search]);

    const addToBasket = (e, item) => {
        e.preventDefault();
        dispatch(addItem(item));
    }

    return(
        <Box>
            <Input  
                color='#439A97'
                placeholder='пошук...'
                value={search}
                onChange={e => setSearch(e.target.value)}
                _focus={{ boxShadow: "none", border:'none' }}
                borderBottomWidth="1px"
                borderBottomColor="#439A97"
            />
           <Grid templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6} >
                {
                    filteredData.map(item => (
                        <Link to={`/product/${item.id}`} >
                            <Card mt='7' >
                                <CardBody textAlign='center' >
                                    <Image src={item.img} objectFit='contain' />
                                    <Stack>
                                        <Heading fontWeight='200' >{item.title}</Heading>
                                        <Flex justifyContent='space-between' alignItems='center' >
                                            <Text fontWeight='500' >{item.price}грн</Text>
                                            <Button bg='#439A97' color='white' borderRadius='50%' onClick={e => addToBasket(e, item)} >+</Button>
                                        </Flex>
                                    </Stack>
                                </CardBody>
                            </Card>
                        </Link>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default CardComponent;