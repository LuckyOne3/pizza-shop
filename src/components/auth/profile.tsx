import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// @ts-ignore
import { Formik, Field, Form } from "formik";
import {Item} from "../catalog/item";

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




    return (
        <div className="container  flex-column d-flex   mt-8 text-center">
            <h1> Profile</h1>
            <span>Email:{user.email}</span>
            <span>Name:{user.name}</span>
            <h1> History</h1>
            {
                user.orders ?  user.orders.map((obj: any, index: any, array: any) => <div key={index + obj.street}>obj.street + obj.flatOffice + obj.floor+ obj.totalPrice +obj.currency </div>) : <div>nothing</div>

            }
        </div>
    )
}


