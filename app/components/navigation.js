// components/Navbar.js
'use client'; // เฉพาะถ้าใช้ App Router (เช่น /app)

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Navbar() {
  // ใช้ใน App Router เพื่อให้ Bootstrap JS ทำงานบน client
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <Image src="/bootstrap-logo.svg" alt="Logo" width={30} height={24} className="me-2" />
          frontend
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link active">หน้าแรก</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">เกี่ยวกับเรา</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                บริการของเรา
              </a>
              <ul className="dropdown-menu">
                <li><Link href="/service/web" className="dropdown-item">Web Development</Link></li>
                <li><Link href="/service/app" className="dropdown-item">App Development</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link href="/service/other" className="dropdown-item">Other Services</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">ติดต่อเรา</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="ค้นหา..." aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">ค้นหา</button>
          </form>
        </div>
      </div>
    </nav>
  );
}
