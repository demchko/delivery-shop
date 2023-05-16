import React, { useContext, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  Input,
  FormLabel,
} from '@chakra-ui/react';
import { ModalContext } from '../context/ModalContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import AuthContext from '../context/AuthContext';

const LoginModal = () => {
  const { isOpen, closeModal } = useContext(ModalContext);
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [passwd, setPasswd] = useState('');
  const [name, setName] = useState('');

  const log = () => {
    setRegister(false);
    setLogin(true);
  }

  const reg = () => {
    setLogin(false);
    setRegister(true);
  }

  const signIn = e => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, passwd)
    .then((user) => {
    }).catch(error => {
      alert("Incorrect login or email");
    });
    closeModal();
  }

  const signUp = e => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, passwd)
      .then((userCredential) => {
      })
      .catch((error) => {
        console.log(error);
      });
  }
  

  return (
    <>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={closeModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Login</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input value={email} onChange={e => setEmail(e.target.value)} type="text" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input value={passwd} onChange={e => setPasswd(e.target.value)} type="password" />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button bg='#439A97' color='white' mr={3} onClick={e => signIn(e)} >
                Login
              </Button>
              <Button variant="ghost" onClick={() => reg() }>
                Register
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal> 
        
      )}
      {
        register && <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Register</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="text" value={name} onChange={e => setName(e.target.value)} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input value={email} onChange={e => setEmail(e.target.value)} type="email" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input value={passwd} onChange={e => setPasswd(e.target.value)} type="password" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button bg='#439A97' color='white' mr={3} onClick={e => signUp(e)} >
              Register
            </Button>
            <Button variant="ghost" onClick={() => log()}>
              Login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      }
    </>
  );
};

export default LoginModal;
