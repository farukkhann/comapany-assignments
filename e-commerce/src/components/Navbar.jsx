import { ReactNode } from 'react';
import logo from "../assets/Orange E-commerce Online Store Logo.png"
import { useNavigate } from "react-router-dom"
import cartlogo from "../assets/shopping-cart.png"
import homeicon from "../assets/home.png"
import {
  Img,
  Link,
  Box,
  Flex,
  HStack,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';


export default function Simple() {
  const navigate = useNavigate()
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Link onClick={() => navigate("/")}><Img marginLeft={6} height={8} src={homeicon}></Img></Link>
            </Box>
          </HStack>
          {/* <Flex>
            <Link onClick={()=>navigate("/products")}>Products</Link>
          </Flex> */}
          <Flex alignItems={'center'}>
            <Link>
              <Img marginRight={8} height={8} src={cartlogo} onClick={() => navigate("/cart")}></Img>
            </Link>
          </Flex>
        </Flex>

      </Box>

    </>
  );
}