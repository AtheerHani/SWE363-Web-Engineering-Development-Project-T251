import React, { useState, useEffect } from "react";
import BookingSummaryCard from "../../components/BookingSummaryCard/BookingSummaryCard";
import "./Payment.css";

const Payment = () => {
    const [selectedPayment, setSelectedPayment] = useState("cash");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [transferReceipt, setTransferReceipt] = useState(null);
    const [bankAccountInfo, setBankAccountInfo] = useState(null);

    // Sample booking data - this will come from props/state management later
    const bookingData = {
        image: "/assets/images/rooms/placeholder-room.jpg",
        title: "Small Room in an Apartment",
        location: "Dammam, SA",
        size: "50 m²",
        amenities: ["Air Conditioner", "Smart Lock"],
        pricing: {
            perDay: 1,
            perWeek: 5,
            perMonth: 18,
        },
    };

    // Generate random bank account when bank transfer is selected
    useEffect(() => {
        if (selectedPayment === "bank") {
            if (!bankAccountInfo) {
                generateBankAccount();
            }
        }
    }, [selectedPayment, bankAccountInfo]);

    const generateBankAccount = () => {
        const banks = [
            { name: "Al Rajhi Bank", swift: "RJHISARI" },
            { name: "Saudi National Bank", swift: "NCBKSAJE" },
            { name: "Riyadh Bank", swift: "RIBLSARI" },
            { name: "Alinma Bank", swift: "INMASARI" },
        ];

        const randomBank = banks[Math.floor(Math.random() * banks.length)];
        const randomAccountNumber = `SA${Math.floor(Math.random() * 90000000000000000000) + 10000000000000000000}`;

        setBankAccountInfo({
            bankName: randomBank.name,
            accountName: "Hujra Real Estate Services",
            accountNumber: randomAccountNumber,
            iban: randomAccountNumber,
            swiftCode: randomBank.swift,
        });
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
            if (allowedTypes.includes(file.type)) {
                setTransferReceipt(file);
                console.log("Receipt uploaded:", file.name);
            } else {
                alert("Please upload a PDF, JPG, or PNG file only.");
                e.target.value = null;
            }
        }
    };

    const handlePayment = (e) => {
        e.preventDefault();

        if (selectedPayment === "bank" && !transferReceipt) {
            alert("Please upload your transfer receipt before proceeding.");
            return;
        }

        console.log("Processing payment...", {
            method: selectedPayment,
            cardNumber,
            expiryDate,
            cvv,
            bankAccountInfo,
            transferReceipt: transferReceipt ? transferReceipt.name : null,
        });

        alert("Payment submitted successfully!");
    };

    return (
        <div className="payment-container">
            <div className="payment-form-section">
                <h2 className="payment-title">Payment Methods</h2>

                <form onSubmit={handlePayment}>
                    {/* Pay with Cash */}
                    <div className="payment-option">
                        <input
                            type="radio"
                            id="cash"
                            name="payment"
                            value="cash"
                            checked={selectedPayment === "cash"}
                            onChange={(e) => setSelectedPayment(e.target.value)}
                        />
                        <label htmlFor="cash">Pay with Cash</label>
                    </div>

                    {/* Cash Payment Instructions */}
                    {selectedPayment === "cash" && (
                        <div className="payment-instructions">
                            <div className="instruction-box cash-instruction">
                                <svg className="instruction-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div className="instruction-content">
                                    <h4 className="instruction-title">Cash Payment Instructions</h4>
                                    <p className="instruction-text">
                                        You will give your cash payment directly to our representative upon property viewing or key handover. Please have the exact amount ready.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Credit/Debit Cards */}
                    <div className="payment-option">
                        <input
                            type="radio"
                            id="card"
                            name="payment"
                            value="card"
                            checked={selectedPayment === "card"}
                            onChange={(e) => setSelectedPayment(e.target.value)}
                        />
                        <label htmlFor="card">Credit/Debit Cards</label>
                        <div className="card-icons">
                            <img src="/assets/icons/applepay-icon.png" alt="Apple Pay" />
                            <img src="/assets/icons/mastercard-icon.png" alt="Mastercard" />
                            <img src="/assets/icons/paypal-icon.png" alt="PayPal" />
                        </div>
                    </div>

                    {/* Card Input Fields - Show only when card is selected */}
                    {selectedPayment === "card" && (
                        <div className="card-details">
                            <div className="input-group full-width">
                                <input
                                    type="text"
                                    placeholder="Card number"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                    maxLength="19"
                                />
                            </div>

                            <div className="input-row">
                                <div className="input-group half-width">
                                    <input
                                        type="text"
                                        placeholder="MM / YY"
                                        value={expiryDate}
                                        onChange={(e) => setExpiryDate(e.target.value)}
                                        maxLength="5"
                                    />
                                </div>

                                <div className="input-group half-width">
                                    <input
                                        type="text"
                                        placeholder="CVV"
                                        value={cvv}
                                        onChange={(e) => setCvv(e.target.value)}
                                        maxLength="4"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Direct Bank Transfer */}
                    <div className="payment-option">
                        <input
                            type="radio"
                            id="bank"
                            name="payment"
                            value="bank"
                            checked={selectedPayment === "bank"}
                            onChange={(e) => setSelectedPayment(e.target.value)}
                        />
                        <label htmlFor="bank">Direct Bank Transfer</label>
                    </div>

                    {/* Bank Transfer Details - Show only when bank is selected */}
                    {selectedPayment === "bank" && bankAccountInfo && (
                        <div className="bank-details">
                            <div className="instruction-box bank-instruction">
                                <svg className="instruction-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div className="instruction-content">
                                    <h4 className="instruction-title">Bank Transfer Instructions</h4>
                                    <p className="instruction-text">
                                        Please transfer the payment amount to the bank account below. After completing the transfer, upload your payment receipt or bank transfer confirmation for verification.
                                    </p>
                                </div>
                            </div>

                            <div className="bank-info-box">
                                <h4 className="bank-info-title">Transfer to This Account</h4>
                                <div className="bank-info-row">
                                    <span className="bank-label">Bank Name:</span>
                                    <span className="bank-value">{bankAccountInfo.bankName}</span>
                                </div>
                                <div className="bank-info-row">
                                    <span className="bank-label">Account Name:</span>
                                    <span className="bank-value">{bankAccountInfo.accountName}</span>
                                </div>
                                <div className="bank-info-row">
                                    <span className="bank-label">Account Number / IBAN:</span>
                                    <span className="bank-value">{bankAccountInfo.iban}</span>
                                </div>
                                <div className="bank-info-row">
                                    <span className="bank-label">SWIFT Code:</span>
                                    <span className="bank-value">{bankAccountInfo.swiftCode}</span>
                                </div>
                            </div>

                            <div className="upload-section">
                                <h4 className="upload-title">Upload Transfer Receipt</h4>
                                <p className="upload-instructions">
                                    After completing your bank transfer, please upload your payment receipt or transaction confirmation below:
                                </p>

                                <div className="file-upload-area">
                                    <input
                                        type="file"
                                        id="receipt-upload"
                                        accept=".pdf,.jpg,.jpeg,.png"
                                        onChange={handleFileUpload}
                                        className="file-input"
                                    />
                                    <label htmlFor="receipt-upload" className="file-upload-label">
                                        <svg className="upload-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                        </svg>
                                        <div className="upload-text">
                      <span className="upload-main-text">
                        {transferReceipt ? transferReceipt.name : "Click to upload or drag and drop"}
                      </span>
                                            <span className="upload-sub-text">PDF, JPG, or PNG (max 5MB)</span>
                                        </div>
                                    </label>

                                    {transferReceipt && (
                                        <div className="file-success">
                                            <svg className="success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="success-text">File uploaded successfully</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Pay Button */}
                    <button type="submit" className="pay-button">
                        Pay
                    </button>
                </form>
            </div>

            {/* Right Side - Booking Summary */}
            <div className="booking-summary-section">
                <BookingSummaryCard bookingData={bookingData} />
            </div>
        </div>
    );
};

export default Payment;