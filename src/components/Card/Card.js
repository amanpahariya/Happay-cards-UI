import React, {useContext, useEffect, useState} from 'react';
import './Card.scss';
import {BiMinus, BiPlus} from "react-icons/all";
import { getData} from "../../Utils/Utils";
import {GetCartItem, SetAddToCart} from '../../Utils/Store'

function Card(props) {
    const {item} = props;
    const getcartItem = useContext(GetCartItem);
    const setAddToCart = useContext(SetAddToCart);
    const [quantity, setQuantity] = useState(0);


    useEffect(() => {

        if (getcartItem[0] !== null) {
            const data = getcartItem.indexOf(getcartItem.find((e) => e.id === item.id));
            if (data !== -1) {
                setQuantity(getcartItem[data].quantity);
            }
        }
    }, [item.id])


    const updateCart = (id, quantity, name, final_price, original_price) => {
        setAddToCart(id, quantity, name, final_price, original_price);
    }


    return (
        <div className={"card-container p-4"}>
            <img src={item.img_url} alt={item.name}/>
            <div className={"pt-3 px-2"}>
                <div className={"d-flex justify-content-between"}>
                    <div>
                        <p className={"text-capitalize fw-bold"}>{item.name}</p>
                    </div>
                    <div>
                    <span>
                        {
                            item.original_price ? <strike
                                className={"fw-bold text-light-secondary"}>$ {parseFloat(item.original_price).toFixed(2)}</strike> : <></>
                        }
                    </span>
                        <span className={"fw-bold ms-2 f-18"}>
                       ${parseFloat(item.final_price).toFixed(2)}
                    </span>

                    </div>
                </div>
                <div className="text-secondary">
                    {item.description}
                </div>
            </div>
            <div className={"my-3 px-2"}>
                {
                    quantity === 0
                        ? <button
                            className={"btn btn-outline-primary w-100"}
                            onClick={() => {
                                setQuantity(quantity + 1);
                                updateCart(item.id, quantity + 1, item.name, item.final_price, item.original_price);
                            }}
                        >Add to cart
                        </button>
                        : <div className={"d-grid counter"}>
                            <button className={"btn"} onClick={() => {
                                setQuantity(quantity - 1);
                                updateCart(item.id, quantity - 1, item.name, item.final_price, item.original_price);
                            }}>
                                <BiMinus/>
                            </button>
                            <span className={"text-center"}>{quantity}</span>
                            <button className={"btn"} onClick={() => {
                                setQuantity(quantity + 1);
                                updateCart(item.id, quantity + 1, item.name, item.final_price, item.original_price);
                            }}>
                                <BiPlus/>

                            </button>
                        </div>
                }
            </div>
        </div>
    );
}

export default Card;