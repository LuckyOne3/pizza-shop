import React from 'react';
import { useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
// @ts-ignore
import { CSSTransitionGroup } from 'react-transition-group'
// @ts-ignore
import {Formik, Field, Form} from "formik";
import {fetchLoginUser} from "../../redux/actions/cart";
import {useHistory} from "react-router-dom"

function validateEmail(value: any) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

function validatePassword(value: any) {
    let error;
    if (!value) {
        error = 'Required';
    }
    return error;
}


export const SignIn: React.FC = () => {

    let history = useHistory();

    const dispatch = useDispatch();


    return (
        <CSSTransitionGroup
            transitionName="Transition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
        <div className="container col-sm-4 mt-8">
            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                onSubmit={async (values) => {

                    dispatch(fetchLoginUser(values));

                    history.push("/")


                }}
            >

                { //@ts-ignore
                    ({isSubmitting, errors, touched}) => (
                        <Form className="form-group d-flex flex-column">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email" validate={validateEmail} placeholder="Enter Email"/>
                            {errors.email && touched.email && (
                                <div className="red mt-2">{errors.email}</div>
                            )}

                            <label htmlFor="password" className="mt-2">Password</label>
                            <Field name="password" type="password" validate={validatePassword} placeholder="Enter Password"/>
                            {errors.password && touched.password && (
                                <div className="red mt-2">{errors.password}</div>
                            )}

                            <button type="submit" className="btn pointer bor-rad btn-primary mt-4"
                                    disabled={isSubmitting}>
                                <span>Sign-in</span>
                            </button>
                            <Link to="/auth/signup" className="text-center mt-2">
                                <span>Sign-Up</span>
                            </Link>
                        </Form>
                    )}
            </Formik>
        </div>
        </CSSTransitionGroup>
    );

}


