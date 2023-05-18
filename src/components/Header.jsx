import React, {useState} from 'react';
import {Box, Heading, Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Header = () => {
    const [menu] = useState([
        {id: 1, title: 'Суші', link: '/sushi'},
        {id: 2, title: 'Десерти', link: '/deserts'},
        {id: 3, title: 'Бургери', link: '/burger'},
        {id: 4, title: 'Піца',  link: '/pizza'},
        {id: 5, title: 'Салати',  link: '/salad'},
        {id: 6, title: 'Напої', link: '/drinks'},
    ])

    return (
        <Box bg='#439A97' color='white' p='5px' display='flex' alignItems='center' justifyContent='space-around' >
            <Link to='/' ><Heading>Delivery</Heading></Link>
            <Box display='flex' alignItems='center' >
                {menu.map(item => (
                    <Link to={item.link} >
                        <Text mr='15px' key={item.id} >{item.title}</Text>
                    </Link>
                ))}
            </Box>
        </Box>
    );
};

export default Header;