'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
       <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link href="/" className="nav-link active">หน้าแรก</Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-link">เกี่ยวกับเรา</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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

        <form className="d-flex me-2" role="search">
          <input className="form-control me-2" type="search" placeholder="ค้นหา..." aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">ค้นหา</button>
        </form>

        {/* ปุ่มเข้าสู่ระบบ */}
        <Link href="/login" className="btn btn-outline-primary">
          เข้าสู่ระบบ
        </Link>
      </div>
    </nav>
  );
}
