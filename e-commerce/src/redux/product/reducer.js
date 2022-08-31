const iniState={
    products:[],
    loading:false,
    error:null
}
import {productsActions} from "./actions"

export const ProductsReducer=(state=iniState,action)=>{
    switch(action.type){
        case productsActions.GET_PRODUCT_REQUEST:
            return{
                ...state,
                loading:true,
                error:null
            }
        case productsActions.GET_PRODUCT_SUCCESS:
            console.log("in reducer")
            return{
                ...state,
                loading:false,
                products:action.payload
            }
        case productsActions.GET_PRODUCT_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        default: return state
    }
}