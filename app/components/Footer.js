'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white pt-5 pb-3">
      <div className="container">
        <div className="row g-4 pb-4">
          <div className="col-lg-4 col-md-6">
            <div className="mb-4">
              <Link
                href="/"
                className="d-flex align-items-center text-decoration-none mb-3"
              >
                <img
                  src="/images/f1.jpg"
                  alt="Logo"
                  width="35"
                  height="35"
                  className="me-2 rounded-circle"
                />
                <span
                  style={{
                    color: "#d291bc",
                    fontWeight: "600",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "1.25rem",
                  }}
                >
                  What The Tour
                </span>
              </Link>
              <p
                className="text-muted"
                style={{ fontSize: "0.9rem", lineHeight: "1.6" }}
              >
                Creating beautiful moments and sweet memories with our carefully
                curated collection of premium products.
              </p>
            </div>
            <div className="d-flex gap-3 mb-3">
              <a
                href="#"
                className="social-icon"
                style={{
                  color: "#d291bc",
                  background: "rgba(210, 145, 188, 0.1)",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  transition: "all 0.3s",
                }}
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="#"
                className="social-icon"
                style={{
                  color: "#9d7cd8",
                  background: "rgba(157, 124, 216, 0.1)",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  transition: "all 0.3s",
                }}
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="#"
                className="social-icon"
                style={{
                  color: "#5bae9e",
                  background: "rgba(91, 174, 158, 0.1)",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  transition: "all 0.3s",
                }}
              >
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5
              style={{
                color: "#d291bc",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "500",
                fontSize: "1rem",
                marginBottom: "1.25rem",
              }}
            >
              Quick Links
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  href="/"
                  className="text-decoration-none"
                  style={{
                    color: "#666",
                    fontSize: "0.9rem",
                    transition: "color 0.3s",
                  }}
                >
                  หน้าแรก
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/about"
                  className="text-decoration-none"
                  style={{
                    color: "#666",
                    fontSize: "0.9rem",
                    transition: "color 0.3s",
                  }}
                >
                  เกี่ยวกับเรา
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/service"
                  className="text-decoration-none"
                  style={{
                    color: "#666",
                    fontSize: "0.9rem",
                    transition: "color 0.3s",
                  }}
                >
                  บริการของเรา
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/contact"
                  className="text-decoration-none"
                  style={{
                    color: "#666",
                    fontSize: "0.9rem",
                    transition: "color 0.3s",
                  }}
                >
                  ติดต่อเรา
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5
              style={{
                color: "#9d7cd8",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "500",
                fontSize: "1rem",
                marginBottom: "1.25rem",
              }}
            >
              Services
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  href="/service/web"
                  className="text-decoration-none"
                  style={{
                    color: "#666",
                    fontSize: "0.9rem",
                    transition: "color 0.3s",
                  }}
                >
                  Web Development
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/service/app"
                  className="text-decoration-none"
                  style={{
                    color: "#666",
                    fontSize: "0.9rem",
                    transition: "color 0.3s",
                  }}
                >
                  App Development
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/service/design"
                  className="text-decoration-none"
                  style={{
                    color: "#666",
                    fontSize: "0.9rem",
                    transition: "color 0.3s",
                  }}
                >
                  UI/UX Design
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/service/other"
                  className="text-decoration-none"
                  style={{
                    color: "#666",
                    fontSize: "0.9rem",
                    transition: "color 0.3s",
                  }}
                >
                  Other Services
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/about"
                  className="text-decoration-none"
                  style={{
                    color: "#666",
                    fontSize: "0.9rem",
                    transition: "color 0.3s",
                  }}
                >
              admin
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/admin/users"
                  className="text-decoration-none"
                  style={{
                    color: "#666",
                    fontSize: "0.9rem",
                    transition: "color 0.3s",
                  }}
                  ></Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <h5
              style={{
                color: "#5bae9e",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "500",
                fontSize: "1rem",
                marginBottom: "1.25rem",
              }}
            >
              Newsletter
            </h5>
            <p className="text-muted mb-3" style={{ fontSize: "0.9rem" }}>
              Subscribe to our newsletter for updates and special offers.
            </p>
            <form className="mb-3">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email"
                  style={{
                    borderRadius: "2rem 0 0 2rem",
                    border: "1px solid #eee",
                    padding: "0.5rem 1rem",
                    fontSize: "0.9rem",
                  }}
                />
                <button
                  className="btn"
                  type="submit"
                  style={{
                    borderRadius: "0 2rem 2rem 0",
                    background: "#5bae9e",
                    color: "white",
                    border: "none",
                    padding: "0.5rem 1.25rem",
                  }}
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div
          className="border-top pt-3"
          style={{ borderColor: "#f0f0f0 !important" }}
        >
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="text-muted mb-0" style={{ fontSize: "0.85rem" }}>
                © 2025 What The Tour Co. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a
                    href="#"
                    className="text-muted text-decoration-none"
                    style={{ fontSize: "0.85rem" }}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="list-inline-item">
                  <span className="text-muted mx-2">•</span>
                </li>
                <li className="list-inline-item">
                  <a
                    href="#"
                    className="text-muted text-decoration-none"
                    style={{ fontSize: "0.85rem" }}
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}