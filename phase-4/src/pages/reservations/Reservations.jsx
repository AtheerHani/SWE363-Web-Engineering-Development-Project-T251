import React, { useState } from "react";
import "./Reservations.css";

const dummyUpcoming = [
  {
    id: 1,
    title: "Fully Furnished Apartment",
    checkIn: "12 Mar 2021",
    duration: "Long (2 - 5 Years)",
    price: "$ 1000 USD",
  },
  {
    id: 2,
    title: "Double Flat with 3 Rooms",
    checkIn: "20 Apr 2021",
    duration: "Long (2 - 5 Years)",
    price: "$ 850 USD",
  },
];

export default function Reservations() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcoming = dummyUpcoming;
  const past = [];

  const listToShow = activeTab === "upcoming" ? upcoming : past;

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
                  <div className="res-price">{r.price}</div>
                  <button className="cancel-btn">Cancel Reservation</button>
                </div>
              </div>
            ))
          )}
        </section>
      </div>
    </div>
  );
}