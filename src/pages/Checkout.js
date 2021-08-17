import React from 'react';

import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from '../components/CheckoutForm';

const Checkout = () => {
    const stripePromise = loadStripe('pk_test_51JAGizDcnFjzr07931545vJHivERPjoBLiHAr6aJjvmU6gAmenz8uN4kn9siIrDUceETs74iXnLiuWYa4eqGjr1900CzhIHtca');

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
