import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// @ts-ignore
import { Formik, Field, Form } from "formik";
import {plusCartItem} from "../../redux/actions/cart";

function validateEmail(value:any) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}
const validatePassword = (values:any) => {
    let error = "";
    const passwordRegex = /(?=.*[0-9])/;
    if (!values) {
        error = "*Required";
    } else if (values.length < 8) {
        error = "*Password must be 8 characters long.";
    } else if (!passwordRegex.test(values)) {
        error = "*Invalid password. Must contain one number.";
    }
    return error;
};

const validateConfirmPassword = (pass:any, value:any) => {

    let error = "";
    if (pass && value) {
        if (pass !== value) {
            error = "Password not matched";
        }
    }
    return error;
};

function validateName(value:any) {
    let error;
    if (!value) {
        error = 'Required';
    }
    return error;
}


export const SignUp:React.FC = () => {
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
                    password: "",
                    confirmPassword: "",
                    name: ""
                }}
                onSubmit={async (values) => {
                    // @ts-ignore
                    if(values.email === "test@mail.ru" && values.password === "password"){
                        const onPlusItem = (id:any) => {
                            dispatch(plusCartItem(id));
                        };
                    }
                    alert(JSON.stringify(values, null, 2));
                }}
            >

                { //@ts-ignore
                    ({ isSubmitting, errors, touched, isValidating,values }) => (
                        <Form className="form-group d-flex flex-column" >
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email" validate={validateEmail} placeholder="my@gmail.com" />
                            {errors.email && touched.email && (
                                <div className="red mt-2">{errors.email}</div>
                            )}

                            <label htmlFor="password" className="mt-2">Password</label>
                            <Field name="password" type="password" validate={validatePassword}  placeholder="" />
                            {errors.password && touched.password && (
                                <div className="red mt-2">{errors.password}</div>
                            )}

                            <label htmlFor="confirmPassword" className="mt-2">Confirm Password</label>
                            <Field name="confirmPassword" type="password" validate={(value: any) => validateConfirmPassword(values.password, value)}  placeholder="" />
                            {errors.confirmPassword && touched.confirmPassword && (
                                <div className="red mt-2">{errors.confirmPassword}</div>
                            )}

                            <label htmlFor="name" className="mt-2">Name</label>
                            <Field name="name" type="text" validate={validateName}  placeholder="alex" />
                            {errors.name && touched.name && (
                                <div className="red mt-2">{errors.name}</div>
                            )}

                            <button type="submit" className="btn pointer bor-rad btn-primary mt-4" disabled={isSubmitting}>
                                <span>Sign-Up</span>
                            </button>
                            <Link to="/auth/signin" className="text-center mt-2">
                                <span >Sign-In</span>
                            </Link>
                        </Form>
                    )}
            </Formik>
        </div>
    );

}


