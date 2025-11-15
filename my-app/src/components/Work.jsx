import React from 'react';
import '../css/Work.css';

export default function Work() {
  return (
    <div className="Work">
      <div className="Work-inner">
        <h2 className="Work-heading">What we offer?</h2>
        <p className="Work-lead">
          We help projects with infrastructure, DevOps, monitoring, and secure deployment pipelines.
          Below are some of the core services and initiatives our team supports.
        </p>

        <div className="Work-grid">
          <div className="Work-card">
            <h3>Platform Reliability</h3>
            <p>Design and operate resilient production systems with observability and incident response.</p>
          </div>
          <div className="Work-card">
            <h3>Security & Hardening</h3>
            <p>Threat modeling, automated security scans, and secure CI/CD pipelines.</p>
          </div>
          <div className="Work-card">
            <h3>Automation</h3>
            <p>Infrastructure-as-code, repeatable deployments, and cost-aware operations.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
