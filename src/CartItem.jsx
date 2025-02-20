import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './actions';
import './CartItem.css';

function CartItem() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const handleIncrement = (item) => {
        dispatch(updateQuantity(item.name, item.quantity + 1));
    };

    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(updateQuantity(item.name, item.quantity - 1));
        } else {
            dispatch(removeItem(item.name));
        }
    };

    const handleRemove = (item) => {
        dispatch(removeItem(item.name));
    };

    const calculateTotalCost = (item) => {
        return (parseFloat(item.cost.substring(1)) * item.quantity).toFixed(2);
    };

    const calculateTotalAmount = () => {
        return cart.reduce((total, item) => total + parseFloat(item.cost.substring(1)) * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="cart-container">
            <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
            <div>
                {cart.map(item => (
                    <div className="cart-item" key={item.name}>
                        <img className="cart-item-image" src={item.image} alt={item.name} />
                        <div className="cart-item-details">
                            <div className="cart-item-name">{item.name}</div>
                            <div className="cart-item-cost">{item.cost}</div>
                            <div className="cart-item-quantity">
                                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                                <span className="cart-item-quantity-value">{item.quantity}</span>
                                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
                            </div>
                            <div className="cart-item-total-cost">${calculateTotalCost(item)}</div>
                            <button className="cart-item-button cart-item-button-remove" onClick={() => handleRemove(item)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CartItem;