import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import API from "../services/api";
import Footer from "../components/Footer";

function Orders() {

    const [orders, setOrders] = useState([]);

    // Fetch orders when page loads
    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {

        try {

            const response = await API.get("/api/orders");

            setOrders(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    return (

        <div className="bg-gray-100 min-h-screen">

            <Navbar />

            <div className="p-6">

                <h1 className="text-3xl font-bold mb-8">
                    My Orders
                </h1>

                {
                    orders.length === 0 ? (

                        <div className="text-center mt-20">

                            <h2 className="text-2xl font-semibold text-gray-600">
                                No Orders Found
                            </h2>

                        </div>

                    ) : (

                        <div className="flex flex-col gap-6">

                            {
                                orders.map((order) => (

                                    <div
                                        key={order.id}
                                        className="bg-white shadow-lg rounded-xl p-5 flex gap-6 items-center"
                                    >

                                        {/* Product Image */}
                                        <img
                                            src={order.imageUrl}
                                            alt={order.productName}
                                            className="w-40 h-40 object-cover rounded-lg"
                                        />

                                        {/* Product Details */}
                                        <div className="flex-1">

                                            <h2 className="text-2xl font-bold">
                                                {order.productName}
                                            </h2>

                                            <p className="text-green-600 text-xl font-bold mt-2">
                                                ₹ {order.price}
                                            </p>

                                            <p className="mt-2 text-lg">
                                                Quantity:
                                                <span className="font-bold ml-2">
                                                    {order.quantity}
                                                </span>
                                            </p>

                                            {/* Status Badge */}
                                            <div className="mt-4">

                                                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                                                    {order.status}
                                                </span>

                                            </div>

                                        </div>

                                    </div>
                                ))
                            }

                        </div>
                    )
                }

            </div>
<Footer/>
        </div>
    );
}

export default Orders;