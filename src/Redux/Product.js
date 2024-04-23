// actions
const addProduct = 'ADD_PRODUCT'
const removeProduct = 'REMOVE_PRODUCT'

// reducer
const productReducer = (state = [], action) => {
    switch (action.type) {
        case addProduct: {

            return [...state, action.payload]
        }
        case removeProduct: {

            return state.filter(p => (p.id !== action.payload.id))
        }
        default: {
            return state
        }
    }
}

// actionCreator
const addProductAction = (title,price) => {
    return {
        type: addProduct,
        payload: {
            title,
            price
        }
    }
}

const removeProductAction = (id) => {
    return {
        type: removeProduct,
        payload: { id }
    }
}

export default productReducer;
export {
    addProductAction,
    removeProductAction
}