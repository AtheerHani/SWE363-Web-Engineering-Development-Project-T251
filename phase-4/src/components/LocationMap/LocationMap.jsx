import React, { useEffect, useRef } from "react";
import "./LocationMap.css";

const LocationMap = ({ coordinates, onMapClick }) => {
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const markerRef = useRef(null);

    useEffect(() => {
        // Only initialize if Leaflet is available and map hasn't been created
        if (window.L && mapRef.current && !mapInstanceRef.current) {
            // Create map
            const map = window.L.map(mapRef.current).setView(
                [coordinates.lat, coordinates.lng],
                14
            );

            // Add OpenStreetMap tiles
            window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: '© OpenStreetMap contributors',
                maxZoom: 19,
            }).addTo(map);

            // Create custom icon with your color
            const customIcon = window.L.divIcon({
                className: "custom-map-marker",
                html: `
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#809191"/>
            <circle cx="12" cy="9" r="2" fill="white"/>
          </svg>
        `,
                iconSize: [40, 40],
                iconAnchor: [20, 40],
            });

            // Add marker at property location (draggable)
            const marker = window.L.marker([coordinates.lat, coordinates.lng], {
                icon: customIcon,
                draggable: true,
            }).addTo(map);
            markerRef.current = marker;

            // (Intentionally no map click handler) - only allow moving via dragging the marker

            // When marker is dragged and released, report coordinates (trigger geocode)
            marker.on('dragend', function (e) {
                const { lat, lng } = e.target.getLatLng();
                if (typeof onMapClick === 'function') onMapClick({ lat, lng, source: 'dragend' });
            });

            mapInstanceRef.current = map;
        }

        // Update marker position if coordinates prop changes
        if (mapInstanceRef.current && markerRef.current) {
            try {
                markerRef.current.setLatLng([coordinates.lat, coordinates.lng]);
                mapInstanceRef.current.setView([coordinates.lat, coordinates.lng]);
            } catch (e) {
                // ignore
            }
        }

        // Cleanup
        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
                markerRef.current = null;
            }
        };
    }, [coordinates]);

    // return (
    //     <div className="location-section">
    //         <div className="map-container">
    //             <div ref={mapRef} className="leaflet-map"></div>
    //         </div>
    //     </div>
    // );
    return (
        <div className="location-section">
            {/* ⭐️ This is the new title */}
            <h2 className="map-title">Location</h2>

            <div className="map-container">
                <div ref={mapRef} className="leaflet-map"></div>
            </div>
        </div>
    );
};

export default LocationMap;