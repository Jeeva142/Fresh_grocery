import Navbar from "../components/Navbar";

function Payment() {

    const payNow = () => {

        alert("Payment Success");

    };

    return (

        <div>

            <Navbar />

            <div className="p-6">

                <h1 className="text-3xl font-bold mb-6">
                    Payment
                </h1>

                <input
                    className="border p-3 w-full mb-4"
                    placeholder="Card Number"
                />

                <input
                    className="border p-3 w-full mb-4"
                    placeholder="Card Holder Name"
                />

                <input
                    className="border p-3 w-full mb-4"
                    placeholder="CVV"
                />

                <button
                    className="bg-black text-white px-6 py-3 rounded"
                    onClick={payNow}
                >
                    Pay Now
                </button>

            </div>

        </div>
    );
}

export default Payment;