function getData() {
    return window.localStorage.getItem("cart")
}

function stringToJson(updateData) {
    return JSON.parse("[" + updateData + "]");
}


const addToCart = (id, val, name, final_price, original_price) => {
    const updateData = getData();
    if (updateData !== null) {
        const cart = stringToJson(updateData);
        const data = cart.indexOf(cart.find((item) => item.id === id));
        if (data !== -1) {
            cart[data].quantity = val;
            window.localStorage.setItem("cart", JSON.stringify(cart).replace('[', '').replace(']', ''));
        } else {
            cart.push({id: id, name: name, final_price: final_price, quantity: val, original_price: original_price})
            window.localStorage.setItem("cart", JSON.stringify(cart).replace('[', '').replace(']', ''));
        }
    } else {
        window.localStorage.setItem("cart", JSON.stringify({
            id: id,
            name: name,
            final_price: final_price,
            quantity: val,
            original_price: original_price
        }));
    }
}

export {getData, addToCart, stringToJson};