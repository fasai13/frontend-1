'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Service() {
  const [activeCategory, setActiveCategory] = useState('all');

  // ข้อมูลบริการท่องเที่ยว
  const tourServices = [
    {
      id: 1,
      title: "ทัวร์เมืองเก่า",
      description: "สัมผัสเสน่ห์ของเมืองเก่าและประวัติศาสตร์อันยาวนาน ชมสถาปัตยกรรมโบราณ พร้อมเรียนรู้วัฒนธรรมท้องถิ่น",
      image: "/images/service1.jpg",
      duration: "1 วัน",
      price: "1,500 บาท/ท่าน",
      category: "cultural",
      highlights: [
        "เยี่ยมชมวัดและโบราณสถานสำคัญ",
        "ชิมอาหารท้องถิ่นรสเลิศ",
        "เรียนรู้ประวัติศาสตร์จากไกด์ผู้เชี่ยวชาญ"
      ]
    },
    {
      id: 2,
      title: "ทัวร์ธรรมชาติและผจญภัย",
      description: "ผจญภัยไปกับเส้นทางธรรมชาติอันงดงาม ล่องแก่ง เดินป่า และกิจกรรมกลางแจ้งที่น่าตื่นเต้น",
      image: "/images/service2.jpg",
      duration: "2 วัน 1 คืน",
      price: "3,500 บาท/ท่าน",
      category: "adventure",
      highlights: [
        "ล่องแก่งในแม่น้ำสายสำคัญ",
        "เดินป่าศึกษาธรรมชาติ",
        "พักแคมป์ท่ามกลางธรรมชาติ"
      ]
    },
    {
      id: 3,
      title: "ทัวร์เกาะและชายหาด",
      description: "พักผ่อนบนชายหาดสวยและเกาะที่มีน้ำทะเลใสสะอาด ดำน้ำชมปะการังและสัตว์ทะเลหลากสี",
      image: "/images/service3.jpg",
      duration: "3 วัน 2 คืน",
      price: "5,500 บาท/ท่าน",
      category: "beach",
      highlights: [
        "ดำน้ำตื้นชมปะการังสวยงาม",
        "พักรีสอร์ทริมชายหาด",
        "ชมพระอาทิตย์ตกที่สวยที่สุด"
      ]
    },
    {
      id: 4,
      title: "ทัวร์อาหารและวัฒนธรรม",
      description: "สัมผัสวัฒนธรรมการกินของไทยผ่านอาหารท้องถิ่นรสเลิศ เรียนรู้การทำอาหารไทย และเยี่ยมชมตลาดท้องถิ่น",
      image: "/images/service4.jpg",
      duration: "1 วัน",
      price: "2,000 บาท/ท่าน",
      category: "cultural",
      highlights: [
        "เรียนทำอาหารไทย 3 เมนู",
        "เยี่ยมชมตลาดสดท้องถิ่น",
        "ชิมอาหารจากร้านดังในย่านเก่าแก่"
      ]
    },
    {
      id: 5,
      title: "ทัวร์ภูเขาและน้ำตก",
      description: "สัมผัสความสดชื่นของธรรมชาติบนภูเขา ชมวิวทิวทัศน์อันงดงาม และแช่น้ำตกใสเย็น",
      image: "/images/service5.jpg",
      duration: "2 วัน 1 คืน",
      price: "3,000 บาท/ท่าน",
      category: "adventure",
      highlights: [
        "เดินป่าชมพันธุ์ไม้หายาก",
        "แช่น้ำตกธรรมชาติ",
        "ชมวิวพระอาทิตย์ขึ้นบนยอดเขา"
      ]
    },
    {
      id: 6,
      title: "ทัวร์ชุมชนท้องถิ่น",
      description: "เรียนรู้วิถีชีวิตของชุมชนท้องถิ่น ร่วมทำกิจกรรมกับชาวบ้าน และสัมผัสความเป็นอยู่แบบดั้งเดิม",
      image: "/images/service6.jpg",
      duration: "2 วัน 1 คืน",
      price: "2,500 บาท/ท่าน",
      category: "cultural",
      highlights: [
        "พักโฮมสเตย์กับชาวบ้าน",
        "เรียนรู้หัตถกรรมท้องถิ่น",
        "ร่วมทำอาหารพื้นบ้าน"
      ]
    }
  ];

  // กรองบริการตามหมวดหมู่
  const filteredServices = activeCategory === 'all' 
    ? tourServices 
    : tourServices.filter(service => service.category === activeCategory);

  // หมวดหมู่ทั้งหมด
  const categories = [
    { id: 'all', name: 'ทั้งหมด', icon: 'bi-grid-fill', color: '#ff85a2' },
    { id: 'cultural', name: 'วัฒนธรรม', icon: 'bi-bank2', color: '#7ec4cf' },
    { id: 'adventure', name: 'ผจญภัย', icon: 'bi-tree-fill', color: '#b892ff' },
    { id: 'beach', name: 'ทะเล', icon: 'bi-water', color: '#ff85a2' }
  ];

  return (
    <div className="container my-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3" style={{ color: '#ff85a2' }}>บริการของเรา</h1>
        <p className="lead mb-4">ค้นพบประสบการณ์ท่องเที่ยวที่หลากหลายและน่าประทับใจกับเรา</p>
        
        {/* Categories */}
        <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
          {categories.map((category) => (
            <button 
              key={category.id}
              className={`btn px-4 py-2 d-flex align-items-center gap-2 ${activeCategory === category.id ? 'text-white' : 'text-dark'}`}
              style={{ 
                background: activeCategory === category.id ? category.color : 'transparent',
                borderRadius: '30px',
                border: `1px solid ${category.color}`,
                transition: 'all 0.3s ease'
              }}
              onClick={() => setActiveCategory(category.id)}
            >
              <i className={`bi ${category.icon}`}></i>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="row g-4">
        {filteredServices.map((service) => (
          <div key={service.id} className="col-md-6 col-lg-4">
            <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden">
              <div className="position-relative">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  width={500} 
                  height={300}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="position-absolute bottom-0 start-0 p-3 w-100" style={{ 
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                  color: 'white'
                }}>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge rounded-pill" style={{ 
                      background: service.category === 'cultural' ? '#7ec4cf' : 
                                service.category === 'adventure' ? '#b892ff' : '#ff85a2',
                      padding: '8px 12px'
                    }}>
                      <i className={`bi ${
                        service.category === 'cultural' ? 'bi-bank2' : 
                        service.category === 'adventure' ? 'bi-tree-fill' : 'bi-water'
                      } me-1`}></i>
                      {service.category === 'cultural' ? 'วัฒนธรรม' : 
                       service.category === 'adventure' ? 'ผจญภัย' : 'ทะเล'}
                    </span>
                    <span className="badge rounded-pill bg-white text-dark" style={{ padding: '8px 12px' }}>
                      <i className="bi bi-clock me-1"></i>
                      {service.duration}
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-body p-4">
                <h5 className="card-title mb-3" style={{ 
                  color: service.category === 'cultural' ? '#7ec4cf' : 
                         service.category === 'adventure' ? '#b892ff' : '#ff85a2'
                }}>{service.title}</h5>
                <p className="card-text mb-3">{service.description}</p>
                <div className="mb-3">
                  <h6 className="mb-2">ไฮไลท์:</h6>
                  <ul className="list-unstyled">
                    {service.highlights.map((highlight, index) => (
                      <li key={index} className="mb-1 d-flex align-items-center">
                        <i className="bi bi-check-circle-fill me-2" style={{ 
                          color: service.category === 'cultural' ? '#7ec4cf' : 
                                service.category === 'adventure' ? '#b892ff' : '#ff85a2'
                        }}></i>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="card-footer bg-white border-0 p-4 pt-0 d-flex justify-content-between align-items-center">
                <div className="fw-bold" style={{ 
                  color: service.category === 'cultural' ? '#7ec4cf' : 
                         service.category === 'adventure' ? '#b892ff' : '#ff85a2',
                  fontSize: '1.1rem'
                }}>
                  {service.price}
                </div>
                <button className="btn px-4 py-2" style={{ 
                  background: service.category === 'cultural' ? '#7ec4cf' : 
                            service.category === 'adventure' ? '#b892ff' : '#ff85a2',
                  color: 'white',
                  borderRadius: '30px'
                }}>
                  <i className="bi bi-info-circle me-2"></i>
                  รายละเอียด
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Special Offers Section */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="p-4 rounded-4 shadow-sm" style={{ background: 'rgba(255, 133, 162, 0.1)' }}>
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h3 className="mb-3" style={{ color: '#ff85a2' }}>โปรโมชั่นพิเศษ</h3>
                <p className="mb-4">จองทัวร์วันนี้รับส่วนลดทันที 15% สำหรับการเดินทางในเดือนหน้า พร้อมของสมนาคุณพิเศษ</p>
                <div className="d-flex gap-3">
                  <button className="btn px-4 py-2" style={{ background: '#ff85a2', color: 'white', borderRadius: '30px' }}>
                    <i className="bi bi-calendar-check me-2"></i>
                    จองเลย
                  </button>
                  <button className="btn px-4 py-2" style={{ background: 'transparent', color: '#ff85a2', borderRadius: '30px', border: '1px solid #ff85a2' }}>
                    <i className="bi bi-info-circle me-2"></i>
                    ดูรายละเอียด
                  </button>
                </div>
              </div>
              <div className="col-lg-4 text-center mt-4 mt-lg-0">
                <div className="position-relative" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                  <Image 
                    src="/images/promotion.jpg" 
                    alt="โปรโมชั่นพิเศษ" 
                    width={200} 
                    height={200}
                    className="rounded-circle shadow"
                    style={{ objectFit: 'cover', border: '5px solid white' }}
                  />
                  <div className="position-absolute" style={{ 
                    top: '0', 
                    right: '0', 
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
                    <div className="text-white fw-bold">-15%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="row mt-5">
        <div className="col-12 text-center mb-4">
          <h3 className="mb-3" style={{ color: '#7ec4cf' }}>เสียงจากลูกค้า</h3>
          <p className="mb-4">ความประทับใจจากผู้ที่เคยใช้บริการของเรา</p>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow-sm h-100 p-4 rounded-4">
            <div className="d-flex align-items-center mb-3">
              <div className="me-3">
                <Image 
                  src="/images/testimonial1.jpg" 
                  alt="ลูกค้า 1" 
                  width={60} 
                  height={60}
                  className="rounded-circle"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <h5 className="mb-1">คุณสมศักดิ์</h5>
                <div className="text-warning">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
            </div>
            <p className="card-text fst-italic">"ประทับใจมากกับทัวร์เมืองเก่า ไกด์มีความรู้และเป็นกันเอง ได้เรียนรู้ประวัติศาสตร์มากมาย อาหารอร่อย สถานที่สวยงาม แนะนำเลยครับ"</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow-sm h-100 p-4 rounded-4">
            <div className="d-flex align-items-center mb-3">
              <div className="me-3">
                <Image 
                  src="/images/testimonial2.jpg" 
                  alt="ลูกค้า 2" 
                  width={60} 
                  height={60}
                  className="rounded-circle"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <h5 className="mb-1">คุณนภา</h5>
                <div className="text-warning">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                </div>
              </div>
            </div>
            <p className="card-text fst-italic">"ทัวร์เกาะและชายหาดสุดประทับใจ น้ำทะเลใสมาก ปะการังสวยงาม ที่พักสะดวกสบาย การดูแลเอาใจใส่ดีเยี่ยม จะกลับมาใช้บริการอีกแน่นอนค่ะ"</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow-sm h-100 p-4 rounded-4">
            <div className="d-flex align-items-center mb-3">
              <div className="me-3">
                <Image 
                  src="/images/testimonial3.jpg" 
                  alt="ลูกค้า 3" 
                  width={60} 
                  height={60}
                  className="rounded-circle"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <h5 className="mb-1">คุณวิชัย</h5>
                <div className="text-warning">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
            </div>
            <p className="card-text fst-italic">"ทัวร์ผจญภัยสุดมันส์! กิจกรรมล่องแก่งตื่นเต้นมาก แคมป์กลางป่าก็สะดวกเกินคาด อาหารอร่อย ไกด์ดูแลความปลอดภัยดีมาก ประทับใจสุดๆ"</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="row mt-4">
        <div className="col-12 text-center">
          <div className="p-4 rounded-4 shadow-sm" style={{ background: 'rgba(184, 146, 255, 0.1)' }}>
            <h3 className="mb-3" style={{ color: '#b892ff' }}>สนใจบริการของเรา?</h3>
            <p className="mb-4">ติดต่อเราเพื่อสอบถามข้อมูลเพิ่มเติมหรือจองทัวร์ได้ตามช่องทางด้านล่าง</p>
            <div className="d-flex justify-content-center gap-3">
              <button className="btn px-4 py-2" style={{ background: '#b892ff', color: 'white', borderRadius: '30px' }}>
                <i className="bi bi-telephone-fill me-2"></i>
                โทรหาเรา
              </button>
              <button className="btn px-4 py-2" style={{ background: '#7ec4cf', color: 'white', borderRadius: '30px' }}>
                <i className="bi bi-chat-fill me-2"></i>
                แชทกับเรา
              </button>
              <button className="btn px-4 py-2" style={{ background: '#ff85a2', color: 'white', borderRadius: '30px' }}>
                <i className="bi bi-envelope-fill me-2"></i>
                ส่งอีเมล
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}