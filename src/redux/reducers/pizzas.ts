

const initialState = {
   items:[],
    isLoaded:false
};

export const pizzas = (state = initialState, action:any) => {
    if(action.type === 'SET_PIZZAS'){

        return{
            ...state,
            items: action.payload
        }
    }
    if(action.type === 'SET_DOWNLOAD_PIZZAS'){

        return{
            ...state,
            isLoaded: true
        }
    }
    return state
}

export default pizzas;
