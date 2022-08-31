import { Heading } from "@chakra-ui/react"
import {Box,Flex,Text,Image,Button} from "@chakra-ui/react"
import { useSelector } from "react-redux"


export const Cart =()=>{
    const state=useSelector((state)=>state.cart.cart)
    console.log(state.cart)
    return <>
    <Heading>Cart </Heading>
    {state?.map((elem)=>{
        return <Flex  margin={"20"} height="300px" padding={"10px"}>
            <Box  >
            <Image width={"300px"} height={"200px"} src={elem.image}></Image>
            </Box>
            <Box padding={"35px"}>
            <Text fontSize={"30px"} fontWeight={"bold"}>{elem.title}</Text>
            <Text fontSize={"20px"} fontWeight="semibold">${elem.price}</Text>
            {/* <Button>Remove</Button> */}
            </Box>
        </Flex>
    }) }

    </>
}