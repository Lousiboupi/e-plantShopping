import { ADD_ITEM, REMOVE_ITEM, UPDATE_QUANTITY } from './actions';

const initialState = {
    cart: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            };
        case REMOVE_ITEM:
            return {
                ...state,
                cart: state.cart.filter(item => item.name !== action.payload)
            };
        case UPDATE_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.name === action.payload.itemName
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                )
            };
        default:
            return state;
    }
};

export default rootReducer;