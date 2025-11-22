import React, { useState } from "react";
import "./Reservations.css";

const dummyUpcoming = [
  {
    id: 1,
    title: "Basement",
    checkIn: "22 Nov 2025",
    duration: "1 Year",
    price: "1000",
  },
  {
    id: 2,
    title: "Small room",
    checkIn: "22 Nov 2025",
    duration: "3 Months",
    price: "200",
  },
];

export default function Reservations() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const [upcoming, setUpcoming] = useState(dummyUpcoming);
  const past = [];

  const listToShow = activeTab === "upcoming" ? upcoming : past;

  // modal state for confirmation
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [toCancelId, setToCancelId] = useState(null);

  const openConfirm = (id) => {
    setToCancelId(id);
    setConfirmOpen(true);
  };

  const closeConfirm = () => {
    setToCancelId(null);
    setConfirmOpen(false);
  };

  const handleConfirmCancel = () => {
    if (toCancelId == null) return;
    setUpcoming((prev) => prev.filter((r) => r.id !== toCancelId));
    closeConfirm();
  };

  return (
    <div className="reservations-page-outer">
      <div className="reservations-container">
        <header className="reservations-header">
          <h1>Reservations</h1>

          <div className="reservations-tabs">
            <button
              className={`tab ${activeTab === "upcoming" ? "active" : ""}`}
              onClick={() => setActiveTab("upcoming")}
            >
              Upcoming
            </button>
            <button
              className={`tab ${activeTab === "past" ? "active" : ""}`}
              onClick={() => setActiveTab("past")}
            >
              Past
            </button>
          </div>
        </header>

        <hr className="tabs-divider" />

        <section className="reservations-list">
          {listToShow.length === 0 ? (
            <div className="empty-state">No reservations to show.</div>
          ) : (
            listToShow.map((r) => (
              <div className="reservation-card" key={r.id}>
                <div className="card-left">
                  <div className="image-placeholder" />
                </div>

                <div className="card-middle">
                  <div className="res-title">{r.title}</div>
                  <div className="res-details">
                    <span>Check In: {r.checkIn}</span>
                    <span className="dot">•</span>
                    <span>Duration: {r.duration}</span>
                  </div>
                </div>

                <div className="card-right">
                  <div className="res-price">
                    <img
                      src="/assets/icons/riyal.svg"
                      alt="SAR"
                      className="riyal-icon-small"
                    />
                    {r.price}
                  </div>
                  <button className="cancel-btn" onClick={() => openConfirm(r.id)}>
                    Cancel Reservation
                  </button>
                </div>
              </div>
            ))
          )}
        </section>

        {confirmOpen && (
          <div className="confirm-modal-overlay">
            <div className="confirm-modal" role="dialog" aria-modal="true">
              <h3>Cancel Reservation</h3>
              <p>Are you sure you want to cancel this reservation?</p>
              <div className="confirm-actions">
                <button className="btn-secondary" onClick={closeConfirm}>
                  Keep Reservation
                </button>
                <button className="btn-danger" onClick={handleConfirmCancel}>
                  Yes, Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}