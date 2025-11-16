import React, { useEffect, useState, useRef } from 'react';
import '../css/Metrics.css';

function Metrics() {
    // Default target values — replace with props or API data if available
    const targetMetrics = {
        uptime: 99.97, // percent
        nodes: 300, // integer
        totalValue: 5230000 // dollars (5.23M)
    };

    const [metrics, setMetrics] = useState({
        uptime: 0,
        nodes: 0,
        totalValue: 0
    });

    const animatedRef = useRef(false);

    useEffect(() => {
        let intervalId = null;

        function startAnimation() {
            if (animatedRef.current) return;
            animatedRef.current = true;

            const duration = 1800; // animation duration in ms
            const interval = 10; // update interval in ms
            const steps = Math.max(1, Math.floor(duration / interval));

            const increment = {
                uptime: targetMetrics.uptime / steps,
                nodes: targetMetrics.nodes / steps,
                totalValue: targetMetrics.totalValue / steps
            };

            let current = { uptime: 0, nodes: 0, totalValue: 0 };
            intervalId = setInterval(() => {
                current = {
                    uptime: Math.min(current.uptime + increment.uptime, targetMetrics.uptime),
                    nodes: Math.min(current.nodes + increment.nodes, targetMetrics.nodes),
                    totalValue: Math.min(current.totalValue + increment.totalValue, targetMetrics.totalValue)
                };
                setMetrics({ ...current });

                if (
                    current.uptime === targetMetrics.uptime &&
                    current.nodes === targetMetrics.nodes &&
                    current.totalValue === targetMetrics.totalValue
                ) {
                    clearInterval(intervalId);
                }
            }, interval);
        }

        // Observe the Work section and start the animation when the user is halfway through it
        const triggerEl = document.getElementById('work');
        if (triggerEl && typeof IntersectionObserver !== 'undefined') {
            const obs = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    // start when at least half of the Work section is visible
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                        startAnimation();
                    }
                });
            }, { threshold: [0.5] });
            obs.observe(triggerEl);

            // fallback: check if viewport midpoint is within the element on mount
            const rect = triggerEl.getBoundingClientRect();
            const viewportMid = window.innerHeight / 2;
            if (rect.top < viewportMid && rect.bottom > viewportMid) startAnimation();

            return () => {
                obs.disconnect();
                if (intervalId) clearInterval(intervalId);
            };
        }

        // If the trigger element doesn't exist, start animation on mount
        startAnimation();
        return () => { if (intervalId) clearInterval(intervalId); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="Metrics" aria-label="Site metrics">
            <h2 className="Metrics-title">Metrics</h2>

            <div className="Metrics-row">
              <div className="Metric">
                  <p className="Metric-label">Uptime</p>
                  <h2 className="Metric-value">{metrics.uptime.toFixed(2)}%</h2>
              </div>

              <div className="Metric">
                  <p className="Metric-label">Nodes</p>
                  <h2 className="Metric-value">{metrics.nodes >= targetMetrics.nodes ? `${targetMetrics.nodes}+` : Math.round(metrics.nodes)}</h2>
              </div>

              <div className="Metric">
                  <p className="Metric-label">Total Value</p>
                  <h2 className="Metric-value">${Math.round(metrics.totalValue).toLocaleString()}</h2>
              </div>
            </div>
        </div>
    );
}

export default Metrics;