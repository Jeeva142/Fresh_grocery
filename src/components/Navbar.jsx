import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-black text-white p-4">

            <div className="flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-2xl font-bold">
                    FreshCart
                </h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6">
                    <Link to="/">Home</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/wishlist">Wishlist</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/dashboard">Dashboard</Link>
                </div>

                {/* Mobile Button (Hamburger) */}
                <button
                    className="md:hidden text-3xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>

            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="flex flex-col gap-4 mt-4 md:hidden bg-gray-900 p-4 rounded">

                    <Link onClick={() => setOpen(false)} to="/">Home</Link>
                    <Link onClick={() => setOpen(false)} to="/cart">Cart</Link>
                    <Link onClick={() => setOpen(false)} to="/wishlist">Wishlist</Link>
                    <Link onClick={() => setOpen(false)} to="/orders">Orders</Link>
                    <Link onClick={() => setOpen(false)} to="/login">Login</Link>
                    <Link onClick={() => setOpen(false)} to="/dashboard">Dashboard</Link>

                </div>
            )}

        </nav>
    );
}

export default Navbar;