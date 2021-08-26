import React, {useContext, useEffect, useState} from 'react';
import {AiOutlineInfoCircle, BiMinus, BiPlus, HiArrowNarrowLeft} from "react-icons/all";
import './Cart.scss';
import {Link} from "react-router-dom";
import {GetCartItem, SetAddToCart} from "../../Utils/Store";
import Header from "../Header/Header";

function Cart() {
    const [cart, setCart] = useState([]);

    const getcartItem = useContext(GetCartItem);
    const setAddToCart = useContext(SetAddToCart);


    useEffect(() => {

        if (getcartItem[0] !== null) {
            setCart(getcartItem);
        }
    }, [])
    useEffect(() => {

        if (getcartItem[0] !== null) {
            setCart(getcartItem);
        }
    }, [getcartItem])

    const getSaving = () => {
        let saving = 0;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].original_price) {
                saving = saving + (cart[i].original_price - cart[i].final_price) * cart[i].quantity;
            }
        }
        return saving
    }

    const TotalAmount = () => {
        let amount = 0;
        for (const i of cart) {
            amount += i.final_price * i.quantity;
        }
        return amount;
    }

    const updateCart = (id, quantity, name, final_price, original_price) => {
        setAddToCart(id, quantity, name, final_price, original_price);
    }


    return (
        <>
            <Header/>
            <section className={"container summary-container pt-4"}>
                <div className="row mb-4">
                    <div className="col-12">
                        <Link to={'/'} className={"text-secondary text-decoration-none d-flex align-items-center"}>
                            <HiArrowNarrowLeft size={28} className={"fw-bold"}/>
                            <span>Back to Home</span>
                        </Link>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className={"col-8"}>
                        <h3>Order Summary ({cart.length} items)</h3>
                    </div>
                </div>
                <div className="row order-summary">
                    <div className="col-7 left-container">
                        <div className="card w-100 bg-light py-4 px-2">
                            <div className="card-body">
                                <div className="card-title">
                                    <ul className={"row list-unstyled px-3 fw-bold"}>
                                        <li className={"col-3 text-center px-0"}>S.NO.</li>
                                        <li className={"col-5 px-0"}>ITEMS</li>
                                        <li className={"col-3 text-center px-0"}>QTY</li>
                                    </ul>
                                    <hr/>
                                </div>
                                <div>
                                    {
                                        cart.length > 0 && cart.map((e, i) => {
                                            return (
                                                e.quantity > 0
                                                    ? <div key={i} className={"py-2"}>
                                                        <ul className={"row list-unstyled px-3 d-flex align-items-center"}>
                                                            <li className={"col-3 text-center px-0"}>{i + 1}</li>
                                                            <li className={"col-5 px-0"}>{e.name}</li>
                                                            <li className={"col-3 text-center px-0"}>
                                                                <div className={"d-grid counter"}>
                                                                    <button className={"btn bg-secondary text-center"}
                                                                            onClick={() => {
                                                                                updateCart(e.id, e.quantity - 1, e.name, e.final_price, e.original_price);
                                                                            }}><BiMinus/></button>
                                                                    <span
                                                                        className={"text-center border-secondary"}>{e && e.quantity}</span>
                                                                    <button className={"btn bg-secondary text-center"}
                                                                            onClick={() => {
                                                                                updateCart(e.id, e.quantity + 1, e.name, e.final_price, e.original_price);
                                                                            }}>
                                                                        <BiPlus/>
                                                                    </button>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div> : <></>
                                            )
                                        })
                                    }
                                </div>
                                <hr/>
                                <div className="px-2">
                                    <Link to={'/'}
                                          className={"text-decoration-none d-flex align-items-center text-primary fw-bold"}>
                                        <BiPlus/>
                                        <span>Add more items</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-5 right-container">
                        <div className="card billing-card w-100 py-4 px-2">
                            <div className="card-body">
                                <div className="card-title">
                                    <ul className={"row list-unstyled px-3 fw-bold"}>
                                        <li className={"col-6 px-0 f-18"}>Price Details</li>
                                    </ul>
                                    <hr/>
                                </div>
                                {
                                    cart && cart.map((e, i) => {
                                        return (
                                            e.quantity > 0 ? <div key={i} className={"row py-3"}>
                                                <div className={"col-6"}>
                                                    {e.quantity} X
                                                    ${e.original_price ? parseFloat(e.original_price).toFixed(2) : parseFloat(e.final_price).toFixed(2)}
                                                </div>
                                                <div className={"col-6 d-flex justify-content-end"}>
                                                    ${e.original_price ? parseFloat(e.quantity * e.original_price).toFixed(2) : parseFloat(e.quantity * e.final_price).toFixed(2)}
                                                </div>
                                            </div> : <></>
                                        )
                                    })
                                }
                                <hr/>
                                <div>
                                    <div className={"row py-1"}>
                                        <div className={"col-6"}>
                                            <p>Total saving</p>
                                        </div>
                                        <div className={"col-6 d-flex justify-content-end"}>
                                            <p className={"text-success"}>- ${parseFloat(getSaving()).toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <div className={"row py-1"}>
                                        <div className={"col-6"}>
                                            <p>Delivery Fee</p>
                                        </div>
                                        <div className={"col-6 d-flex justify-content-end"}>
                                            <p>${parseFloat(5).toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <div className={"row py-1"}>
                                        <div className={"col-6"}>
                                            <p>
                                                Taxes and Charges
                                                <span className={"mx-1"}>
                                                <AiOutlineInfoCircle/>
                                             </span>
                                            </p>
                                        </div>
                                        <div className={"col-6 d-flex justify-content-end"}>
                                            <p>
                                                ${parseFloat(5).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <div className={"row py-1"}>
                                    <div className={"col-6"}>
                                        <p className={"fw-bold h6 m-0"}>
                                            To Pay
                                        </p>
                                    </div>
                                    <div className={"col-6 d-flex justify-content-end"}>
                                        <p className={"h5 fw-bold"}>
                                            ${parseFloat(TotalAmount()).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                                <button className={"btn btn-primary w-100"}>Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart;