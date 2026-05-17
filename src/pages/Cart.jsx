import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import API from "../services/api";

import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Cart() {

    const [cartItems, setCartItems] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetchCart();
    }, []);

    const fetchCart = async () => {

        const response = await API.get("/api/cart");

        setCartItems(response.data);
    };

    const updateQuantity = (id, type) => {

    const updatedCart = cartItems.map((item) => {

        if (item.id === id) {

            if (type === "inc") {
                return {
                    ...item,
                    quantity: item.quantity + 1
                };
            }

            if (type === "dec" && item.quantity > 1) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                };
            }
        }

        return item;
    });

    setCartItems(updatedCart);
};

    const getTotal = () => {

        let total = 0;

        cartItems.forEach((item) => {
            total += item.price * item.quantity;
        });

        return total;
    };

    const removeItem = (id) => {

    const updatedCart = cartItems.filter(
        (item) => item.id !== id
    );

    setCartItems(updatedCart);
};



    return (

        <div>

            <Navbar />

            <div className="p-6">

                <h1 className="text-3xl font-bold mb-6">
                    My Cart
                </h1>

                {
                    cartItems.map((item) => (

                        <div
                            key={item.id}
                            className="bg-white shadow p-4 rounded mb-4"
                        >

                            <h2 className="text-xl font-bold">
                                {item.productName}
                            </h2>

                            <p>
                                Quantity: {item.quantity}
                            </p>
                            <div className="flex gap-3 mt-3">

    <button
        className="bg-gray-300 px-3 py-1 rounded"
        onClick={() => updateQuantity(item.id, "dec")}
    >
        -
    </button>

    <span>{item.quantity}</span>

    <button
        className="bg-gray-300 px-3 py-1 rounded"
        onClick={() => updateQuantity(item.id, "inc")}
    >
        +
    </button>

    <button
    className="bg-red-500 text-white px-4 py-2 rounded mt-3"
    onClick={() => removeItem(item.id)}
>
    Remove
</button>

</div>

                            <p className="text-green-600 font-bold">
                                ₹ {item.price}
                            </p>

                        </div>
                    ))
                }

                <h2 className="text-2xl font-bold mt-6">
                    Total: ₹ {getTotal()}
                </h2>

               <button
    className="bg-black text-white px-6 py-3 rounded mt-4"
    onClick={() => navigate("/checkout")}
>
    Proceed To Payment
</button>

            </div>
            
<Footer/>
        </div>
    );
}

export default Cart;