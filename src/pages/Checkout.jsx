import { useLocation, useNavigate } from "react-router-dom";

import API from "../services/api";
import Footer from "../components/Footer";

function Checkout() {

    const location = useLocation();

    const navigate = useNavigate();

    // Buy Now Product
    const product = location.state?.product;

    // Cart Products
    const cartItems = location.state?.cartItems;

    const handlePayment = async () => {

        try {

            // ✅ BUY NOW FLOW
            if (product) {

                await API.post("/api/orders", {

                    productName: product.name,
                    imageUrl: product.imageUrl,
                    price: product.price,
                    quantity: 1
                });
            }

            // ✅ CART FLOW
            if (cartItems) {

                for (const item of cartItems) {

                    await API.post("/api/orders", {

                        productName: item.productName,
                        imageUrl: item.imageUrl,
                        price: item.price,
                        quantity: item.quantity
                    });
                }
            }

            alert("Payment Successful");

            navigate("/orders");

        } catch (error) {

            console.log(error);
        }
    };

    return (

        <div className="p-10">

            <h1 className="text-3xl font-bold mb-6">
                Payment Page
            </h1>

            {/* BUY NOW PRODUCT */}
            {
                product && (

                    <div className="border p-6 rounded mb-6 w-96">

                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full h-60 object-cover rounded"
                        />

                        <h2 className="text-2xl font-bold mt-4">
                            {product.name}
                        </h2>

                        <p className="text-green-600 font-bold mt-2">
                            ₹{product.price}
                        </p>

                    </div>
                )
            }

            {/* CART PRODUCTS */}
            {
                cartItems && cartItems.map((item) => (

                    <div
                        key={item.id}
                        className="border p-4 rounded mb-4 w-96"
                    >

                        <img
                            src={item.imageUrl}
                            alt={item.productName}
                            className="w-full h-40 object-cover rounded"
                        />

                        <h2 className="text-xl font-bold mt-2">
                            {item.productName}
                        </h2>

                        <p className="text-green-600 font-bold">
                            ₹{item.price}
                        </p>

                        <p>
                            Quantity: {item.quantity}
                        </p>

                    </div>
                ))
            }

            {/* PAYMENT FORM */}
            <div className="border p-6 rounded w-96 mt-6">

                <input
                    type="text"
                    placeholder="Card Number"
                    className="border p-2 w-full mb-4"
                />

                <input
                    type="text"
                    placeholder="Card Holder Name"
                    className="border p-2 w-full mb-4"
                />

                <button
                    onClick={handlePayment}
                    className="bg-green-600 text-white px-6 py-3 rounded w-full"
                >
                    Pay Now
                </button>

            </div>
<Footer/>
        </div>
    );
}

export default Checkout;