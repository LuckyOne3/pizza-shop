import axios from 'axios';
const API = process.env.REACT_APP_API

export const addPizza = (pizzaObj:any) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj,
});

export const clearCart = () => ({
    type: 'CLEAR_CART',
});

export const setCurrency = (payload:any) => (
    {
        type: 'SET_CURRENCY',
        payload
    });


export const removeCartItem = (id:any) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id,
});

export const plusCartItem = (id:any) => ({
    type: 'PLUS_CART_ITEM',
    payload: id,
});

export const minusCartItem = (id:any) => ({
    type: 'MINUS_CART_ITEM',
    payload: id,
});

export const fetchLoginUser = (userData:any) =>  async (dispatch:any)=> {

    const response = await axios.post(API + '/login', userData);
    let data = await response;

        dispatch(setUser({token: data.data.token, name:userData.name,email:userData.email}))



}

export const fetchSetUser = (userData:any) =>  async (dispatch:any)=> {

        const response = await axios.post(API + '/register', userData);

        let data = await response;

    dispatch(fetchLoginUser({'name':userData.name,'email':userData.email,'password':userData.password}))

    }

export const fetchSetOrder = (userData:any) =>  async ()=> {

    const response = await axios.post(API + '/order-make', userData);
    let data = await response;

}
export const fetchShowOrders = (userData:any) =>  async (dispatch:any)=> {

    const response = await axios.get(API + '/orders/' + userData);
    let data = await response;

    dispatch(setOrders(data.data.data));

}




export const setUser = (payload:any) => ({
    type: 'SET_USER',
    payload
});
export const setOrders = (payload:any) => ({
    type: 'SET_ORDERS',
    payload
});

