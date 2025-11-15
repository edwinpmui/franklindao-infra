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
            <div className="Work-icon" aria-hidden="true">
              {/* Polished network/node icon */}
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="12" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="5.5" cy="14.2" r="1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="18.5" cy="14.2" r="1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.1 13.1L10 10.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.9 13.1L14 10.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 10v3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Node Operations</h3>
            <p>Operate and maintain node fleets, monitoring, and health checks to ensure network reliability.</p>
          </div>

          <div className="Work-card">
            <div className="Work-icon" aria-hidden="true">
              {/* Polished wrench icon for maintenance */}
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M21.7 6.3l-4-4a1 1 0 00-1.4 0l-2 2a7 7 0 00-8.8 8.8l-2 2a1 1 0 000 1.4l4 4a1 1 0 001.4 0l2-2a7 7 0 008.8-8.8l2-2a1 1 0 000-1.4zM7.5 16.5l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Infrastructure Maintenance</h3>
            <p>Ongoing maintenance, upgrades, and patching of infrastructure to keep systems secure and performant.</p>
          </div>

          <div className="Work-card">
            <div className="Work-icon" aria-hidden="true">
              {/* Uniform monoline gear icon for automation */}
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                {/* central hub */}
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
                {/* outer teeth (6 points) */}
                <circle cx="12" cy="4" r="1.1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <circle cx="12" cy="20" r="1.1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <circle cx="4" cy="12" r="1.1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <circle cx="20" cy="12" r="1.1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <circle cx="6.3" cy="6.3" r="1.1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <circle cx="17.7" cy="17.7" r="1.1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                {/* subtle ring to tie teeth together */}
                <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.08" />
              </svg>
            </div>
            <h3>Automation</h3>
            <p>Infrastructure-as-code, CI/CD automation, and repeatable deployment pipelines to reduce operational toil.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
