import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import {useState} from "react";
import paymentValet from "@/pages/Home/assets/img/payment-valet.png";

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
                return_url: "https://react.sea-breaks.com",
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
            <div className="payment-method">
            <PaymentElement />
            </div>
            {message && <div id="payment-message">{message}</div>}
            <div className={'border-white'}></div>
            <button disabled={isLoading || !stripe || !elements} className={'checkout-btn'}>
                {(isLoading)?
                    (
                        <span id="button-text">
                        <div className="spinner" id="spinner"></div>
                        </span>
                    )
                    : (
                        <>
                        <img src={paymentValet} width={'36'}/><span id="button-text"> Proceed To Checkout</span>
                        </>
                    )
                }

            </button>
        </form>
    )
};

export default CheckoutForm;