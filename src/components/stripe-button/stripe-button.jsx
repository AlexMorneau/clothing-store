import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51J0rgwH869fdQuYZEL8d9CqXt8ibxFZP2qwMCkHdmYvTYKpVGHbWGWNbth775fNFE7ys907AJFtNguKx4kZ8rnR200sNrYRu42';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        // Stripe github repo features all these attributes with their descriptions
        <StripeCheckout
            label='Pay Now'
            name='Clothing Store'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey} />
    );
}

export default StripeCheckoutButton;
