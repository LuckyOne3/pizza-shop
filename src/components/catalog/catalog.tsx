import React, {useEffect} from 'react';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
// @ts-ignore
import Loader from 'react-loader-spinner'

import {Item} from './item'
import {useDispatch, useSelector} from "react-redux";
import {fetchPizzas, lastPizza} from "../../redux/actions/pizzas";
import {addPizza} from '../../redux/actions/cart';


import {Notification} from "./notification";


const loader = <Loader className="m-auto"
                       type="TailSpin"
                       color="#007bff"
                       height={100}
                       width={100}
                       interval={3000} //3 secs

/>
export const Catalog: React.FC = (props:any) => {

    const {isLoaded, items}: any = useSelector(({pizzas}: any) => (pizzas))
    const {currency}: any = useSelector(({cart}: any) => (cart))

    const dispatch = useDispatch()
    useEffect(() => {
        // code to run on component mount
        dispatch(fetchPizzas())

    }, [])

    const handleAddToCart = (objPizza: any) => {
        dispatch(addPizza(objPizza))
    }
    const handleLastItem = () => {
        dispatch(lastPizza())
    }



    return (

        <div className='container mt-8'>
            <div className={isLoaded ? 'row invisible opacity-0-loader' : 'row'}>
                {
                    loader
                }
            </div>
            <div className={isLoaded ? 'row' : ' row invisible opacity-0-pizza'}>
                {
                        // @ts-ignore
                     items.map((obj, index, array) => <Item key={index + obj.name} onAddToCart={handleAddToCart} last={{index,handleLastItem, array}} currency={currency} data={obj}/>)
                }
            </div>
        </div>
    );
}


