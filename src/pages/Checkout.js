import React from 'react';

import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from '../components/CheckoutForm';

const Checkout = () => {
    const stripePromise = loadStripe('pk_live_51JBp6BFdjGfYcejFaBa6bj1B8DGbCILTTWyR4rPEufaJOjcZ3quCBPzk1CM9JTuTAP8H9arjF3BFuuGgBQZMWihA00NRz1CMiO');

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
