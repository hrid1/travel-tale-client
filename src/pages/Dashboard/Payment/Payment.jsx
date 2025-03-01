import React from "react";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import UseAxiosPublic from "../../../hooks/UseAxiosPublic";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  const { id } = useParams() || {};
  console.log(id);
  const axiosSecure = useAxiosSecure();
  //   const axiosPublic = UseAxiosPublic();

  const { data: trip } = useQuery({
    queryKey: ["trip", id],
    queryFn: async () => {
      try {
        const { data } = await axiosSecure.get(`/booking/trip/${id}`);
        return data;
      } catch (err) {
    // console.log(err);
      }
    },
  });

  console.log(trip);

  return (
    <div>
      <div className="text-center py-8">
        <h3 className="text-2xl font-bold text-teal-600">Payment Page</h3>
        <p className="text-gray-500 mt-2">
          Easily and securely complete your payment to confirm your order.
        </p>
      </div>

      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm trip={trip} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
