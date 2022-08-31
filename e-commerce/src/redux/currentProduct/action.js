



export const currentProductAction={
    SHOW_CURRENT_PRODUCT:"SHOW_CURRENT_PRODUCT"
}

export const showcurrentProduct=(product)=>({
    type:currentProductAction.SHOW_CURRENT_PRODUCT,
    payload:product
})




