import React, { createContext, useState, useEffect } from "react";

export const ReservationsContext = createContext();

export function ReservationsProvider({ children }) {
  const [reservations, setReservations] = useState([]);

  // initialize from localStorage if available
  useEffect(() => {
    try {
      const raw = localStorage.getItem("hujra_reservations");
      if (raw) setReservations(JSON.parse(raw));
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("hujra_reservations", JSON.stringify(reservations));
    } catch (e) {
      // ignore
    }
  }, [reservations]);

  const addReservation = (reservation) => {
    setReservations((s) => [reservation, ...s]);
  };

  const clearReservations = () => setReservations([]);

  return (
    <ReservationsContext.Provider value={{ reservations, addReservation, clearReservations }}>
      {children}
    </ReservationsContext.Provider>
  );
}

export default ReservationsProvider;
