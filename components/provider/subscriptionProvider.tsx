"use client";

export default function SubscriptionProvider(session : Object) {
    const StripeObject = session;
    console.log(StripeObject);
    return StripeObject
}
