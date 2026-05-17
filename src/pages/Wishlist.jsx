import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Wishlist() {

    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        fetchWishlist();
    }, []);

    const fetchWishlist = async () => {

        const response = await API.get("/api/wishlist");

        setWishlist(response.data);
    };

    const removeWishlist = async (id) => {

        await API.delete(`/api/wishlist/${id}`);

        fetchWishlist();
    };

    return (

        <div>

            <Navbar />

            <div className="p-6">

                <h1 className="text-3xl font-bold mb-6">
                    Wishlist
                </h1>

                {
                    wishlist.length === 0 ? (

                        <p>No items in wishlist</p>

                    ) : (

                        wishlist.map((item) => (

                            <div
                                key={item.id}
                                className="border p-4 mb-4"
                            >

                                <img
                                    src={item.imageUrl}
                                    width="120"
                                    alt={item.productName}
                                />

                                <h3>{item.productName}</h3>

                                <p>₹{item.price}</p>

                                <div className="mt-3">

    <button
        onClick={async () => {

            await API.post("/api/cart", {
                productName: item.productName,
                imageUrl: item.imageUrl,
                price: item.price,
                quantity: 1
            });

            await API.delete(`/api/wishlist/${item.id}`);

            fetchWishlist();

            alert("Moved To Cart");
        }}
        className="bg-green-500 text-white px-4 py-2 rounded mr-2"
    >
        Move To Cart
    </button>

    <button
        onClick={() => removeWishlist(item.id)}
        className="bg-red-500 text-white px-4 py-2 rounded"
    >
        Remove
    </button>

</div>

                            </div>

                        ))
                    )
                }

            </div>
<Footer/>
        </div>
    );
}

export default Wishlist;