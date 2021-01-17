import React, {useEffect} from 'react';

// @ts-ignore
import Currency from 'react-currency-formatter';
import {RenderPizza} from "../types";


export const Item: React.FC<RenderPizza> = (props) => {


    useEffect(() => {
        // code to run on component mount
        if (props.last.index === props.last.ItemsArrayLenght) {
            // @ts-ignore
            function preloadImages(sources, callback) {
                let counter = 0;

                function onLoad() {
                    counter++;
                    if (counter === sources.length) callback();
                }

                for (let source of sources) {
                    let img = document.createElement('img');
                    img.onload = img.onerror = onLoad;
                    img.src = source;
                }
            }

            let sources = [
                props.data.imageUrl
            ];

            preloadImages(sources, props.last.handleLastItem);


        }

    }, [])

    const onAddPizza = () => {
        props.onAddToCart(props.data)
    }


    return (

        <div className='col-4'>

            <div className="card">
                <div className="card-body justify-content-center text-center">
                    <img className="d-flex" src={props.data.imageUrl} alt=""/>
                    <div className="card-title  ">{props.data.name}</div>
                    <p className="card-text  ">Tomato sauce & mozzarella</p>
                    <div className="flex-row d-flex justify-content-between align-items-center">
                        <div className="d-flex price">

                            <Currency
                                quantity={props.data.price[props.currency]}
                                currency={props.currency}
                            />
                        </div>
                        <div className="d-flex">

                            <button type="button" className="btn btn-primary" onClick={onAddPizza}>Add</button>


                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}


