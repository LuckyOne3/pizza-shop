import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// @ts-ignore
import { Formik, Field, Form } from "formik";
import {plusCartItem, setUser} from "../../redux/actions/cart";

function validateEmail(value:any) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}
function validatePassword(value:any) {
    let error;
    if (!value) {
        error = 'Required';
    }
    return error;
}


export const SignIn:React.FC = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const { totalPrice, totalCount, items, currency, delivery } = useSelector(({ cart }) => cart);

    const addedPizzas = Object.keys(items).map((key) => {
        return items[key].items[0];
    });



    return (
        <div className="container col-sm-4 mt-8">
                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    onSubmit={async (values) => {
                        if(values.email === "test@mail.ru" && values.password === "password"){
                            // @ts-ignore
                            values.name = "alex"
                                dispatch(setUser(values));
                        }

                    }}
                >

                    { //@ts-ignore
                        ({ isSubmitting, errors, touched, isValidating }) => (
                            <Form className="form-group d-flex flex-column" >
                                <label htmlFor="email">Email</label>
                                <Field name="email" type="email" validate={validateEmail} placeholder="test@mail.ru" />
                                {errors.email && touched.email && (
                                    <div className="red mt-2">{errors.email}</div>
                                )}

                                <label htmlFor="password" className="mt-2">Password</label>
                                <Field name="password" type="password" validate={validatePassword}  placeholder="" />
                                {errors.password && touched.password && (
                                    <div className="red mt-2">{errors.password}</div>
                                )}

                                <button type="submit" className="btn pointer bor-rad btn-primary mt-4" disabled={isSubmitting}>
                                    <span>Sign-in</span>
                                </button>
                                <Link to="/auth/signup" className="text-center mt-2">
                                    <span >Sign-Up</span>
                                </Link>
                            </Form>
                        )}
                </Formik>
        </div>
    );

}


