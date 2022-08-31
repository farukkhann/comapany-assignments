const initState={
    currentProduct:null
}
import {currentProductAction} from "./action"

export const currentProductReducer=(state=initState,action)=>{
    switch(action.type){
        case currentProductAction.SHOW_CURRENT_PRODUCT:
            return {
                ...state,
                currentProduct:action.payload
            }
        default:return state
    }
}
