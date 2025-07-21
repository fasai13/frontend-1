'use client';
import { useState } from 'react';

export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    if (validateForm()) {
      alert('เข้าสู่ระบบสำเร็จ!');
      console.log('Login data:', formData);
      // Reset form
      setFormData({
        username: '',
        password: '',
        rememberMe: false
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

  return (
    <div className="min-vh-100 align-items-center" style={{ 
      background: 'linear-gradient(135deg, rgba(255, 133, 162, 0.1) 0%, rgba(126, 196, 207, 0.1) 50%, rgba(184, 146, 255, 0.1) 100%)'
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-7 mt-5">
            <div className="card border-0 shadow-lg rounded-4">
              <div className="card-body p-5">
                {/* Header */}
                <div className="text-center mb-4">
                  <div className="mb-3">
                    <div 
                      className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
                      style={{ 
                        width: '80px', 
                        height: '80px',
                        background: 'linear-gradient(135deg, #ff85a2, #ff6b8a)'
                      }}
                    >
                      <i className="bi bi-person-fill text-white" style={{ fontSize: '2rem' }}></i>
                    </div>
                  </div>
                  <h2 className="fw-bold mb-2" style={{ color: '#ff85a2' }}>
                    เข้าสู่ระบบ
                  </h2>
                  <p className="text-muted">ยินดีต้อนรับกลับ! กรอกข้อมูลเพื่อเข้าสู่ระบบ</p>
                </div>

                <div>
                  {/* Username */}
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label fw-semibold">
                      <i className="bi bi-person me-2" style={{ color: '#ff85a2' }}></i>
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
                      style={{ 
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: submitted && errors.username ? '1px solid #dc3545' : '1px solid #e0e0e0'
                      }}
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
                      <i className="bi bi-lock me-2" style={{ color: '#ff85a2' }}></i>
                      รหัสผ่าน <span className="text-danger">*</span>
                    </label>
                    <div className="position-relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={getInputClassName('password')}
                        placeholder="กรอกรหัสผ่าน"
                        style={{ 
                          padding: '12px 50px 12px 16px',
                          borderRadius: '10px',
                          border: submitted && errors.password ? '1px solid #dc3545' : '1px solid #e0e0e0'
                        }}
                      />
                      <button
                        type="button"
                        className="btn position-absolute end-0 top-50 translate-middle-y me-2"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ 
                          border: 'none',
                          background: 'transparent',
                          color: '#ff85a2'
                        }}
                      >
                        <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                      </button>
                    </div>
                    {submitted && errors.password && (
                      <div className="text-danger small mt-1">
                        <i className="bi bi-exclamation-circle me-1"></i>
                        กรุณากรอกรหัสผ่าน
                      </div>
                    )}
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        className="form-check-input"
                        style={{ borderColor: '#ff85a2' }}
                      />
                      <label htmlFor="rememberMe" className="form-check-label small">
                        จดจำการเข้าสู่ระบบ
                      </label>
                    </div>
                    <a 
                      href="#" 
                      className="text-decoration-none small"
                      style={{ color: '#ff85a2' }}
                    >
                      ลืมรหัสผ่าน?
                    </a>
                  </div>

                  {/* Login Button */}
                  <div className="d-grid mb-4">
                    <button
                      type="button"
                      onClick={handleSubmit}
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
                      <i className="bi bi-box-arrow-in-right me-2"></i>
                      เข้าสู่ระบบ
                    </button>
                  </div>

                  {/* Divider */}
                  <div className="position-relative mb-4">
                    <hr className="text-muted" />
                    <span 
                      className="position-absolute top-50 start-50 translate-middle px-3 small text-muted"
                      style={{ backgroundColor: 'white' }}
                    >
                      หรือ
                    </span>
                  </div>

                  {/* Social Login */}
                  <div className="row g-2 mb-4">
                    <div className="col-6">
                      <button
                        type="button"
                        className="btn w-100 py-2"
                        style={{ 
                          border: '1px solid #e0e0e0',
                          borderRadius: '10px',
                          background: 'white',
                          color: '#333'
                        }}
                      >
                        <i className="bi bi-google me-2" style={{ color: '#db4437' }}></i>
                        Google
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        type="button"
                        className="btn w-100 py-2"
                        style={{ 
                          border: '1px solid #e0e0e0',
                          borderRadius: '10px',
                          background: 'white',
                          color: '#333'
                        }}
                      >
                        <i className="bi bi-facebook me-2" style={{ color: '#4267B2' }}></i>
                        Facebook
                      </button>
                    </div>
                  </div>

                  {/* Register Link */}
                  <div className="text-center">
                    <p className="text-muted mb-0">
                      ยังไม่มีบัญชี? 
                      <a 
                        href="#" 
                        className="text-decoration-none fw-semibold ms-1"
                        style={{ color: '#ff85a2' }}
                      >
                        สมัครสมาชิกเลย
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}