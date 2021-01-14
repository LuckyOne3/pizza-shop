import axios from 'axios';
const API = process.env.REACT_APP_API


export const fetchPizzas = () =>  async (dispatch:any)=> {
    if(localStorage.getItem('state') === null) {
        const response = await axios.get(API + '/products',);
        let data = await response;
        let copy = JSON.parse(JSON.stringify(data.data.data))

        copy.forEach(function(item:any, i:number) {

            let priceMass = item.price.split(';')
            item.price = {}
            priceMass.forEach(function(itemPrice:any, i:number) {

                const sepatePrice = itemPrice.split(':')
                let currency = sepatePrice[0]
                if(currency === 'EUR'){
                    item.price.EUR =  parseFloat(sepatePrice[1])
                }
                if(currency === 'USD'){
                    item.price.USD= parseFloat(sepatePrice[1])
                }
            });


        });
        dispatch(setPizzas(copy))
}}

export const lastPizza = () => (dispatch:any)=> {
        dispatch({
                type: 'SET_DOWNLOAD_PIZZAS'
        })
}

export const setPizzas = (items:any) => (
    {
        type: 'SET_PIZZAS',
        payload: items
    });
