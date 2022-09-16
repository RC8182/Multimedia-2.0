import {
  Box,
  Flex,
  Text,
  IconButton,

  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';


import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { DesktopNav } from './Navigation/WithSubNavigation';
import LoginButtons from './LoginButtons/LoginButtons';

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('yellow', 'blue')}
        color={useColorModeValue('blue', 'yellow')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('blue', 'yellow')}>
            Multimedia
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
          {  <DesktopNav /> }  
          </Flex>
        </Flex>
         {<LoginButtons/> }
         
          <ColorModeSwitcher/>
      </Flex>
{/*
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
          */}
    </Box>
  );
}
