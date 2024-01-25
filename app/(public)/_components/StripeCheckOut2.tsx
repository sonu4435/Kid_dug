"use client";
import getStripePromise from "@/lib/stripe";

const StripeCheckoutButton2 = () => {

  const handleCheckout = async () => {
    const stripe = await getStripePromise();
    const item = [
      {
        name: "Enterprise",
        desc: "Explore our Enterprise Plans for customizable and scalable educational solutions. Elevate your organization's learning experience with advanced features, personalized support, and seamless integration. Contact us to discuss how we can optimize learning for your enterprise needs.",
        image: [
          "https://media.licdn.com/dms/image/D4D12AQFoUItEAoIj5Q/article-cover_image-shrink_423_752/0/1673551479964?e=1706745600&v=beta&t=TKdPSWuDCDpqzqa7b9bU_n4z0olmhjoOr_7pxl8W3Lw"
        ],
        price: 999,
        quantity: 1
      }
    ];
    const response = await fetch("/api/stripe-session2/", {
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

export default StripeCheckoutButton2;
