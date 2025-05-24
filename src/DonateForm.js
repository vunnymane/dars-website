import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Replace with your Stripe test publishable key when you create an account
const stripePromise = loadStripe('pk_test_12345YOURKEYHERE');

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Processing...');
    if (!stripe || !elements) return;

    // In a real app, you'd create a PaymentIntent on your server and confirm it here
    setTimeout(() => {
      setStatus('This is a demo. Payment processing will work when you connect your Stripe account.');
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '0 auto', background: 'rgba(255,255,255,0.95)', padding: 24, borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
      <h2 style={{ color: '#FFD76A', marginBottom: 16 }}>Donate to Dars Initiative</h2>
      <div style={{ marginBottom: 12 }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #FFD76A', marginBottom: 8 }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #FFD76A', marginBottom: 8 }}
        />
        <input
          type="number"
          placeholder="Amount (USD)"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          required
          min="1"
          style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #FFD76A', marginBottom: 8 }}
        />
      </div>
      <div style={{ marginBottom: 16 }}>
        <CardElement options={{ style: { base: { fontSize: '18px', color: '#181818' } } }} />
      </div>
      <button type="submit" style={{ background: '#FFD76A', color: '#181818', fontWeight: 'bold', border: 'none', borderRadius: 6, padding: '10px 24px', fontSize: 18, cursor: 'pointer', width: '100%' }} disabled={!stripe}>
        Donate
      </button>
      <div style={{ marginTop: 16, color: '#181818', fontSize: 15 }}>{status}</div>
      <div style={{ marginTop: 16, color: '#ff9800', fontSize: 13 }}>
        <b>Test Mode:</b> No real money will be sent. Connect your Stripe account to enable live donations.
      </div>
    </form>
  );
}

export default function DonateForm() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
} 