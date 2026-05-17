import { Link, useNavigate } from "react-router-dom";

import API from "../services/api";

import { FaHeart } from "react-icons/fa";

function ProductCard({ product, addToCart }) {

    const navigate = useNavigate();

    // ✅ Add To Wishlist
    const addToWishlist = async (e) => {

        e.preventDefault();

        try {

            await API.post("/api/wishlist", {

                productName: product.name,
                imageUrl: product.imageUrl,
                price: product.price

            });

            alert("Added To Wishlist");

        } catch (error) {

            console.log(error);
        }
    };

    // ✅ Buy Now
    const handleBuyNow = (e) => {

        e.preventDefault();

        navigate("/checkout", {

            state: {
                product: product
            }
        });
    };

    return (

        <Link to={`/product/${product.id}`}>

            <div className="bg-white shadow-lg rounded-xl p-4 w-64 hover:scale-105 transition duration-300">

                {/* Product Image */}
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg"
                />

                {/* Product Name */}
                <h3 className="text-xl font-bold mt-4">
                    {product.name}
                </h3>

                {/* Product Price */}
                <p className="text-green-600 font-bold text-lg mt-2">
                    ₹{product.price}
                </p>

                {/* Buttons */}
                <div className="flex flex-col gap-3 mt-4">

                    {/* Add To Cart */}
                    <button
                        className="bg-black text-white px-4 py-2 rounded"
                        onClick={(e) => {

                            e.preventDefault();

                            addToCart(product);
                        }}
                    >
                        Add To Cart
                    </button>

                    {/* Buy Now */}
                    <button
                        className="bg-green-600 text-white px-4 py-2 rounded"
                        onClick={handleBuyNow}
                    >
                        Buy Now
                    </button>

                </div>

                {/* Wishlist Icon */}
                <div className="flex justify-end mt-4">

                    <button onClick={addToWishlist}>

                        <FaHeart
                            className="text-2xl text-pink-500 hover:scale-125 transition"
                        />

                    </button>

                </div>

            </div>

        </Link>
    );
}

export default ProductCard;