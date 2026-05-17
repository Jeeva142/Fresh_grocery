import { useState } from "react";

import Navbar from "../components/Navbar";

import API from "../services/api";


function AddProduct() {
    

    const [product, setProduct] = useState({
        name: "",
        price: "",
        imageUrl: ""
    });

    const addProduct = async () => {

        await API.post("/api/products", product);

        alert("Product Added");

        setProduct({
            name: "",
            price: "",
            imageUrl: ""
        });
    };

    return (

        <div>

            <Navbar />

            <div className="p-6 max-w-xl mx-auto">

                <h1 className="text-3xl font-bold mb-6">
                    Add Product
                </h1>

                <input
                    type="text"
                    placeholder="Product Name"
                    value={product.name}
                    onChange={(e) =>
                        setProduct({
                            ...product,
                            name: e.target.value
                        })
                    }
                    className="border p-3 w-full mb-4 rounded"
                />

                <input
                    type="number"
                    placeholder="Price"
                    value={product.price}
                    onChange={(e) =>
                        setProduct({
                            ...product,
                            price: e.target.value
                        })
                    }
                    className="border p-3 w-full mb-4 rounded"
                />

                <input
                    type="text"
                    placeholder="Image URL"
                    value={product.imageUrl}
                    onChange={(e) =>
                        setProduct({
                            ...product,
                            imageUrl: e.target.value
                        })
                    }
                    className="border p-3 w-full mb-4 rounded"
                />

                <button
                    onClick={addProduct}
                    className="bg-black text-white px-6 py-3 rounded"
                >
                    Add Product
                </button>

            </div>

        </div>
    );
}

export default AddProduct;