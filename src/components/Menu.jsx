import React, {useState} from 'react'
import {Text, Box, Heading, Grid} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import sushi from '../image/sushi.jpg';
import pizza from '../image/pizza.jpg';
import kebab from '../image/kebab.jpg';
import salad from '../image/salad.jpg';
import drinks from '../image/drinks.jpg';
import burger from '../image/burger.jpg';

const Menu = () => {

    const [menu] = useState([
        {id: 1, title: 'Суші', img: sushi, link: '/sushi'},
        {id: 2, title: 'Кебаб', img: kebab, link: '/kebab'},
        {id: 3, title: 'Бургери', img: burger, link: '/burger'},
        {id: 4, title: 'Піца', img: pizza, link: '/pizza'},
        {id: 5, title: 'Салати', img: salad, link: '/salad'},
        {id: 6, title: 'Напої', img: drinks, link: '/drinks'},
    ])

    return(
        <Box>
            <Heading fontWeight='500' mb='10px' fontSize='26px' >Наше меню</Heading>
            <Grid templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={4} >
                {menu.map(item => (
                   <Link to={item.link} >
                         <Box 
                            borderRadius='15'
                            key={item.id} 
                            height='40vh' 
                            bgImage={item.img}
                            bgSize='cover'
                            pos='relative'
                            transition='400ms'
                            _hover={{ boxShadow: 'dark-lg' }}
                        >
                        <Heading fontStyle='italic' color='white' pos='absolute' bottom='3' left='2' >{item.title}</Heading>
                        </Box>
                   </Link>
                ))}
            </Grid>
        </Box>
    )
}

export default Menu;