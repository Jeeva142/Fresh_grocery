import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin
} from "react-icons/fa";

function Footer() {

    return (

        <footer className="bg-black text-white mt-10">

            <div className="max-w-7xl mx-auto px-6 py-10">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand */}
                    <div>

                        <h2 className="text-2xl font-bold mb-4">
                            FreshCart
                        </h2>

                        <p className="text-gray-400">
                            Fresh products delivered quickly with modern
                            e-commerce experience.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div>

                        <h3 className="text-xl font-semibold mb-4">
                            Quick Links
                        </h3>

                        <ul className="space-y-2 text-gray-400">

                            <li>Home</li>
                            <li>Cart</li>
                            <li>Wishlist</li>
                            <li>Orders</li>

                        </ul>

                    </div>

                    {/* Contact */}
                    <div>

                        <h3 className="text-xl font-semibold mb-4">
                            Contact
                        </h3>

                        <ul className="space-y-2 text-gray-400">

                            <li>Email: freshcart@gmail.com</li>
                            <li>Phone: +91 9876543210</li>
                            <li>Erode, Tamil Nadu</li>

                        </ul>

                    </div>

                    {/* Social Icons */}
                    <div>

                        <h3 className="text-xl font-semibold mb-4">
                            Follow Us
                        </h3>

                        <div className="flex gap-4 text-2xl">

                            <FaFacebook className="hover:text-blue-500 cursor-pointer" />

                            <FaInstagram className="hover:text-pink-500 cursor-pointer" />

                            <FaTwitter className="hover:text-blue-400 cursor-pointer" />

                            <FaLinkedin className="hover:text-blue-600 cursor-pointer" />

                        </div>

                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">

                    © 2026 FreshCart. All rights reserved.

                </div>

            </div>

        </footer>
    );
}

export default Footer;