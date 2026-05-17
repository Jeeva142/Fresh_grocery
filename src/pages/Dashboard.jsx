import Navbar from "../components/Navbar";

import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Dashboard() {

    return (

        <div>

            <Navbar />

            <div className="p-6">

                <h1 className="text-3xl font-bold mb-6">
                    Admin Dashboard
                </h1>

                <div className="flex gap-6">

                    <Link to="/add-product">

                        <div className="bg-black text-white p-6 rounded w-60">

                            <h2 className="text-2xl font-bold">
                                Add Product
                            </h2>

                        </div>

                    </Link>

                    <Link to="/orders">

                        <div className="bg-green-600 text-white p-6 rounded w-60">

                            <h2 className="text-2xl font-bold">
                                Orders
                            </h2>

                        </div>

                    </Link>

                </div>

            </div>
<Footer/>
        </div>
    );
}

export default Dashboard;