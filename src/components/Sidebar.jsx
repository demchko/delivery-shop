import React, { useContext } from 'react';
import { Box, Heading, Text, Avatar, Button, useMediaQuery } from '@chakra-ui/react';
import avatar from '../image/avatar.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ModalContext } from '../context/ModalContext';
import LoginModal from './Modal';
import AuthContext from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Sidebar = () => {
  const [isLargerThanSm] = useMediaQuery("(min-width: 30em)");

  const basket = useSelector(state => state.basket.items);
  const { isOpen, openModal } = useContext(ModalContext);
  const currentUser = useContext(AuthContext);

  const signOUT = e => {
    e.stopPropagation();
    signOut(auth);
  }

  if (!isLargerThanSm) {
    return null; // Повертаємо null, якщо екран менший за задану ширину
  }

  return (
    <Box textAlign='center' w='17%' pt='10px' >
      <Heading fontSize='26px' >Chop chop</Heading>
      <Text mt='-5px' >Доставка іжі</Text>
      <Text mt='10px' >+380 (50) 82 80 359</Text>
      <Box bg='#dee0e0' mt='15px' p='15px' >
        {
          basket.length
            ? <Link to='/basket'><Text>К-сть замовлень {basket.length}</Text></Link>
            : <Text>Ваше замовлення пусте</Text>
        }
      </Box>
      <Box mt='30px' onClick={() => openModal()}>
        {
          currentUser
            ? <Box>
              <Text>Hello {name}</Text>
              <Button onClick={e => signOUT(e)} >Sign out</Button>
            </Box>
            : <Box>
              <Avatar name='Avatar' src={avatar} />
              <Text>Вхід/Реєстрація</Text>
            </Box>
        }
      </Box>
      {
        isOpen && <LoginModal />
      }
    </Box>
  );
};

export default Sidebar;
