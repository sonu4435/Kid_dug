import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";
const stripe = new Stripe(key, {
  apiVersion: "2023-10-16"
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);
  try {
    if (body.length > 0) {
      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        line_items: body.map((Item: any) => {
          return {
            price_data: {
              currency: "inr",
              recurring: {
                interval: "month"
              },
              product_data: {
                name: Item.name,
                description: Item.desc,
                images: Item.image,
                metadata: {
                  order_id: "6735"
                }
              },
              unit_amount: Item.price * 100
            },
            quantity: 1
          };
        }),
        success_url: `${req.headers.get(
          "origin"
        )}/?success=true?&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.get("origin")}/?canceled=true`
      });
      
      return NextResponse.json({ session });
    } else {
      NextResponse.json({ message: "Please select a package" });
    }
  } catch (err: any) {
    console.log(err);
    return NextResponse.json(err.message);
  }
}