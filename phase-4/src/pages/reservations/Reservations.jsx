import React, { useState, useContext, useMemo } from "react";
import "./Reservations.css";
import { ReservationsContext } from "../../context/ReservationsContext";

export default function Reservations() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const { reservations } = useContext(ReservationsContext);

  // split upcoming vs past by checkIn date (ISO string expected)
  const { upcoming, past } = useMemo(() => {
    const now = new Date();
    const up = [];
    const pa = [];
    (reservations || []).forEach((r) => {
      const d = r.checkIn ? new Date(r.checkIn) : null;
      if (!d) {
        up.push(r);
      } else if (d >= now) up.push(r);
      else pa.push(r);
    });
    return { upcoming: up, past: pa };
  }, [reservations]);

  const listToShow = activeTab === "upcoming" ? upcoming : past;

  const formatDate = (iso) => {
    try {
      return new Date(iso).toLocaleDateString();
    } catch (e) {
      return iso || "";
    }
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
                    <span>Check In: {formatDate(r.checkIn)}</span>
                    <span className="dot">•</span>
                    <span>{r.duration || ""}</span>
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
