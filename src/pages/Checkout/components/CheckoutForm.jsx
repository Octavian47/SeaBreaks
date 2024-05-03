import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import {useState} from "react";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }
        setIsLoading(true);

        const result = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            confirmParams: {
                return_url: "http://localhost:5173",
            },
        });


        if (result.error) {
            // Show error to your customer (for example, payment details incomplete)
            setMessage(result.error.message);
        } else {
            setMessage("An unexpected error occurred.");
        }
        setIsLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            {message && <div id="payment-message">{message}</div>}
            <button disabled={isLoading || !stripe || !elements} className={'checkout-btn'}>
                  <span id="button-text">
                {isLoading ? <div className="spinner" id="spinner"></div> : "Proceed To Checkout"}
                </span>
            </button>
        </form>
    )
};

export default CheckoutForm;