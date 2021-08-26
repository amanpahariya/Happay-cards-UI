import React, {createContext, useState} from 'react';
import {addToCart, getData, stringToJson} from "./Utils";


const GetCartItem = createContext();
const SetCartItem = createContext();


const SetAddToCart = createContext();

function Store({children}) {
    const [getCartItem, setCartItem] = useState(stringToJson(getData() && getData()));

    // const [getAddToCart, setAddToCart] = useState(addToCart() && addToCart());

    const setAddToCart = (id, quantity, name, final_price, original_price) => {
        addToCart(id, quantity, name, final_price, original_price);
        setCartItem(stringToJson(getData() && getData()));
    }


    return (
        <GetCartItem.Provider value={getCartItem}>
            <SetCartItem.Provider value={setCartItem}>
                {/*<GetAddToCart.Provider value={getAddToCart}>*/}
                <SetAddToCart.Provider value={setAddToCart}>
                    {children}
                </SetAddToCart.Provider>
                {/*</GetAddToCart.Provider>*/}
            </SetCartItem.Provider>
        </GetCartItem.Provider>
    )
}

export default Store;
export {GetCartItem, SetCartItem, SetAddToCart};
