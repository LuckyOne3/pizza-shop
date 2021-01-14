import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

// @ts-ignore
import { Formik, Field, Form } from "formik";
import {fetchShowOrders} from "../../redux/actions/cart";
// @ts-ignore
import Currency from 'react-currency-formatter';

function validateEmail(value:any) {
    let error;
    if (!value) {
        error = "Required";
    }
    return error;
}

export const Profile:React.FC = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const {  user } = useSelector(({ cart }) => cart);

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
                    ? user.orders.map((obj: any, index: any, array: any) =>
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


