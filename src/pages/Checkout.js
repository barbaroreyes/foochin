import React from 'react'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "../components/CheckoutForm";

const Checkout = () => {
    const stripePromise = loadStripe('pk_test_51JBp6BFdjGfYcejFEt3mjBAIJKsaYio3ADiLrKcPF8Tqwoz8sJ2FxSdvqkijkMABI7DwNWjtvCJy2D7KjZAIkS0d00ZqwvCfb7');

    return (
        <section className="checkout-wrapper tc">
            {/* <AmplifyAuthenticator> */}
                <Elements stripe={stripePromise}>
                    <section>
                        <h2>Checkout</h2>
                        <CheckoutForm />
                    </section>
                </Elements>
            {/* </AmplifyAuthenticator> */}
        </section>
    )
}

export default Checkout
