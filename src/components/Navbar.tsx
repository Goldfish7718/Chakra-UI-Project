import {
  Box,
  Flex,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
  Link,
  Divider,
  Spacer
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  // Determine the current breakpoint
  const isBelowMd = useBreakpointValue({ base: true, md: false });

  return (
    <Flex as="nav" padding="1.5rem" bg="teal.500" color="white">
      <Text fontSize="xl" fontWeight="bold">
        Logo
      </Text>
      <Spacer />
      <Box>
        {isBelowMd ? (
          <Menu>
            <MenuButton as={Button} border="none" borderRadius="none" color="white" colorScheme="teal" variant="outline" size="sm">
                <GiHamburgerMenu size={20} />
            </MenuButton>
            <MenuList>
              <MenuItem color="gray.500">Home</MenuItem>
              <MenuItem color="gray.500">About</MenuItem>
              <MenuItem color="gray.500">Services</MenuItem>
              <Divider borderColor="gray.300" />
              <MenuItem color="gray.500">Login</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <>
            <Link as="a" mr={4}>
              Home
            </Link>
            <Link as="a" mr={4}>
              About
            </Link>
            <Link as="a" mr={4}>
              Services
            </Link>
            <Button colorScheme="teal" variant="outline" size="sm">
              Login
            </Button>
          </>
        )}
      </Box>
    </Flex>
  );
};

export default Navbar;
