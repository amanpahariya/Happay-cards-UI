import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {RiShoppingCart2Line} from "react-icons/all";
import {GetCartItem} from "../../Utils/Store";

function CartBadge(props) {

    const data = useContext(GetCartItem);

    const totalItem = () => {
        let count = 0;
        if (data[0] !== null) {
            for (const i of data) {
                count += i.quantity;
            }
        }
        return count
    }
    return (
        <>
            <Link to={'/cart'} className={"cart"}>
                <RiShoppingCart2Line size={29} color={"#000"}/>
                {
                    totalItem() !== 0 && <span className={"cart-item"}>{totalItem()}</span>
                }
            </Link>
        </>
    );
}

export default CartBadge;