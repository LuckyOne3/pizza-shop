const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
    currency: "USD",
    delivery: {"USD": 20, "EUR": 30},
    user:{
        email:"",
        name: "",
        password:"",
        orders: []
    }
};

const getTotalPrice = (arr: any, currency: any) => arr.reduce((sum: any, obj: any) => obj.price&&obj.price[currency]  + sum , 0);

const _get = (obj: any, path: any) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val: any, key: any) => {
        return val[key];
    }, obj[firstKey]);
};

const getTotalSum = (obj: any, path: any) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path);
        return sum + value;
    }, 0);
};

const cart = (state = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART': {
            // @ts-ignore
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                // @ts-ignore
                : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems, state.currency),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }

        case 'REMOVE_CART_ITEM': {
            const newItems = {
                ...state.items,
            };
            // @ts-ignore
            const currentTotalPrice = newItems[action.payload].totalPrice;
            // @ts-ignore
            const currentTotalCount = newItems[action.payload].items.length;
            // @ts-ignore
            delete newItems[action.payload];
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            };
        }

        case 'PLUS_CART_ITEM': {
            const newObjItems = [
                // @ts-ignore
                ...state.items[action.payload].items,
                // @ts-ignore
                state.items[action.payload].items[0],
            ];
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems, state.currency),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }

        case 'MINUS_CART_ITEM': {
            // @ts-ignore
            const oldItems = state.items[action.payload].items;
            const newObjItems =
                // @ts-ignore
                oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems, state.currency),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }

        case 'CLEAR_CART': {
            return {
                ...state,
                totalPrice: 0, totalCount: 0, items: {}
            };
        }

        case 'SET_CURRENCY': {


            const actionPayload = action.payload

            let sum = 0;
            for (let items in state.items){
                // @ts-ignore
                sum = state.items[items].items.reduce((acc, item) => item.price[actionPayload] + acc,0) + sum

            }

            const objsForNewMass = JSON.parse(JSON.stringify(state.items));

            for (let items in state.items){
                let iter = 0;
                // @ts-ignore
                iter = state.items[items].items.reduce((acc, item) => item.price[actionPayload] + acc,0) + iter
                // @ts-ignore
                objsForNewMass[items].totalPrice = iter;

            }

            return {
                ...state,
                currency: action.payload,
                totalPrice: sum,
                items:objsForNewMass
            };
        }

        case 'SET_USER': {

            return {
                ...state,
                user: {
                    email: action.payload.email,
                    password: action.payload.password,
                    name: action.payload.name,
                }



            };
        }

        case 'SET_ORDERS': {
                // @ts-ignore
            const currentItems = !state.user.orders
                ? {street:action.payload.street,flatOffice:action.payload.flatOffice,floor:action.payload.floor,totalPrice:action.payload.totalPrice,currency:action.payload.currency}
                // @ts-ignore
                : [...state.user.orders, {street:action.payload.street,flatOffice:action.payload.flatOffice,floor:action.payload.floor,totalPrice:action.payload.totalPrice,currency:action.payload.currency}];




            return {
                ...state,
                user: {
                    // @ts-ignore
                    name:state.user.name,
                    email:state.user.email,
                    password:state.user.password,
                    orders: currentItems
                }



            };
        }

        default:
            return state;
    }
};

export default cart;
