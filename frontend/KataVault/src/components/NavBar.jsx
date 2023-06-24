import React from 'react';
import { account } from '../appwrite/appwriteConfig';
import { Link, useNavigate } from 'react-router-dom';
import { 
    Flex, 
    Heading, 
    Spacer,
    Box,
    Text,
    Button,
    HStack,
    useDisclosure,
    Input
} from '@chakra-ui/react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'

 function NavBar() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
        await account.deleteSession("current")
        navigate("/")
    } catch (error) {
        console.log(error)
    }
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <Flex alignItems='center' p='10px'>
       <Heading>Student Portal</Heading>
       <Spacer/> 
       <HStack spacing="20px">
       <Box bg="gray.200" p="10px">M</Box>
       <Text>welcome</Text>
       <Button colorScheme='blue' onClick={handleLogout}>Logout</Button>
       <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
       </HStack>
    </Flex>
  )
}
export default NavBar;