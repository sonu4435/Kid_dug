// pages/privacy.tsx
"use client";

import { Button } from '@/components/ui/button';

const PrivacyPolicyPage: React.FC = () => {
    const handleOnclick = () => {
        window.alert("This policy is conditional");
    }
    return (
        <div className=' h-auto w-screen bg-slate-900'>
            <div className='container mx-auto relative top-20 '>
                <h1 className="text-3xl container mx-auto font-semibold">Welcome to our Exclusive VIP Membership Program!</h1>
                <div className="shadow-md rounded-lg p-10">
                    <p className="mb-4">
                        By accessing or using our services, you agree to be bound by the following terms and conditions:
                    </p>
                    <h2 className="text-xl font-semibold mb-2">Free Trial Offer:</h2>
                    <p className="mb-4">
                        Upon signing up, you are eligible for a 7-day free trial of our Exclusive VIP Membership. During this trial period, you will enjoy unrestricted access to all premium features and benefits.
                    </p>
                    <h2 className="text-xl font-semibold mb-2">Automatic Enrollment:</h2>
                    <p className="mb-4">
                        At the end of the free trial period, unless you cancel your membership, you will be automatically enrolled in our Exclusive VIP Membership program.
                    </p>
                    <h2 className="text-xl font-semibold mb-2">Recurring Payments:</h2>
                    <p className="mb-4">
                        By providing your payment information, you authorize us to charge your credit card a monthly subscription fee of $99.99 for continued access to our Exclusive VIP Membership.
                    </p>
                    <h2 className="text-xl font-semibold mb-2">Cancellation Policy:</h2>
                    <p className="mb-4">
                        You may cancel your membership at any time by contacting our customer support team. However, to avoid being charged for the next billing cycle, cancellations must be made at least 24 hours before the end of your current subscription period.
                    </p>
                    <h2 className="text-xl font-semibold mb-2">No Refunds:</h2>
                    <p className="mb-4">
                        All subscription fees are non-refundable. Upon cancellation, you will continue to have access to our Exclusive VIP Membership until the end of your current billing cycle.
                    </p>
                    <h2 className="text-xl font-semibold mb-2">Changes to Terms:</h2>
                    <p className="mb-4">
                        We reserve the right to modify these terms and conditions at any time without prior notice. Continued use of our services after such modifications constitutes your acceptance of the revised terms.
                    </p>
                    <h2 className="text-xl font-semibold mb-2">Limited Liability:</h2>
                    <p>
                        We shall not be liable to you or any third party for any modification, suspension, or discontinuation of our services, or for any damages arising out of your use of or inability to use our services.
                    </p>
                    <div className='w-full h-auto flex items-center justify-center'>
                        <Button variant="destructive" className='uppercase bg-pink-600' onClick={handleOnclick}>Check Safe or not</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
