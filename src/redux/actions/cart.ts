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


export const setUser = (payload:any) => ({
    type: 'SET_USER',
    payload
});

export const setOrder = (payload:any) => ({
    type: 'SET_ORDERS',
    payload
});
