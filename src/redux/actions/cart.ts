import axios from 'axios';
import {toast} from 'react-toastify';
import {CartItemPizza, fetchLoginUserT, fetchSetOrderT, fetchSetUserT, RenderPizzaOrders, SetUserT} from "../../types";

const API = process.env.REACT_APP_API



export const addPizza = (pizzaObj: CartItemPizza) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj,
});

export const clearCart = () => ({
    type: 'CLEAR_CART',
});

export const setCurrency = (payload: string) => (
    {
        type: 'SET_CURRENCY',
        payload
    });


export const removeCartItem = (id: number) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id,
});

export const plusCartItem = (id: number) => ({
    type: 'PLUS_CART_ITEM',
    payload: id,
});

export const minusCartItem = (id: number) => ({
    type: 'MINUS_CART_ITEM',
    payload: id,
});

export const fetchLoginUser = (userData: fetchLoginUserT) => async (dispatch: any) => {

    try {
        const response = await axios.post(API + '/login', userData);
        let data = await response;
        dispatch(setUser({name : userData.name || 'guest', email: userData.email}))
        toast.success("Your are logged in!");
    } catch (err) {
        console.log(err)
        toast.error("Something went wrong with your logging into account!");
    }


}

export const fetchSetUser = (userData: fetchSetUserT) => async (dispatch: any) => {

    try {
        const response = await axios.post(API + '/register', userData);
        await response;
        console.log(userData)
        dispatch(fetchLoginUser({name: userData.name, email: userData.email, password: userData.password}))
        toast.success("Your are registered!");
    } catch (err) {
        console.log(err)
        toast.error("Something went wrong with your registration!");
    }
}

export const fetchSetOrder = (userData: fetchSetOrderT) => async (dispatch:any) => {

    try {
        const response = await axios.post(API + '/order-make', userData);
        await response;
        console.log(userData)
        toast.success("Your order is accepted!");
        dispatch(clearCart())
    } catch (err) {
        console.log(err)
        toast.error("Something went wrong with your order!");
    }


}
export const fetchShowOrders = (userData: string) => async (dispatch: any) => {

    try {
        const response = await axios.get(API + '/orders/' + userData);
        let data = await response;

        dispatch(setOrders(data.data.data));
    } catch (err) {
        console.log(err)
        toast.error("Something went wrong with your orders!");
        // here I'd like to send the error to the user instead
    }


}


export const setUser = (payload: SetUserT) => ({
    type: 'SET_USER',
    payload
});
export const unsetUser = () => {

    toast.success("Your are logged out!");
    return {type: 'UNSET_USER'}
};
export const setOrders = (payload: RenderPizzaOrders) => ({
    type: 'SET_ORDERS',
    payload
});

