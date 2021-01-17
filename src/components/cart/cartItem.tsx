import React from 'react';

// @ts-ignore
import Currency from 'react-currency-formatter';

import {RenderPizzaCart} from "../../types";


export const CartItem: React.FC<RenderPizzaCart> = (props) => {
    const handleRemoveClick = () => {
        props.onRemove(props.data.id);
    };

    const handlePlusItem = () => {
        props.onPlus(props.data.id);
    };

    const handleMinusItem = () => {
        props.onMinus(props.data.id);
    };

    return (
        <div className="col-sm-12 m-auto">


            <div className="card  mh-250">
                <div className="card-body  flex-row d-flex ">


                    <div className="col-sm-6 flex-row d-flex align-items-center  ">
                        <img className="card-img mr-4" src={props.data.imageUrl} alt=""/>
                        <div className=" ">{props.data.name}</div>


                    </div>

                    <div className='col-sm-6  d-flex flex-row justify-content-between'>


                        <div className="flex-row d-flex  align-items-center ">
                            <div className="row btn-light bor-rad p-2">
                                <div
                                    onClick={handleMinusItem}
                                    className="btn pr-2 ">
                                    -
                                </div>
                                <div className="btn">{props.totalCount}</div>
                                <div
                                    onClick={handlePlusItem}
                                    className="btn pl-2">
                                    +
                                </div>
                            </div>
                        </div>
                        <div className="flex-row d-flex  align-items-center">
                            <Currency
                                quantity={props.totalPrice}
                                currency={props.currency}
                            />
                        </div>
                        <div className="flex-row d-flex  align-items-center pointer">
                            <div onClick={handleRemoveClick}>
                                <img alt="svgImg"
                                     src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAyNCAyNCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDkuMDMxMjUgLTAuMDMxMjUgQyA4LjU2NjQwNiAtMC4wMzEyNSA4LjE4NzUgMC4zNDc2NTYgOC4xODc1IDAuODEyNSBMIDguMTg3NSAzLjY4NzUgQyA1LjQ2ODc1IDMuOTk2MDk0IDMuNTkzNzUgNC42MjEwOTQgMy41OTM3NSA1LjM0Mzc1IEwgMy41OTM3NSA2LjcxODc1IEMgMy41OTM3NSA3IDMuODk0NTMxIDcuMjU3ODEzIDQuNDA2MjUgNy41IEMgNS43NDYwOTQgOC4xMjg5MDYgOC42NDQ1MzEgOC41NjI1IDEyIDguNTYyNSBDIDE1LjM1OTM3NSA4LjU2MjUgMTguMjUgOC4xMjg5MDYgMTkuNTkzNzUgNy41IEMgMjAuMTAxNTYzIDcuMjU3ODEzIDIwLjQwNjI1IDcgMjAuNDA2MjUgNi43MTg3NSBMIDIwLjQwNjI1IDUuMzQzNzUgQyAyMC40MDYyNSA0LjU5NzY1NiAxOC4zNzg5MDYgMy45NDkyMTkgMTUuNSAzLjY1NjI1IEwgMTUuNSAwLjgxMjUgQyAxNS41IDAuMzQ3NjU2IDE1LjEyMTA5NCAtMC4wMzEyNSAxNC42NTYyNSAtMC4wMzEyNSBaIE0gOS44NzUgMS41IEwgMTMuODQzNzUgMS41IEMgMTMuOTI5Njg4IDEuNSAxMy45Njg3NSAxLjkwMjM0NCAxMy45Njg3NSAyLjQwNjI1IEwgMTMuOTY4NzUgMy41MzEyNSBDIDEzLjMzMjAzMSAzLjUgMTIuNjg3NSAzLjQ2ODc1IDEyIDMuNDY4NzUgQyAxMS4yODkwNjMgMy40Njg3NSAxMC41OTM3NSAzLjQ5NjA5NCA5LjkzNzUgMy41MzEyNSBMIDkuNzE4NzUgMy41NjI1IEwgOS43MTg3NSAyLjQwNjI1IEMgOS43MTg3NSAxLjkwMjM0NCA5Ljc5Mjk2OSAxLjUgOS44NzUgMS41IFogTSA0Ljc4MTI1IDkuNTMxMjUgQyA0LjY5MTQwNiA5LjYyNSA0LjY0NDUzMSA5LjcxMDkzOCA0LjYyNSA5LjgxMjUgTCA0LjYyNSA5Ljg3NSBDIDQuNjI1IDkuODkwNjI1IDQuNjIxMDk0IDkuOTI1NzgxIDQuNjI1IDkuOTM3NSBMIDUuMTg3NSAyMS42ODc1IEMgNS4yMzgyODEgMjIuNjA5Mzc1IDYuMzA0Njg4IDI0IDEyIDI0IEMgMTcuNjk1MzEzIDI0IDE4Ljc2MTcxOSAyMi42MDkzNzUgMTguODEyNSAyMS42ODc1IEwgMTkuMzc1IDkuOTM3NSBDIDE5LjM3NSA5LjkyMTg3NSAxOS4zNzUgOS44OTA2MjUgMTkuMzc1IDkuODc1IEwgMTkuMzc1IDkuODEyNSBDIDE5LjM1OTM3NSA5LjcxMDkzOCAxOS4zMDg1OTQgOS42MjUgMTkuMjE4NzUgOS41MzEyNSBDIDE4LjQ4NDM3NSAxMC4yNzczNDQgMTUuNTI3MzQ0IDEwLjM3NSAxMiAxMC4zNzUgQyA4LjQ3MjY1NiAxMC4zNzUgNS41MTk1MzEgMTAuMjc3MzQ0IDQuNzgxMjUgOS41MzEyNSBaIj48L3BhdGg+PC9zdmc+"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};


