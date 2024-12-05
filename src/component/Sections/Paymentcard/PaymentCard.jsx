import React, { useState } from 'react';
import './PaymentCard.css'; 
import { Link } from 'react-router-dom';

const PaymentCard = () => {
    const [selectedMethod, setSelectedMethod] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleMethodChange = (event) => {
        setSelectedMethod(event.target.value);
        
        setCardNumber('');
        setCardName('');
        setExpiryDate('');
        setCvv('');
        setAddress('');
        setPhone('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedMethod) {
            setError('Please select a payment method.');
        } else if (selectedMethod === 'cashOnDelivery' && (!address || !phone)) {
            setError('Please fill out your address and phone number for Cash on Delivery.');
        } else if ((selectedMethod === 'creditCard' || selectedMethod === 'debitCard') && (!cardNumber || !cardName || !expiryDate || !cvv)) {
            setError('Please fill out all card fields.');
        } else {
            setError('');
            console.log('Payment submitted:', { selectedMethod, cardNumber, cardName, expiryDate, cvv, address, phone });
            
        }
    };

    return (
        <div className='card'>
        <div className="payment-card">
            <h2>Payment Information</h2>

            <div className="payment-method-container">
                <h3>Select Payment Method</h3>
                <div className="payment-option">
                    <label>
                        <input
                            type="radio"
                            value="creditCard"
                            checked={selectedMethod === 'creditCard'}
                            onChange={handleMethodChange}
                        />
                        Credit Card
                    </label>
                </div>
                <div className="payment-option">
                    <label>
                        <input
                            type="radio"
                            value="debitCard"
                            checked={selectedMethod === 'debitCard'}
                            onChange={handleMethodChange}
                        />
                        Debit Card
                    </label>
                </div>
                <div className="payment-option">
                    <label>
                        <input
                            type="radio"
                            value="cashOnDelivery"
                            checked={selectedMethod === 'cashOnDelivery'}
                            onChange={handleMethodChange}
                        />
                        Cash on Delivery
                    </label>
                </div>
            </div>
           
            <form onSubmit={handleSubmit}>
                {selectedMethod === 'creditCard' || selectedMethod === 'debitCard' ? (
                    <>
                        <div className="form-group">
                            <label>Card Number</label>
                            <input
                                type="text"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                placeholder="Card Number"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Cardholder Name</label>
                            <input
                                type="text"
                                value={cardName}
                                onChange={(e) => setCardName(e.target.value)}
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Expiry Date</label>
                            <input
                                type="text"
                                value={expiryDate}
                                onChange={(e) => setExpiryDate(e.target.value)}
                                placeholder="MM/YY"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>CVV</label>
                            <input
                                type="text"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                                placeholder="CVV"
                                required
                            />
                        </div>
                    </>
                ) : selectedMethod === 'cashOnDelivery' && (
                    <>
                        <div className="form-group">
                            <label>Address</label>
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Your Address"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Your Phone Number"
                                required
                            />
                        </div>
                    </>
                )}

                {error && <div className="error">{error}</div>}
                <button type="submit"><Link to="/Paynow">Pay Now</Link>   </button>
                
            </form>
        </div>
        </div>

    );
};

export default PaymentCard;
