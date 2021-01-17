import React, {useEffect} from 'react';
import {useSelector, useDispatch, RootStateOrAny} from 'react-redux';

import {fetchShowOrders} from "../../redux/actions/cart";
// @ts-ignore
import Currency from 'react-currency-formatter';
import { RenderPizzaOrders} from "../../types";





export const Profile: React.FC = () => {
    const dispatch = useDispatch();
    const {user} = useSelector(({cart} :RootStateOrAny) => cart);

    useEffect(() => {
        // code to run on component mount
        dispatch(fetchShowOrders(user.email))

    }, [])


    return (
        <div className="container  flex-column d-flex   mt-8 text-center">
            <h1> Profile</h1>
            <span>Email:{user.email}</span>
            <span>Name:{user.name}</span>
            <h1> History</h1>
            <div className="row">
                {
                    user.orders[0]
                        ? user.orders.map((obj: RenderPizzaOrders, index: number) =>
                            <div className='col-4' key={index + obj.id}>

                                <div className="card">
                                    <div className="card-body justify-content-center text-center">
                                        <div className="card-title  ">Total Price: <Currency
                                            quantity={obj.totalprice}
                                            currency={obj.currency}
                                        /></div>
                                        <p className="card-text  ">Street: {obj.street}</p>
                                        <p className="card-text  ">Flat/Office: {obj.flatoffice}</p>
                                        <p className="card-text  ">Floor :{obj.floor}</p>

                                        <div className="flex-row d-flex justify-content-between align-items-center">
                                            <div className="d-flex price">

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        : <div>nothing</div>

                }
            </div>
        </div>
    )
}


