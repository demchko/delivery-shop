import React, { useState, useContext } from 'react';
import { Box, Heading, Text, Collapse, Avatar, Image, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ModalContext } from '../context/ModalContext';
import LoginModal from './Modal';
import AuthContext from '../context/AuthContext';
import avatar from '../image/avatar.png';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const basket = useSelector(state => state.basket.items);
  const { isOpen, openModal } = useContext(ModalContext);
  const currentUser = useContext(AuthContext);

  const menu = [
    { id: 1, title: 'Суші', link: '/sushi' },
    { id: 2, title: 'Десерти', link: '/deserts' },
    { id: 3, title: 'Бургери', link: '/burger' },
    { id: 4, title: 'Піца', link: '/pizza' },
    { id: 5, title: 'Салати', link: '/salad' },
    { id: 6, title: 'Напої', link: '/drinks' },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Box bg="#439A97" color="white" p="5px" display="flex" alignItems="center" justifyContent="space-around">
      <Link to="/">
        <Heading>Delivery</Heading>
      </Link>
      <Box display={{ base: 'none', md: 'flex' }} alignItems="center">
        {menu.map((item) => (
          <Link to={item.link} key={item.id}>
            <Text mr="15px">{item.title}</Text>
          </Link>
        ))}
      </Box>
      <Flex alignItems='center' justifyContent='space-around' >
      <Box display={{ base: 'flex', md: 'none' }} mr='2' onClick={() => openModal()}>
        {
          currentUser
            ? <Box>
              <Text>Hello</Text>
              <Button onClick={e => signOUT(e)} >Sign out</Button>
            </Box>
            : <Box>
              <Avatar name='Avatar' src={avatar} />
            </Box>
        }
      </Box>
      <Box display={{ base: 'flex', md: 'none' }}>
        {
            basket.length
            ? <Flex>
                <Link to='/basket'><Image  w='12' src='https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png' /></Link>
                <Text>{basket.length}</Text>
            </Flex>
            : <Link to='/basket'><Image  w='12' src='https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png' /></Link> 
        }
      </Box>
      </Flex>
      {
        isOpen && <LoginModal />
      }
      <Box display={{ base: 'flex', md: 'none' }} onClick={toggleMenu}>
        <Text fontSize="xl">&#9776;</Text>
      </Box>
      <Collapse in={menuOpen} animateOpacity>
        <Box pb={4} display={{ base: 'block', md: 'none' }}>
          {menu.map((item) => (
            <Link to={item.link} key={item.id}>
              <Text mb={2}>{item.title}</Text>
            </Link>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

export default Header;
