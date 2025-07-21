'use client';
import { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    title: '',
    firstName: '',
    lastName: '',
    address: '',
    gender: '',
    birthDate: '',
    acceptTerms: false
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const titleOptions = [
    { value: '', label: 'เลือกคำนำหน้า' },
    { value: 'mr', label: 'นาย' },
    { value: 'mrs', label: 'นาง' },
    { value: 'miss', label: 'นางสาว' },
    { value: 'dr', label: 'ดร.' },
    { value: 'prof', label: 'ศาสตราจารย์' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) newErrors.username = true;
    if (!formData.password.trim()) newErrors.password = true;
    if (!formData.title) newErrors.title = true;
    if (!formData.firstName.trim()) newErrors.firstName = true;
    if (!formData.lastName.trim()) newErrors.lastName = true;
    if (!formData.address.trim()) newErrors.address = true;
    if (!formData.gender) newErrors.gender = true;
    if (!formData.birthDate) newErrors.birthDate = true;
    if (!formData.acceptTerms) newErrors.acceptTerms = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    if (validateForm()) {
      alert('สมัครสมาชิกสำเร็จ!');
      console.log('Form data:', formData);
      // Reset form
      setFormData({
        username: '',
        password: '',
        title: '',
        firstName: '',
        lastName: '',
        address: '',
        gender: '',
        birthDate: '',
        acceptTerms: false
      });
      setSubmitted(false);
      setErrors({});
    }
  };

  const getInputClassName = (fieldName) => {
    const baseClass = "form-control";
    if (submitted && errors[fieldName]) {
      return `${baseClass} border-danger`;
    }
    return baseClass;
  };

  const getSelectClassName = (fieldName) => {
    const baseClass = "form-select";
    if (submitted && errors[fieldName]) {
      return `${baseClass} border-danger`;
    }
    return baseClass;
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center ">
        <div className="col-lg-8 col-xl-6 mx-5">
          <div className="card border-0 shadow-lg rounded-4 ">
            <div className="card-body p-5">
              {/* Header */}
              <div className="text-center mb-4">
                <h2 className="fw-bold mb-3" style={{ color: '#ff85a2' }}>
                  <i className="bi bi-person-plus-fill me-2"></i>
                  สมัครสมาชิก
                </h2>
                <p className="text-muted">กรอกข้อมูลเพื่อสร้างบัญชีใหม่</p>
              </div>

              <div onSubmit={handleSubmit}>
                {/* Username */}
                <div className="mb-3">
                  <label htmlFor="username" className="form-label fw-semibold">
                    ชื่อผู้ใช้ <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className={getInputClassName('username')}
                    placeholder="กรอกชื่อผู้ใช้"
                  />
                  {submitted && errors.username && (
                    <div className="text-danger small mt-1">
                      <i className="bi bi-exclamation-circle me-1"></i>
                      กรุณากรอกชื่อผู้ใช้
                    </div>
                  )}
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-semibold">
                    รหัสผ่าน <span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={getInputClassName('password')}
                    placeholder="กรอกรหัสผ่าน"
                  />
                  {submitted && errors.password && (
                    <div className="text-danger small mt-1">
                      <i className="bi bi-exclamation-circle me-1"></i>
                      กรุณากรอกรหัสผ่าน
                    </div>
                  )}
                </div>

                {/* Title */}
                <div className="mb-3">
                  <label htmlFor="title" className="form-label fw-semibold">
                    คำนำหน้าชื่อ <span className="text-danger">*</span>
                  </label>
                  <select
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className={getSelectClassName('title')}
                  >
                    {titleOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {submitted && errors.title && (
                    <div className="text-danger small mt-1">
                      <i className="bi bi-exclamation-circle me-1"></i>
                      กรุณาเลือกคำนำหน้าชื่อ
                    </div>
                  )}
                </div>

                {/* First Name & Last Name */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName" className="form-label fw-semibold">
                      ชื่อ <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={getInputClassName('firstName')}
                      placeholder="กรอกชื่อ"
                    />
                    {submitted && errors.firstName && (
                      <div className="text-danger small mt-1">
                        <i className="bi bi-exclamation-circle me-1"></i>
                        กรุณากรอกชื่อ
                      </div>
                    )}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName" className="form-label fw-semibold">
                      นามสกุล <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={getInputClassName('lastName')}
                      placeholder="กรอกนามสกุล"
                    />
                    {submitted && errors.lastName && (
                      <div className="text-danger small mt-1">
                        <i className="bi bi-exclamation-circle me-1"></i>
                        กรุณากรอกนามสกุล
                      </div>
                    )}
                  </div>
                </div>

                {/* Address */}
                <div className="mb-3">
                  <label htmlFor="address" className="form-label fw-semibold">
                    ที่อยู่ <span className="text-danger">*</span>
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={getInputClassName('address')}
                    rows="3"
                    placeholder="กรอกที่อยู่"
                  ></textarea>
                  {submitted && errors.address && (
                    <div className="text-danger small mt-1">
                      <i className="bi bi-exclamation-circle me-1"></i>
                      กรุณากรอกที่อยู่
                    </div>
                  )}
                </div>

                {/* Gender */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    เพศ <span className="text-danger">*</span>
                  </label>
                  <div className="d-flex gap-4 mt-2">
                    <div className="form-check">
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        checked={formData.gender === 'male'}
                        onChange={handleInputChange}
                        className="form-check-input"
                      />
                      <label htmlFor="male" className="form-check-label">
                        <i className="bi bi-person me-1"></i>
                        ชาย
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={handleInputChange}
                        className="form-check-input"
                      />
                      <label htmlFor="female" className="form-check-label">
                        <i className="bi bi-person-dress me-1"></i>
                        หญิง
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="other"
                        name="gender"
                        value="other"
                        checked={formData.gender === 'other'}
                        onChange={handleInputChange}
                        className="form-check-input"
                      />
                      <label htmlFor="other" className="form-check-label">
                        <i className="bi bi-person-fill me-1"></i>
                        อื่นๆ
                      </label>
                    </div>
                  </div>
                  {submitted && errors.gender && (
                    <div className="text-danger small mt-1">
                      <i className="bi bi-exclamation-circle me-1"></i>
                      กรุณาเลือกเพศ
                    </div>
                  )}
                </div>

                {/* Birth Date */}
                <div className="mb-3">
                  <label htmlFor="birthDate" className="form-label fw-semibold">
                    วันเกิด <span className="text-danger">*</span>
                  </label>
                  <input
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    className={getInputClassName('birthDate')}
                  />
                  {submitted && errors.birthDate && (
                    <div className="text-danger small mt-1">
                      <i className="bi bi-exclamation-circle me-1"></i>
                      กรุณาเลือกวันเกิด
                    </div>
                  )}
                </div>

                {/* Terms and Conditions */}
                <div className="mb-4">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="acceptTerms"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleInputChange}
                      className="form-check-input"
                    />
                    <label htmlFor="acceptTerms" className="form-check-label">
                      ยอมรับ
                      <a href="#" className="text-decoration-none ms-1" style={{ color: '#ff85a2' }}>
                        ข้อตกลงและเงื่อนไข
                      </a>
                      <span className="text-danger ms-1">*</span>
                    </label>
                  </div>
                  {submitted && errors.acceptTerms && (
                    <div className="text-danger small mt-1">
                      <i className="bi bi-exclamation-circle me-1"></i>
                      กรุณายอมรับข้อตกลงและเงื่อนไข
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-lg py-3"
                    style={{ 
                      background: 'linear-gradient(135deg, #ff85a2, #ff6b8a)',
                      border: 'none',
                      borderRadius: '12px',
                      color: 'white',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 20px rgba(255, 133, 162, 0.3)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <i className="bi bi-person-check me-2"></i>
                    สมัครสมาชิก
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div className="text-center mt-4">
                <p className="text-muted">
                  มีบัญชีอยู่แล้ว? 
                  <a href="#" className="text-decoration-none ms-1" style={{ color: '#ff85a2' }}>
                    เข้าสู่ระบบ
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}