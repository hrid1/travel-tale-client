import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const CheckoutForm = ({ trip }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transectionId, setTransactionId] = useState("");
  const axiosSecure = useAxiosSecure();

  const totalPrice = trip?.price;

  console.log(totalPrice);
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("Payment Error", error);
      setError(error);
    } else {
      console.log("Payment Method", paymentMethod);
      setError("");
    }

    //confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: trip?.toristEmail,
          },
        },
      });

    if (confirmError) {
      console.log("confirm error", confirmError);
    } else {
      console.log(paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
      }
      //save to the backend
      const payment = {
        name: trip?.tourist,
        email: trip?.toristEmail,
        bookingId: trip?._id,
        price: trip?.price,
        transaction_id: paymentIntent.id,
        date: new Date(),
      };

      try {
        const { data } = await axiosSecure.post("/payments", payment);
        console.log(data);
        if (data?.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Payment Successful",
            text: `Transaction ID: ${paymentIntent.id}`,
          });
        }
      } catch (err) {
        console.log(err);
      }

      try {
        const data = await axiosSecure.patch(`booking/status/${trip?._id}`, {
          status: "Review",
        });
        //   console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <form
      className="w-96 md:w-2/3 mx-auto my-6 bg-green-50 p-2 md:p-5 rounded-md"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center justify-between my-4 font-bold">
        <h3>Email: {trip?.toristEmail}</h3> <h3>$ {trip?.price}</h3>
      </div>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "18px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        disabled={!stripe || !clientSecret}
        className="btn btn-sm bg-green-500 text-white my-2.5 w-full md:w-1/2"
      >
        Pay
      </button>
      <p className="text-sm text-red-600 font-semibold ">{error.message}</p>
      {transectionId && (
        <p className="text-sm text-blue-600  mt-4">
          Transection ID: {transectionId}
        </p>
      )}
    </form>
  );
};

export default CheckoutForm;
