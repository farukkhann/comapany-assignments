import { Flex, Heading ,Text,Button} from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import {Box,Image} from "@chakra-ui/react"
import { useEffect } from "react"
import {addToCart} from "../redux/cart/action"

export const Products=()=>{
        const dispatch=useDispatch()
        const currentProduct=useSelector((state)=>state.currentProduct.currentProduct)
        console.log(currentProduct)
    return <>
        <Box>
            <Flex>
                <Box>
            <Image w={80} src={currentProduct?.image}></Image>
                </Box>
                <Box marginTop={8} padding={8}>
                    <Text lineHeight={10} fontSize={20} fontWeight={"extrabold"}>{currentProduct?.title}</Text>
                    <Box width={"800px"}>
                    <Text>{currentProduct?.description}</Text>
                    </Box>
                    <Text fontWeight={"bold"}>Catagory:{currentProduct?.category}</Text>
                    <Text fontSize={20} fontWeight={"extrabold"}>${currentProduct?.price}</Text>
                    <Button onClick={()=>{alert("product added successfully") ,dispatch(addToCart(currentProduct))}}  >Add to Cart</Button>
                </Box>
            </Flex>
        </Box>:
    </>
}