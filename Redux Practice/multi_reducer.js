
const {createStore, combineReducers} = require('redux');

ADD_PRODUCT = 'ADD_PRODUCT'
GET_PRODUCTS = 'GET_PRODUCTS'

ADD_CART_ITEM = 'ADD_CART_ITEM'
GET_CART_ITEMS = 'GET_CART_ITEMS'

const initialProductState = {
    products: ['item1', 'item2'],
    numberOfProducts: 2
}

const initialCartState = {
    products: ['cart1'],
    numberOfProducts: 1
}

const addProduct = (product) => {
    return{
        type: ADD_PRODUCT,
        payload: product
    }
}
const getProduct = () => {
    return{
        type: GET_PRODUCTS,
        
    }
}

const addCareItem = (product) => {
    return{
        type: ADD_CART_ITEM,
        payload: product
    }
}
const getCartItems = () => {
    return{
        type: GET_CART_ITEMS,
        
    }
}
const productReducer = (state = initialProductState, action) => {
    
    switch(action.type){

        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }
        case GET_PRODUCTS:
            return{
                state
            }
        default:
            return state
    }
}

const cartReducer = (state = initialCartState, action) => {
    
    switch(action.type){

        case ADD_CART_ITEM:
            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }
        case GET_CART_ITEMS:
            return{
                state
            }
        default:
            return state
    }
}
const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
})
const store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(addProduct('item3'));
store.dispatch(getProduct());

store.dispatch(addCareItem('cart2'));
store.dispatch(getProduct());