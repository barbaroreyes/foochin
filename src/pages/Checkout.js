import React from 'react';

import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from '../components/CheckoutForm';

const Checkout = () => {
    const stripePromise = loadStripe('pk_live_51JAGizDcnFjzr079npT2KNtNhm1aVdxPMHZqDdkdh3D0ztQEUTwJMMso9RJsn7C9BcVnxMtmgeecsGkwwHq1adAz00ZMUdCgL4');

    return (
        <section className="checkout-wrapper tc pa2">
            <AmplifyAuthenticator>
                <Elements stripe={stripePromise}>
                    <section>
                        <h2>Checkout</h2>
                        <CheckoutForm />
                    </section>
                </Elements>
            </AmplifyAuthenticator>
        </section>
    )
}

export default Checkout
