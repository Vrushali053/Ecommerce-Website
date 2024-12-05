import React, { useState } from 'react';
import './Paynow.css';
import { Link } from 'react-router-dom';

function Paynow() {
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validateForm = () => {
    if (!amount) {
      return 'Amount is required.';
    }
    if (isNaN(amount) || amount <= 0) {
      return 'Amount must be a positive number.';
    }
    if (paymentMethod === 'card') {
      if (!cardNumber || cardNumber.length !== 16) {
        return 'Card number must be 16 digits.';
      }
      if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
        return 'Expiry date must be in MM/YY format.';
      }
      if (!cvv || cvv.length !== 3) {
        return 'CVV must be 3 digits.';
      }
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setTimeout(() => {
      if (paymentMethod === 'cod') {
        setSuccess(`Order confirmed for $${amount}. Cash on delivery!`);
      } else {
        setSuccess(`Payment of $${amount} processed successfully via card.`);
      }
      resetForm();
    }, 1000);
  };

  const resetForm = () => {
    setAmount('');
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
    setPaymentMethod('cod');
  };

  return (
    <div className='cont'>
      <div className="paynow-container">
        <h2>Pay Now</h2>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Amount:</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Payment Method:</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="cod">Cash on Delivery</option>
              <option value="card">Credit/Debit Card</option>
            </select>
          </div>

          {paymentMethod === 'card' && (
            <>
              <div className="form-group">
                <label>Card Number:</label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required={paymentMethod === 'card'}
                />
              </div>
              <div className="form-group">
                <label>Expiry Date:</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  required={paymentMethod === 'card'}
                />
              </div>
              <div className="form-group">
                <label>CVV:</label>
                <input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  required={paymentMethod === 'card'}
                />
              </div>
            </>
          )}

          <div className="button-container">
            <button type="submit">Buy Now</button>
            <Link to="/" className="go-back-button">Go Back</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Paynow;
