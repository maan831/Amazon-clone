import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "./Stateprovider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./Reducer";
import axios from "./Axios";
import { AxiosError } from "axios";
import { db } from "./firebase";
const Payment = () => {
    const stripe = useStripe();
    const elements = useElements();
    const history = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();
  const[succeeded,setsucceeded] = useState(false);
  const[processing,setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientsecret,setClientsecret] = useState("");
  useEffect(()=>{
    const getClientSecret = async()=>{
        const response = await axios({
            method: 'post',
            url:`/payments/create?total=${Math.round(getBasketTotal(basket)) * 100}`
        })
        setClientsecret(response.data.clientsecret);
    }
    getClientSecret();
    console.log("MAI HOON USER",user);
  },[basket])
  console.log("THE SECRET IS >>>",clientsecret);
  const handleSubmit = async(event) => {
     event.preventDefault();
     setProcessing(true);

     const payload = await stripe.confirmCardPayment(clientsecret,{
        payment_method:{
            card: elements.getElement(CardElement)
        }
     }).then(({paymentIntent})=>{
        //payment intent = payment confirmation
        db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set(Object.assign({
            basket:basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created
        }))
        setsucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
            type:'EMPTY_BASKET'
        });
        history('/orders');
     })
     
  };
  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Checkout(<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}</p>
            <p>123 haidwar</p>
            <p>Los angeles,CA</p>
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Review items and Delivery</h3>
          </div>
          <div className="payment-items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment-details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment-pricecontainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        <h3>
                          {" "}
                          OrderTotal ({basket.length} items):
                          <strong>{value}</strong>
                        </h3>
                      </p>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing||disabled||succeeded}>
                    <span>{processing?<p>processing</p>:"Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
