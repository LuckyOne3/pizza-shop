import React from 'react';
import Pizza from '../../assets/20v58PICD9d7z4V41T3Ui_PIC2018.png_860.png'
import {Link} from 'react-router-dom';
import {useSelector, useDispatch, RootStateOrAny} from 'react-redux';
import {setCurrency} from "../../redux/actions/cart";
// @ts-ignore
import Currency from 'react-currency-formatter';


import 'react-toastify/dist/ReactToastify.css';

export const Header: React.FC = () => {

    const dispatch = useDispatch()

    const {totalCount, totalPrice, currency, user} = useSelector(({cart}: RootStateOrAny) => (cart))

    return (
        <nav className="navbar navbar-light bg-light fixed-top shadow">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={Pizza} width="30" height="30"
                         className="d-inline-block align-top" alt="" loading="lazy"/>
                    Pizzas
                </Link>
                <div>

                    <div className="row align-items-center ">
                        <div className="d-flex">
                            <label className="mr-sm-2 sr-only" htmlFor="inlineFormCustomSelect">Preference</label>
                            <select defaultValue={currency} className="custom-select mr-sm-2 "
                                    id="inlineFormCustomSelect"
                                    onChange={(e) => dispatch(setCurrency(e.currentTarget.value))}>
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                            </select>
                        </div>
                        <div className="d-flex mr-2">
                            <Link to="/cart">
                                <div className="btn-group" role="group">

                                    <button type="button" className="btn btn-primary bor-rad d-flex align-items-center">
                                        <span className="mr-2">
                                        <Currency
                                            quantity={totalPrice}
                                            currency={currency}
                                        />
                                        </span>
                                        <span> | </span>
                                        <span className="ml-2"><svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                                            stroke="white" strokeWidth="1.8" strokeLinecap="round"
                                            strokeLinejoin="round"></path>
                                        <path
                                            d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                                            stroke="white" strokeWidth="1.8" strokeLinecap="round"
                                            strokeLinejoin="round"></path>
                                        <path
                                            d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                                            stroke="white" strokeWidth="1.8" strokeLinecap="round"
                                            strokeLinejoin="round"></path>
                                    </svg></span> <span className="ml-2">{totalCount}</span></button>
                                </div>
                            </Link>
                        </div>
                        <div className="d-flex">
                            {!user || !user.token
                                ?
                                <Link to="/auth/signin">
                                    <div className="btn-group" role="group">

                                        <button type="button" className="btn btn-primary bor-rad">Sign-in</button>
                                    </div>
                                </Link>
                                :
                                <Link to="/auth/profile">
                                    <div className="btn-group" role="group">

                                        <button type="button" className="btn btn-primary bor-rad">Profile</button>
                                    </div>
                                </Link>}


                        </div>
                    </div>


                </div>
            </div>
        </nav>
    );
}

