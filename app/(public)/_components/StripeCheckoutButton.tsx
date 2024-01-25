"use client";
import getStripePromise from "@/lib/stripe"

const StripeCheckoutButton = () => {

  const handleCheckout = async () => {
    const stripe = await getStripePromise();
    const item = [
      {
        name: "Basic Pack",
        desc: "Subscribe to our Basic Plan at just 499/month for unlimited access to advanced animal content, Smart Quiz Generator, and Language Translation. Unleash the power of knowledge effortlessly – upgrade now and embrace a smarter way to learn!",
        image: [
          "https://plus.unsplash.com/premium_photo-1663045673842-fbe0f7a751c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        price: 450,
        quantity: 1
      }
    ];
    const response = await fetch("/api/stripe-session/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(item)
    });
    const data = await response.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
  };

  return (
    <a
      href="#"
      onClick={handleCheckout}
      className=" bg-green-400 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 uppercase text-center dark:text-white  dark:focus:ring-primary-900"
    >
      Purchese Now
    </a>
  );
};

export default StripeCheckoutButton;
