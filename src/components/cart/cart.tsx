import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {CartItem} from './cartItem'
import {
    clearCart,
    removeCartItem,
    plusCartItem,
    minusCartItem,
    fetchSetOrder
} from './../../redux/actions/cart';

// @ts-ignore
import Currency from 'react-currency-formatter';
// @ts-ignore
import { Formik, Field, Form } from "formik";

function validate(value:any) {
    let error;
    if (!value) {
        error = "Required";
    }
    return error;
}

export const Cart:React.FC = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const { totalPrice, totalCount, items, currency, delivery,user } = useSelector(({ cart }) => cart);

    const addedPizzas = Object.keys(items).map((key) => {
        return items[key].items[0];
    });

    const onClearCart = () => {

            dispatch(clearCart());

    };


    const onRemoveItem = (id:any) => {

            dispatch(removeCartItem(id));

    };

    const onPlusItem = (id:any) => {
        dispatch(plusCartItem(id));
    };

    const onMinusItem = (id:any) => {
        dispatch(minusCartItem(id));
    };





    // @ts-ignore
    // @ts-ignore
    return (
        <div className="container  mt-8">
            {totalCount ? (
                <div className="cart">
                    <div className="cart__top flex-row d-flex justify-content-between mb-4">
                        <div className="d-flex align-items-center">
                            <img className="mr-2" src="https://img.icons8.com/ios-filled/24/000000/shopping-cart.png"/>
                            Cart
                        </div>
                        <div className="d-flex align-items-center ">
                            <svg
                                className="mr-2"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.5 5H4.16667H17.5"
                                    stroke="#B6B6B6"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                                    stroke="#B6B6B6"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M8.33337 9.16667V14.1667"
                                    stroke="#B6B6B6"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M11.6666 9.16667V14.1667"
                                    stroke="#B6B6B6"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            <span onClick={onClearCart}>Clear cart</span>
                        </div>
                    </div>
                    <div className="row">
                        {addedPizzas.map((obj:any) => (
                            //@ts-ignore
                            <CartItem key={obj.id} id ={obj.id} currency={currency} imageUrl ={obj.imageUrl} name={obj.name} type={obj.type} size={obj.size} totalPrice={items[obj.id].totalPrice} totalCount={items[obj.id].items.length} onRemove={onRemoveItem} onMinus={onMinusItem} onPlus={onPlusItem}
                            />
                        ))}
                    </div>
                    <div className="cart__bottom">
                        <div className="cart__bottom-details d-flex flex-row justify-content-between mt-2">
              <span>
                Items: <b>{totalCount}</b>
              </span>
                            <span>
                Price: <b><Currency
                                quantity={totalPrice}
                                currency={currency}
                            /></b>
              </span>
                        </div>
                        <div className="cart__bottom-details d-flex flex-row justify-content-between mt-2">
              <span>

              </span>
                            <span>
                Delivery Price: <b><Currency
                                quantity={delivery[currency]}
                                currency={currency}
                            /></b>
              </span>
                        </div>
                        <div className="cart__bottom-details d-flex flex-row justify-content-between mt-2">
              <span>

              </span>
                            <span>
                Total Price: <b><Currency
                                quantity={totalPrice + delivery[currency]}
                                currency={currency}
                            /></b>
              </span>
                        </div>
                        <div className="cart__bottom-buttons d-flex flex-row justify-content-between mt-4">
                            <Link to="/" className="button ">
                                <svg
                                    width="8"
                                    height="14"
                                    viewBox="0 0 8 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-2"
                                >
                                    <path
                                        d="M7 13L1 6.93015L6.86175 1"
                                        stroke="#D3D3D3"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <Link to="/">
                                    <button className="btn btn-primary bor-rad">Go back</button>
                                </Link>
                            </Link>
                            <div  >
                                <Formik
                                    initialValues={{
                                        street: "",
                                        flatOffice: "",
                                        floor: ""
                                    }}
                                    onSubmit={async (values) => {
                                        let data = {
                                            name:"guest",
                                            email:"guest",
                                            street:"",
                                            flatoffice:"",
                                            floor:"",
                                            totalprice:"",
                                            currency:""
                                        }
                                        if(user.email){

                                            data.name = user.name
                                            data.email = user.email
                                        }
                                        data.street = values.street
                                        data.flatoffice = values.flatOffice
                                        data.floor = values.floor
                                        data.totalprice = totalPrice + delivery[currency]
                                        data.currency = currency

                                        dispatch(fetchSetOrder(data));

                                         onClearCart()
                                    }}
                                >

                                    { //@ts-ignore
                                        ({ isSubmitting, errors, touched, isValidating }) => (
                                        <Form className="form-group d-flex flex-column" >
                                            <label htmlFor="street">Street</label>
                                            <Field name="street" validate={validate} placeholder="cool street" />
                                            {errors.street && touched.street && (
                                                <div className="red">{errors.street}</div>
                                            )}

                                            <label htmlFor="flatOffice" className="mt-2">Flat / Office</label>
                                            <Field name="flatOffice" validate={validate} placeholder="Office" />
                                            {errors.flatOffice && touched.flatOffice && (
                                                <div className="red">{errors.flatOffice}</div>
                                            )}

                                            <label htmlFor="floor" className="mt-2">Floor</label>
                                            <Field name="floor" placeholder="1" type="text" />

                                            <button type="submit" className="btn pointer bor-rad btn-danger mt-4" disabled={isSubmitting}>
                                                <span>Order</span>
                                            </button>
                                        </Form>
                                    )}
                                </Formik>

                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="cart cart--empty">
                    <h2>
                        Cart is empty
                    </h2>

                    <Link to="/" className="button ">
                        <svg
                            width="8"
                            height="14"
                            viewBox="0 0 8 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2"
                        >
                            <path
                                d="M7 13L1 6.93015L6.86175 1"
                                stroke="#D3D3D3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <Link to="/">
                            <button className="btn btn-primary bor-rad">Go back</button>
                        </Link>
                    </Link>
                </div>
            )}
        </div>
    );
}


