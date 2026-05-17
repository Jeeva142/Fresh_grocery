import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import ProductCard from "../components/ProductCard";

import API from "../services/api";

import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

function Home() {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {

        const response = await API.get("/api/products");

        setProducts(response.data);
    };

    const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
);


    const addToCart = async (product) => {

        await API.post("/api/cart", {
            productName: product.name,
            quantity: 1,
            price: product.price
        });

        alert("Added To Cart");
    };

    
    return (

        <div>

            <Navbar />

            <div className="p-6">


            <SearchBar
                search={search}
                setSearch={setSearch}
              />
                <h1 className="text-3xl font-bold mb-6">
                    Fresh Products
                </h1>

                <div className="flex gap-6 flex-wrap">

                    {
                        filteredProducts.map((product) => (

                            <ProductCard
                                key={product.id}
                                product={product}
                                addToCart={addToCart}
                            />

                            
                        ))
                    }

                </div>
                

            </div>
<Footer />
        </div>
    );
}

export default Home;