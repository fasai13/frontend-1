'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [activeMethod, setActiveMethod] = useState('form');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // ในสถานการณ์จริงจะส่งข้อมูลไปยัง API
    alert('ส่งข้อความเรียบร้อยแล้ว! เราจะติดต่อกลับโดยเร็วที่สุด');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  // ข้อมูลการติดต่อ
  const contactInfo = {
    email: "mint@sweetdreams.com",
    phone: "062-XXX-XXXX",
    address: "123 ถนนสุขุมวิท แขวงคลองตัน เขตคลองเตย กรุงเทพฯ 10110",
    workingHours: "จันทร์-ศุกร์: 9:00 - 18:00 น.",
    socialMedia: [
      { name: "Instagram", icon: "bi-instagram", color: "#ff85a2", link: "#" },
      { name: "Facebook", icon: "bi-facebook", color: "#7ec4cf", link: "#" },
      { name: "Line", icon: "bi-line", color: "#b892ff", link: "#" },
      { name: "TikTok", icon: "bi-tiktok", color: "#ff85a2", link: "#" }
    ],
    faq: [
      { 
        question: "ทัวร์ของคุณรองรับกี่คนต่อกรุ๊ป?", 
        answer: "ทัวร์ของเรารองรับตั้งแต่ 2-10 คนต่อกรุ๊ป เพื่อให้ทุกคนได้รับประสบการณ์ที่ดีที่สุด สำหรับกรุ๊ปใหญ่กว่านี้ สามารถติดต่อเราเพื่อจัดโปรแกรมพิเศษได้" 
      },
      { 
        question: "มีบริการรับ-ส่งจากโรงแรมหรือไม่?", 
        answer: "มีบริการรับ-ส่งจากโรงแรมในเขตกรุงเทพฯ และปริมณฑล สำหรับพื้นที่อื่นๆ อาจมีค่าใช้จ่ายเพิ่มเติม" 
      },
      { 
        question: "สามารถปรับเปลี่ยนโปรแกรมทัวร์ได้หรือไม่?", 
        answer: "ได้ค่ะ เรามีบริการออกแบบทัวร์ตามความต้องการของลูกค้า โดยคุณสามารถติดต่อเราโดยตรงเพื่อปรึกษารายละเอียด" 
      }
    ]
  };

  return (
    <div className="container my-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3" style={{ color: '#ff85a2' }}>ติดต่อเรา</h1>
        <p className="lead mb-4">มีคำถามหรือข้อสงสัย? ติดต่อเราได้ตลอดเวลา เรายินดีให้คำปรึกษาและช่วยเหลือคุณ</p>
        <div className="d-flex justify-content-center gap-3 mb-4">
          {contactInfo.socialMedia.map((social, index) => (
            <a key={index} href={social.link} className="text-decoration-none" target="_blank" rel="noopener noreferrer">
              <div style={{ 
                width: '50px', 
                height: '50px', 
                background: social.color, 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
              }}>
                <i className={`bi ${social.icon} fs-4 text-white`}></i>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Contact Methods Tabs */}
      <div className="row mb-4">
        <div className="col-12">
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeMethod === 'form' ? 'active' : ''}`} 
                onClick={() => setActiveMethod('form')}
                style={{ 
                  background: activeMethod === 'form' ? '#ff85a2' : 'transparent',
                  color: activeMethod === 'form' ? 'white' : '#666',
                  borderRadius: '30px',
                  padding: '10px 20px',
                  margin: '0 5px',
                  border: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <i className="bi bi-envelope-fill me-2"></i>
                ส่งข้อความ
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeMethod === 'info' ? 'active' : ''}`} 
                onClick={() => setActiveMethod('info')}
                style={{ 
                  background: activeMethod === 'info' ? '#7ec4cf' : 'transparent',
                  color: activeMethod === 'info' ? 'white' : '#666',
                  borderRadius: '30px',
                  padding: '10px 20px',
                  margin: '0 5px',
                  border: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <i className="bi bi-info-circle-fill me-2"></i>
                ข้อมูลติดต่อ
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeMethod === 'faq' ? 'active' : ''}`} 
                onClick={() => setActiveMethod('faq')}
                style={{ 
                  background: activeMethod === 'faq' ? '#b892ff' : 'transparent',
                  color: activeMethod === 'faq' ? 'white' : '#666',
                  borderRadius: '30px',
                  padding: '10px 20px',
                  margin: '0 5px',
                  border: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <i className="bi bi-question-circle-fill me-2"></i>
                คำถามที่พบบ่อย
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Tab Content */}
      <div className="row">
        <div className="col-12">
          <div className="p-4 rounded-4 shadow-sm" style={{ 
            background: activeMethod === 'form' ? 'rgba(255, 133, 162, 0.1)' : 
                       activeMethod === 'info' ? 'rgba(126, 196, 207, 0.1)' : 
                       'rgba(184, 146, 255, 0.1)',
            minHeight: '400px'
          }}>
            {/* Contact Form */}
            {activeMethod === 'form' && (
              <div className="row">
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <div className="p-4">
                    <h3 className="mb-4" style={{ color: '#ff85a2' }}>
                      <i className="bi bi-chat-heart-fill me-2"></i>
                      ส่งข้อความถึงเรา
                    </h3>
                    <p className="mb-4">กรอกแบบฟอร์มด้านล่างเพื่อส่งข้อความถึงเรา เราจะติดต่อกลับโดยเร็วที่สุด</p>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">ชื่อ-นามสกุล</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="กรุณากรอกชื่อ-นามสกุล" 
                          required
                          style={{ borderRadius: '15px', padding: '12px 15px', border: '1px solid #ffe0e9' }}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">อีเมล</label>
                        <input 
                          type="email" 
                          className="form-control" 
                          id="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="กรุณากรอกอีเมล" 
                          required
                          style={{ borderRadius: '15px', padding: '12px 15px', border: '1px solid #ffe0e9' }}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="subject" className="form-label">หัวข้อ</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="subject" 
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="กรุณากรอกหัวข้อ" 
                          required
                          style={{ borderRadius: '15px', padding: '12px 15px', border: '1px solid #ffe0e9' }}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="message" className="form-label">ข้อความ</label>
                        <textarea 
                          className="form-control" 
                          id="message" 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="5" 
                          placeholder="กรุณากรอกข้อความ" 
                          required
                          style={{ borderRadius: '15px', padding: '12px 15px', border: '1px solid #ffe0e9' }}
                        ></textarea>
                      </div>
                      <button 
                        type="submit" 
                        className="btn px-4 py-2" 
                        style={{ 
                          background: '#ff85a2', 
                          color: 'white', 
                          borderRadius: '30px',
                          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <i className="bi bi-send-fill me-2"></i>
                        ส่งข้อความ
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                  <div className="text-center">
                    <div className="position-relative" style={{ width: '300px', height: '300px', margin: '0 auto' }}>
                      <Image 
                        src="/images/profile.jpg" 
                        alt="Contact Us" 
                        width={300} 
                        height={300}
                        className="rounded-circle shadow"
                        style={{ objectFit: 'cover', border: '5px solid white' }}
                      />
                      <div className="position-absolute" style={{ 
                        bottom: '10px', 
                        right: '10px', 
                        background: '#ff85a2', 
                        width: '60px', 
                        height: '60px', 
                        borderRadius: '50%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                        border: '3px solid white'
                      }}>
                        <i className="bi bi-chat-heart-fill fs-4 text-white"></i>
                      </div>
                    </div>
                    <p className="mt-4 fst-italic">"เราพร้อมรับฟังทุกความคิดเห็นและคำแนะนำจากคุณ"</p>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Info */}
            {activeMethod === 'info' && (
              <div className="row">
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <h3 className="mb-4" style={{ color: '#7ec4cf' }}>
                    <i className="bi bi-geo-alt-fill me-2"></i>
                    ข้อมูลติดต่อ
                  </h3>
                  <div className="card border-0 shadow-sm mb-4">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div style={{ 
                          width: '50px', 
                          height: '50px', 
                          background: '#7ec4cf', 
                          borderRadius: '50%', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          marginRight: '15px'
                        }}>
                          <i className="bi bi-envelope-fill fs-4 text-white"></i>
                        </div>
                        <div>
                          <h5 className="card-title mb-1">อีเมล</h5>
                          <p className="card-text mb-0">{contactInfo.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card border-0 shadow-sm mb-4">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div style={{ 
                          width: '50px', 
                          height: '50px', 
                          background: '#7ec4cf', 
                          borderRadius: '50%', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          marginRight: '15px'
                        }}>
                          <i className="bi bi-telephone-fill fs-4 text-white"></i>
                        </div>
                        <div>
                          <h5 className="card-title mb-1">เบอร์โทรศัพท์</h5>
                          <p className="card-text mb-0">{contactInfo.phone}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card border-0 shadow-sm mb-4">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div style={{ 
                          width: '50px', 
                          height: '50px', 
                          background: '#7ec4cf', 
                          borderRadius: '50%', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          marginRight: '15px'
                        }}>
                          <i className="bi bi-geo-alt-fill fs-4 text-white"></i>
                        </div>
                        <div>
                          <h5 className="card-title mb-1">ที่อยู่</h5>
                          <p className="card-text mb-0">{contactInfo.address}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card border-0 shadow-sm">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div style={{ 
                          width: '50px', 
                          height: '50px', 
                          background: '#7ec4cf', 
                          borderRadius: '50%', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          marginRight: '15px'
                        }}>
                          <i className="bi bi-clock-fill fs-4 text-white"></i>
                        </div>
                        <div>
                          <h5 className="card-title mb-1">เวลาทำการ</h5>
                          <p className="card-text mb-0">{contactInfo.workingHours}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h3 className="mb-4" style={{ color: '#7ec4cf' }}>
                    <i className="bi bi-map-fill me-2"></i>
                    แผนที่
                  </h3>
                  <div className="card border-0 shadow-sm">
                    <div className="card-body p-0">
                      <div className="ratio ratio-16x9 rounded-3 overflow-hidden">
                        <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4790.251117770331!2d98.9839193!3d18.7928973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a9a71d80adf%3A0xe41f657fc5052416!2z4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LiZ4Li04LiE4LmA4LiK4Li14Lii4LiH4LmD4Lir4Lih4LmI!5e1!3m2!1sth!2sth!4v1753104349691!5m2!1sth!2sth" 
                          width="600" 
                          height="450" 
                          style={{ border: 0 }} 
                          allowFullScreen="" 
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* FAQ */}
            {activeMethod === 'faq' && (
              <div>
                <h3 className="mb-4" style={{ color: '#b892ff' }}>
                  <i className="bi bi-question-circle-fill me-2"></i>
                  คำถามที่พบบ่อย
                </h3>
                <div className="accordion" id="faqAccordion">
                  {contactInfo.faq.map((item, index) => (
                    <div key={index} className="accordion-item border-0 mb-3 shadow-sm rounded-3 overflow-hidden">
                      <h2 className="accordion-header" id={`heading${index}`}>
                        <button 
                          className="accordion-button collapsed" 
                          type="button" 
                          data-bs-toggle="collapse" 
                          data-bs-target={`#collapse${index}`} 
                          aria-expanded="false" 
                          aria-controls={`collapse${index}`}
                          style={{ 
                            background: 'rgba(184, 146, 255, 0.1)',
                            color: '#333',
                            fontWeight: '600',
                            padding: '15px 20px'
                          }}
                        >
                          <i className="bi bi-question-circle me-2" style={{ color: '#b892ff' }}></i>
                          {item.question}
                        </button>
                      </h2>
                      <div 
                        id={`collapse${index}`} 
                        className="accordion-collapse collapse" 
                        aria-labelledby={`heading${index}`} 
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body p-4">
                          <p className="mb-0">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-5">
                  <p className="mb-4">ยังไม่พบคำตอบที่คุณต้องการ? ติดต่อเราโดยตรงได้เลย</p>
                  <button 
                    className="btn px-4 py-2" 
                    onClick={() => setActiveMethod('form')}
                    style={{ 
                      background: '#b892ff', 
                      color: 'white', 
                      borderRadius: '30px',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <i className="bi bi-chat-dots-fill me-2"></i>
                    ติดต่อเรา
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="p-4 rounded-4 shadow-sm text-center" style={{ background: 'rgba(255, 133, 162, 0.1)' }}>
            <h3 className="mb-3" style={{ color: '#ff85a2' }}>รับข่าวสารและโปรโมชั่น</h3>
            <p className="mb-4">ลงทะเบียนเพื่อรับข่าวสารและโปรโมชั่นพิเศษจากเราก่อนใคร</p>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="input-group mb-3">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="กรอกอีเมลของคุณ" 
                    aria-label="Email" 
                    aria-describedby="button-addon2"
                    style={{ borderRadius: '30px 0 0 30px', padding: '12px 15px', border: '1px solid #ffe0e9' }}
                  />
                  <button 
                    className="btn px-4" 
                    type="button" 
                    id="button-addon2"
                    style={{ 
                      background: '#ff85a2', 
                      color: 'white', 
                      borderRadius: '0 30px 30px 0',
                      border: '1px solid #ff85a2'
                    }}
                  >
                    <i className="bi bi-envelope-check-fill me-2"></i>
                    สมัครรับข่าวสาร
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}