export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item
});

export const removeItem = (itemName) => ({
    type: REMOVE_ITEM,
    payload: itemName
});

export const updateQuantity = (itemName, quantity) => ({
    type: UPDATE_QUANTITY,
    payload: { itemName, quantity }
});