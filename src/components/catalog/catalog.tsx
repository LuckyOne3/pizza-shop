import React, {useEffect} from 'react';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
// @ts-ignore
import Loader from 'react-loader-spinner'

import {Item} from './item'
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {fetchPizzas, lastPizza} from "../../redux/actions/pizzas";
import {addPizza} from '../../redux/actions/cart';

import {Notification} from "./notification";

import {CartItemPizza} from "../../types";


const loader = <Loader className="m-auto"
                       type="TailSpin"
                       color="#007bff"
                       height={100}
                       width={100}
                       interval={3000} //3 secs

/>

export const Catalog: React.FC = () => {

    const {isLoaded, items} = useSelector(({pizzas}: RootStateOrAny) => (pizzas))
    const {currency} = useSelector(({cart}: RootStateOrAny) => (cart))

    const dispatch = useDispatch()
    useEffect(() => {
        // code to run on component mount
        dispatch(fetchPizzas())

    }, [])

    const handleAddToCart = (objPizza: CartItemPizza) => {
        dispatch(addPizza(objPizza))
    }
    const handleLastItem = () => {
        dispatch(lastPizza())
    }

    const ItemsArrayLenght = items.length - 1

    return (

        <div className='container mt-8'>
            <div className={isLoaded ? 'row invisible opacity-0-loader' : 'row'}>
                {
                    loader
                }
            </div>
            <div className={isLoaded ? 'row' : ' row invisible opacity-0-pizza'}>
                {

                    items.map((obj: CartItemPizza, index: number, array: CartItemPizza[]) => <Item
                        key={index + obj.name} onAddToCart={handleAddToCart}
                        last={{index, handleLastItem, ItemsArrayLenght}} currency={currency} data={obj}/>)
                }
            </div>
        </div>
    );
}


