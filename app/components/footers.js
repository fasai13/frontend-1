'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-body-secondary">© 2025 Company, Inc</p>

        <a
          href="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          aria-label="Bootstrap"
        >
          <svg className="bi me-2" width={40} height={32} aria-hidden="true">
            <use xlinkHref="#bootstrap" />
          </svg>
        </a>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              <i className="bi bi-house-door-fill me-1"></i> Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              <i className="bi bi-stars me-1"></i> Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              <i className="bi bi-info-circle me-1"></i> About
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}