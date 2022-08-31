
import { Heading } from "@chakra-ui/react"
import {useSelector,useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import {getProducts,getProductsSuccess} from "../redux/product/actions"
import axios from "axios"
import {
    Flex,
    Box,
    Image,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
  } from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { useState, useEffect } from "react";
import {showcurrentProduct} from "../redux/currentProduct/action"
import {addToCart} from "../redux/cart/action"

export const HomePage=()=>{
    useEffect(()=>{
       dispatch(getProducts())
    },[])
    const data=useSelector((state)=>state.products)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    return <>
    {/* {data.error&&<Heading>Something went wrong...</Heading>} */}
    {/* {data.loading&&<Heading>...loading</Heading>} */}
    <Flex flexFlow={"wrap"}>
    {data.products?.map((elem)=><Box margin="20px"   p={2} w={72} height={"350px"} alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          position="relative">
          <Image
            width={36}
            height={40}
            src={elem.image}
            roundedTop="lg"
          />
  
          <Box p={4} >
            <Flex mt="0" justifyContent="space-between" alignContent="center">
              <Box
              onClick={()=>{
                navigate("./products")
                dispatch(showcurrentProduct(elem))
            }}
               _hover={{cursor:'pointer'}}
                fontSize="xl"
                isTruncated>
                {elem.title}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
                <chakra.a display={'flex'}>
                  <Icon _hover={{cursor:"pointer"}} onClick={()=>{alert("product added successfully") ,dispatch(addToCart(elem))}}   as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                </chakra.a>
              </Tooltip>
            </Flex>
            <Flex justifyContent="space-between" alignContent="center">
              <Box fontSize="xl" >
                <Box as="span" color={'gray.600'} fontSize="lg">
                  $
                </Box>
                {elem.price}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    )}
    </Flex>
    
    </>
}
