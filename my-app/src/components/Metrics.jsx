import React, { useEffect, useState } from 'react';
import '../css/Metrics.css';

function Metrics() {
    const [metrics, setMetrics] = useState({
        users: 0,
        projects: 0,
        revenue: 0
    });

    useEffect(() => {
        const targetMetrics = {
            users: 1000,
            projects: 150,
            revenue: 50000
        };

        const duration = 2000; // Animation duration in milliseconds
        const interval = 10; // Update interval in milliseconds
        const steps = duration / interval;

        const increment = {
            users: targetMetrics.users / steps,
            projects: targetMetrics.projects / steps,
            revenue: targetMetrics.revenue / steps
        };

        let currentMetrics = { ...metrics };
        const intervalId = setInterval(() => {
            currentMetrics = {
                users: Math.min(currentMetrics.users + increment.users, targetMetrics.users),
                projects: Math.min(currentMetrics.projects + increment.projects, targetMetrics.projects),
                revenue: Math.min(currentMetrics.revenue + increment.revenue, targetMetrics.revenue)
            };
            setMetrics({ ...currentMetrics });

            if (currentMetrics.users === targetMetrics.users &&
                currentMetrics.projects === targetMetrics.projects &&
                currentMetrics.revenue === targetMetrics.revenue) {
                clearInterval(intervalId);
            }
        }, interval);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="Metrics">
            <h2 className="Metrics-title">Metrics</h2>
            <div className="Metric">
                <h2>Stat1</h2>
                <h2>{metrics.users}</h2>
            </div>
            <div className="Metric">
                <h2>Stat2</h2>
                <h2>{metrics.projects}</h2>
            </div>
            <div className="Metric">
                <h2>Stat3</h2>
                <h2>${metrics.revenue.toLocaleString()}</h2>
            </div>
        </div>
    );
}

export default Metrics;