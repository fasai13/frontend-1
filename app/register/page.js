"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    title: "",
    firstName: "",
    lastName: "",
    address: "",
    gender: "",
    birthDate: "",
    acceptTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const titleOptions = [
    { value: "", label: "เลือกคำนำหน้า" },
    { value: "นาย", label: "นาย" },
    { value: "นาง", label: "นาง" },
    { value: "นางสาว", label: "นางสาว" },
    { value: "ดร.", label: "ดร." },
    { value: "ศาสตราจารย์", label: "ศาสตราจารย์" },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!validateForm()) return;

    try {
      const res = await fetch("http://itdev.cmtc.ac.th:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          firstname: formData.title,
          fullname: formData.firstName,
          lastname: formData.lastName,
          address: formData.address,
          sex: formData.gender,
          birthday: formData.birthDate,
        }),
      });

      const result = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "สมัครสมาชิกสำเร็จ!",
          text: "ข้อมูลถูกบันทึกเรียบร้อยแล้ว",
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          router.push("/login");
        });

        setFormData({
          username: "",
          password: "",
          title: "",
          firstName: "",
          lastName: "",
          address: "",
          gender: "",
          birthDate: "",
          acceptTerms: false,
        });
        setSubmitted(false);
        setErrors({});
      } else {
        Swal.fire({
          icon: "error",
          title: "เกิดข้อผิดพลาด",
          text: result.message || "ไม่สามารถสมัครสมาชิกได้",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "ข้อผิดพลาดของระบบ",
        text: "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้",
      });
      console.error(error);
    }
  };

  const getInputClassName = (field) =>
    submitted && errors[field] ? "form-control border-danger" : "form-control";

  const getSelectClassName = (field) =>
    submitted && errors[field] ? "form-select border-danger" : "form-select";

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-xl-6">
          <div className="card border-0 shadow-lg rounded-4">
            <div className="card-body p-5">
              <div className="text-center mb-4">
                <h2 className="fw-bold mb-3" style={{ color: "#ff85a2" }}>
                  สมัครสมาชิก
                </h2>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Username & Password */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">ชื่อผู้ใช้ *</label>
                  <input
                    name="username"
                    className={getInputClassName("username")}
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="ชื่อผู้ใช้"
                  />
                  {submitted && errors.username && (
                    <div className="text-danger small">กรุณากรอกชื่อผู้ใช้</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">รหัสผ่าน *</label>
                  <input
                    type="password"
                    name="password"
                    className={getInputClassName("password")}
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="รหัสผ่าน"
                  />
                  {submitted && errors.password && (
                    <div className="text-danger small">กรุณากรอกรหัสผ่าน</div>
                  )}
                </div>

                {/* Title */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">คำนำหน้า *</label>
                  <select
                    name="title"
                    className={getSelectClassName("title")}
                    value={formData.title}
                    onChange={handleInputChange}
                  >
                    {titleOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {submitted && errors.title && (
                    <div className="text-danger small">กรุณาเลือกคำนำหน้า</div>
                  )}
                </div>

                {/* First & Last Name */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">ชื่อ *</label>
                    <input
                      name="firstName"
                      className={getInputClassName("firstName")}
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="ชื่อจริง"
                    />
                    {submitted && errors.firstName && (
                      <div className="text-danger small">กรุณากรอกชื่อ</div>
                    )}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">นามสกุล *</label>
                    <input
                      name="lastName"
                      className={getInputClassName("lastName")}
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="นามสกุล"
                    />
                    {submitted && errors.lastName && (
                      <div className="text-danger small">กรุณากรอกนามสกุล</div>
                    )}
                  </div>
                </div>

                {/* Address */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">ที่อยู่ *</label>
                  <textarea
                    name="address"
                    className={getInputClassName("address")}
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="3"
                  />
                  {submitted && errors.address && (
                    <div className="text-danger small">กรุณากรอกที่อยู่</div>
                  )}
                </div>

                {/* Gender */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">เพศ *</label>
                  <div className="d-flex gap-4 mt-2">
                    {["ชาย", "หญิง", "อื่นๆ"].map((g) => (
                      <div className="form-check" key={g}>
                        <input
                          type="radio"
                          id={g}
                          name="gender"
                          value={g}
                          checked={formData.gender === g}
                          onChange={handleInputChange}
                          className="form-check-input"
                        />
                        <label htmlFor={g} className="form-check-label">
                          {g === "ชาย"
                            ? "ชาย"
                            : g === "หญิง"
                            ? "หญิง"
                            : "อื่นๆ"}
                        </label>
                      </div>
                    ))}
                  </div>
                  {submitted && errors.gender && (
                    <div className="text-danger small">กรุณาเลือกเพศ</div>
                  )}
                </div>

                {/* Birth Date */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">วันเกิด *</label>
                  <input
                    type="date"
                    name="birthDate"
                    className={getInputClassName("birthDate")}
                    value={formData.birthDate}
                    onChange={handleInputChange}
                  />
                  {submitted && errors.birthDate && (
                    <div className="text-danger small">กรุณาเลือกวันเกิด</div>
                  )}
                </div>

                {/* Terms */}
                <div className="mb-4 form-check">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    className="form-check-input"
                    id="acceptTerms"
                  />
                  <label htmlFor="acceptTerms" className="form-check-label">
                    ยอมรับ{" "}
                    <a href="#" className="text-decoration-none ms-1">
                      ข้อตกลงและเงื่อนไข
                    </a>{" "}
                    <span className="text-danger">*</span>
                  </label>
                  {submitted && errors.acceptTerms && (
                    <div className="text-danger small">กรุณายอมรับข้อตกลง</div>
                  )}
                </div>

                {/* Submit */}
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-lg py-3"
                    style={{
                      background: "linear-gradient(135deg, #ff85a2, #ff6b8a)",
                      border: "none",
                      borderRadius: "12px",
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    สมัครสมาชิก
                  </button>
                </div>
              </form>

              <div className="text-center mt-4">
                <p className="text-muted">
                  มีบัญชีอยู่แล้ว?
                  <a
                    href="/login"
                    className="ms-1"
                    style={{ color: "#ff85a2" }}
                  >
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