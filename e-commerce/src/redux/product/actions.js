import axios from "axios"


export const productsActions = {
    GET_PRODUCT_REQUEST: 'GET_PRODUCT_REQUEST',
    GET_PRODUCT_SUCCESS: 'GET_PRODUCT_SUCCESS',
    GET_PRODUCT_FAILURE: 'GET_PRODUCT_FAILURE'
}

export const getProductsRequest = () => ({
    type: productsActions.GET_PRODUCT_REQUEST
});


export const getProductsSuccess = (products) => ({
    type: productsActions.GET_PRODUCT_SUCCESS,
    payload: products
});

export const getProductsFailure = (error) => ({
    type: productsActions.GET_PRODUCT_FAILURE,
    payload: error
});


export const getProducts=()=>(dispatch)=>{
    console.log("called")
    dispatch(getProductsRequest());
    return axios({
        method:"get",
        url:"https://fakestoreapi.com/products",
        headers:{
            "Content-Type":"application/json"
        }
    }).then(response=>{

        dispatch(getProductsSuccess(response.data));
        console.log("done request")
    }).catch(error=>{
        dispatch(getProductsFailure(error));
    }
    )
}