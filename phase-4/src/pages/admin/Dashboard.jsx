import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Line, Bar } from "react-chartjs-2";   // Chart components
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import "./Dashboard.css";

// Register Chart.js modules
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function UserDashboard() {
    const stats = [
        { title: "Total Listings", value: 12 },
        { title: "Active Bookings", value: 5 },
        { title: "Reviews", value: 18 },
        { title: "Earnings (This Month)", value: "$1,250" },
    ];

    // Sample chart data
    const bookingsData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Bookings",
                data: [3, 5, 2, 8, 6, 7],
                borderColor: "#0e305d",
                backgroundColor: "rgba(14,48,93,0.2)",
            },
        ],
    };

    const earningsData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Earnings ($)",
                data: [500, 700, 800, 1200, 950, 1250],
                backgroundColor: "#0e305d",
            },
        ],
    };

    return (
        <Container fluid className="dashboard-container">
            <h2 className="mb-4">User Dashboard</h2>

            {/* Overview Cards */}
            <Row>
                {stats.map((stat, idx) => (
                    <Col md={3} sm={6} className="mb-4" key={idx}>
                        <Card className="stat-card">
                            <Card.Body>
                                <Card.Title>{stat.title}</Card.Title>
                                <h3>{stat.value}</h3>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Charts Section */}
            <Row>
                <Col md={6} className="mb-4">
                    <Card className="chart-card">
                        <Card.Body>
                            <Card.Title>Monthly Bookings</Card.Title>
                            <Line data={bookingsData} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="mb-4">
                    <Card className="chart-card">
                        <Card.Body>
                            <Card.Title>Earnings Trend</Card.Title>
                            <Bar data={earningsData} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Recent Activity */}
            <Row>
                <Col md={12}>
                    <Card className="activity-card">
                        <Card.Body>
                            <Card.Title>Recent Activity</Card.Title>
                            <ul className="activity-list">
                                <li>New booking for Family Apartment</li>
                                <li>Review received: ★★★★☆</li>
                                <li>Listing “Villa” updated</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default UserDashboard;
