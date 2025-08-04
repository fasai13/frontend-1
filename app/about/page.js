'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('story');

  // ข้อมูลส่วนตัว
  const personalInfo = {
    name: "Sudakaew Phaya",
    nickname: "ฟ้าใส",
    role: "Travel Guide & Blogger",
    bio: "ฉันเป็นนักเดินทางและไกด์ท่องเที่ยวที่หลงใหลในการค้นพบสถานที่ใหม่ๆ ด้วยประสบการณ์กว่า 5 ปีในวงการท่องเที่ยว ฉันมุ่งมั่นที่จะแนะนำสถานที่ท่องเที่ยวที่ผสมผสานความทันสมัยและวัฒนธรรมไทยเข้าด้วยกัน",
    quote: "การเดินทางคือการเรียนรู้ที่ไม่มีวันสิ้นสุด",
    skills: ["Tour Planning", "Local Culture Expert", "Photography", "Travel Writing", "Sustainable Tourism"],
    education: [
      { degree: "ระดับประกาศนียบัตรวิชาชีพชั้นสูง", school: "วิทยาลัยเทคนิคเชียงใหม่", year: "2568-Present" },
      { degree: "ระดับประกาศนียบัตรวิชาชีพ", school: "วิทยาลัยเทคโนโลยีพายัพและบริหารธุรกิจ", year: "2565-2567" }
    ],
    experience: [
      { position: "ไกด์นำเที่ยวอิสระ", company: "Amazing Thailand Tours", year: "2565-ปัจจุบัน" },
      { position: "ผู้ช่วยวางแผนทัวร์", company: "Discover Thailand", year: "2564-2565" }
    ],
    socialMedia: [
      { platform: "Instagram", handle: "@fah_travels", icon: "bi-instagram" },
      { platform: "YouTube", handle: "Fah's Journey", icon: "bi-youtube" },
      { platform: "Facebook", handle: "ท่องเที่ยวกับฟ้าใส", icon: "bi-facebook" }
    ]
  };

  return (
    <div className="container my-5">
      {/* Header Section */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-5 text-center mb-4 mb-lg-0">
          <div
            className="position-relative"
            style={{ width: "300px", height: "300px", margin: "0 auto" }}
          >
            <Image
              src="/images/f1.jpg"
              alt={personalInfo.name}
              width={300}
              height={300}
              className="rounded-circle shadow"
              style={{ objectFit: "cover", border: "5px solid white" }}
            />
            <div
              className="position-absolute"
              style={{
                bottom: "10px",
                right: "10px",
                background: "#ff85a2",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                border: "3px solid white",
              }}
            >
              <i className="bi bi-compass-fill fs-4 text-white"></i>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="p-4 rounded-4 shadow-sm">
            <h1 className="display-5 fw-bold mb-2" style={{ color: "#ff85a2" }}>
              {personalInfo.name}
            </h1>
            <h3 className="fs-4 mb-3 text-secondary">
              "{personalInfo.nickname}" - {personalInfo.role}
            </h3>
            <p className="lead mb-4">{personalInfo.bio}</p>
            <div className="d-flex gap-3 mb-3">
              {personalInfo.socialMedia.map((social, index) => (
                <a key={index} href="#" className="text-decoration-none">
                  <div
                    style={{
                      width: "45px",
                      height: "45px",
                      background: "#ff85a2",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <i className={`bi ${social.icon} fs-5 text-white`}></i>
                  </div>
                </a>
              ))}
            </div>
            <div className="p-3 rounded-3 mb-3" style={{ background: "white" }}>
              <p className="fst-italic mb-0">"{personalInfo.quote}"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="row mb-4">
        <div className="col-12">
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "story" ? "active" : ""}`}
                onClick={() => setActiveTab("story")}
                style={{
                  background: activeTab === "story" ? "#ff85a2" : "transparent",
                  color: activeTab === "story" ? "white" : "#666",
                  borderRadius: "30px",
                  padding: "10px 20px",
                  margin: "0 5px",
                  border: "none",
                  transition: "all 0.3s ease",
                }}
              >
                <i className="bi bi-book me-2"></i>
                เรื่องราวของฉัน
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "skills" ? "active" : ""}`}
                onClick={() => setActiveTab("skills")}
                style={{
                  background:
                    activeTab === "skills" ? "#7ec4cf" : "transparent",
                  color: activeTab === "skills" ? "white" : "#666",
                  borderRadius: "30px",
                  padding: "10px 20px",
                  margin: "0 5px",
                  border: "none",
                  transition: "all 0.3s ease",
                }}
              >
                <i className="bi bi-stars me-2"></i>
                ทักษะและความสามารถ
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "experience" ? "active" : ""
                }`}
                onClick={() => setActiveTab("experience")}
                style={{
                  background:
                    activeTab === "experience" ? "#b892ff" : "transparent",
                  color: activeTab === "experience" ? "white" : "#666",
                  borderRadius: "30px",
                  padding: "10px 20px",
                  margin: "0 5px",
                  border: "none",
                  transition: "all 0.3s ease",
                }}
              >
                <i className="bi bi-briefcase me-2"></i>
                ประสบการณ์
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Tab Content */}
      <div className="row">
        <div className="col-12">
          <div
            className="p-4 rounded-4 shadow-sm"
            style={{
              background:
                activeTab === "story"
                  ? "rgba(255, 133, 162, 0.1)"
                  : activeTab === "skills"
                  ? "rgba(126, 196, 207, 0.1)"
                  : "rgba(184, 146, 255, 0.1)",
              minHeight: "300px",
            }}
          >
            {/* My Story Tab */}
            {activeTab === "story" && (
              <div className="story-content">
                <h3 className="mb-4" style={{ color: "#ff85a2" }}>
                  <i className="bi bi-quote me-2"></i>
                  เรื่องราวของฉัน
                </h3>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body">
                        <h5 className="card-title mb-3">
                          จุดเริ่มต้นของการเดินทาง
                        </h5>
                        <p className="card-text">
                          ความหลงใหลในการท่องเที่ยวของฉันเริ่มต้นตั้งแต่วัยเด็ก
                          เมื่อครอบครัวพาไปเที่ยวตามจังหวัดต่างๆ ทั่วประเทศไทย
                          จากนั้นฉันได้ศึกษาด้านการท่องเที่ยวอย่างจริงจัง
                          และค้นพบว่านี่คือเส้นทางที่ฉันต้องการจะเดิน
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body">
                        <h5 className="card-title mb-3">แรงบันดาลใจ</h5>
                        <p className="card-text">
                          แรงบันดาลใจของฉันมาจากวัฒนธรรมท้องถิ่นและธรรมชาติอันงดงามของประเทศไทย
                          ฉันชอบค้นหาสถานที่ท่องเที่ยวที่ยังไม่เป็นที่รู้จักมากนัก
                          และนำเสนอมุมมองใหม่ๆ ของสถานที่ท่องเที่ยวยอดนิยม
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mb-4">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title mb-3">ปรัชญาการท่องเที่ยว</h5>
                        <p className="card-text">
                          ฉันเชื่อว่าการท่องเที่ยวควรเป็นมากกว่าแค่การถ่ายรูปสวยๆ
                          แต่เป็นการเรียนรู้วัฒนธรรม ผู้คน และวิถีชีวิตท้องถิ่น
                          ฉันมุ่งมั่นที่จะส่งเสริมการท่องเที่ยวอย่างยั่งยืนที่เคารพธรรมชาติและชุมชนท้องถิ่น
                          ทุกทริปของฉันออกแบบด้วยความใส่ใจในรายละเอียดและคำนึงถึงผลกระทบต่อสิ่งแวดล้อม
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Skills Tab */}
            {activeTab === "skills" && (
              <div className="skills-content">
                <h3 className="mb-4" style={{ color: "#7ec4cf" }}>
                  <i className="bi bi-lightning-charge me-2"></i>
                  ทักษะและความสามารถ
                </h3>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body">
                        <h5 className="card-title mb-3">ทักษะหลัก</h5>
                        <ul className="list-group list-group-flush">
                          {personalInfo.skills.map((skill, index) => (
                            <li
                              key={index}
                              className="list-group-item border-0 d-flex align-items-center"
                            >
                              <div
                                style={{
                                  width: "30px",
                                  height: "30px",
                                  background: "#7ec4cf",
                                  borderRadius: "50%",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  marginRight: "15px",
                                }}
                              >
                                <i className="bi bi-check-lg text-white"></i>
                              </div>
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body">
                        <h5 className="card-title mb-3">การศึกษา</h5>
                        <ul className="list-group list-group-flush">
                          {personalInfo.education.map((edu, index) => (
                            <li
                              key={index}
                              className="list-group-item border-0"
                            >
                              <div className="d-flex justify-content-between">
                                <strong>{edu.degree}</strong>
                                <span
                                  className="badge rounded-pill"
                                  style={{
                                    background: "#7ec4cf",
                                    padding: "8px 12px",
                                  }}
                                >
                                  {edu.year}
                                </span>
                              </div>
                              <div>{edu.school}</div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mb-4">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body text-center p-4">
                        <h5 className="card-title mb-3">
                          สถานที่ท่องเที่ยวที่ประทับใจ
                        </h5>
                        <div className="row">
                          <div className="col-md-4 mb-3">
                            <Image
                              src="/images/f2.jpg"
                              alt="ประตูท่าแพ"
                              width={300}
                              height={200}
                              className="rounded-3 shadow-sm img-fluid"
                              style={{
                                objectFit: "cover",
                                height: "200px",
                                width: "100%",
                              }}
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <Image
                              src="/images/service2.jpg"
                              alt="สถานที่ท่องเที่ยว 2"
                              width={300}
                              height={200}
                              className="rounded-3 shadow-sm img-fluid"
                              style={{
                                objectFit: "cover",
                                height: "200px",
                                width: "100%",
                              }}
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <Image
                              src="/images/service6.jpg"
                              alt="สถานที่ท่องเที่ยว 3"
                              width={300}
                              height={200}
                              className="rounded-3 shadow-sm img-fluid"
                              style={{
                                objectFit: "cover",
                                height: "200px",
                                width: "100%",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Experience Tab */}
            {activeTab === "experience" && (
              <div className="experience-content">
                <h3 className="mb-4" style={{ color: "#b892ff" }}>
                  <i className="bi bi-briefcase me-2"></i>
                  ประสบการณ์การทำงาน
                </h3>
                <div className="timeline position-relative">
                  {personalInfo.experience.map((exp, index) => (
                    <div key={index} className="card border-0 shadow-sm mb-4">
                      <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h5 className="card-title mb-0">{exp.position}</h5>
                          <span
                            className="badge rounded-pill"
                            style={{
                              background: "#b892ff",
                              padding: "8px 12px",
                            }}
                          >
                            {exp.year}
                          </span>
                        </div>
                        <h6 className="card-subtitle mb-3 text-muted">
                          {exp.company}
                        </h6>
                        <p className="card-text">
                          {index === 0
                            ? "ในฐานะไกด์นำเที่ยวอิสระ ฉันได้พัฒนาโปรแกรมท่องเที่ยวที่มีเอกลักษณ์เฉพาะตัว นำเสนอประสบการณ์ท่องเที่ยวที่แตกต่างจากทัวร์ทั่วไป เน้นการสัมผัสวัฒนธรรมท้องถิ่นและธรรมชาติอย่างใกล้ชิด"
                            : "ทำงานร่วมกับทีมวางแผนทัวร์ในการพัฒนาเส้นทางท่องเที่ยวใหม่ๆ ช่วยในการวิจัยสถานที่ท่องเที่ยว ประสานงานกับพันธมิตรท้องถิ่น และดูแลความพึงพอใจของลูกค้า"}
                        </p>
                        <div className="mt-3">
                          <h6 className="mb-2">ผลงานสำคัญ:</h6>
                          <ul className="list-unstyled">
                            <li className="mb-2 d-flex align-items-center">
                              <i
                                className="bi bi-check-circle-fill me-2"
                                style={{ color: "#b892ff" }}
                              ></i>
                              {index === 0
                                ? "พัฒนาทัวร์ 'Hidden Thailand' ที่นำเสนอสถานที่ท่องเที่ยวที่ยังไม่เป็นที่รู้จักมากนัก"
                                : "มีส่วนร่วมในการพัฒนาเส้นทางท่องเที่ยวเชิงวัฒนธรรมที่ได้รับความนิยมสูงสุดของบริษัท"}
                            </li>
                            <li className="mb-2 d-flex align-items-center">
                              <i
                                className="bi bi-check-circle-fill me-2"
                                style={{ color: "#b892ff" }}
                              ></i>
                              {index === 0
                                ? "สร้างเครือข่ายกับชุมชนท้องถิ่นเพื่อนำเสนอประสบการณ์ท่องเที่ยวที่แท้จริง"
                                : "พัฒนาระบบการประเมินความพึงพอใจของลูกค้าที่ช่วยปรับปรุงคุณภาพการบริการ"}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4 text-center">
                    <h5 className="card-title mb-3">เป้าหมายในอนาคต</h5>
                    <p className="card-text">
                      ฉันตั้งใจที่จะขยายธุรกิจนำเที่ยวให้ครอบคลุมภูมิภาคอาเซียน
                      และมุ่งมั่นที่จะส่งเสริมการท่องเที่ยวอย่างยั่งยืน 100%
                      ในอนาคตฉันหวังว่าจะได้เขียนหนังสือแนะนำการท่องเที่ยวและสร้างแพลตฟอร์มออนไลน์เพื่อเชื่อมโยงนักท่องเที่ยวกับชุมชนท้องถิ่น
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="row mt-5">
        <div className="col-12 text-center">
          <div
            className="p-4 rounded-4 shadow-sm"
            style={{ background: "rgba(255, 133, 162, 0.1)" }}
          >
            <h3 className="mb-3" style={{ color: "#ff85a2" }}>
              สนใจเดินทางกับฉัน
            </h3>
            <p className="mb-4">
              หากคุณสนใจเดินทางท่องเที่ยวหรือมีคำถามเกี่ยวกับสถานที่ท่องเที่ยว
              สามารถติดต่อได้ตามช่องทางด้านล่าง
            </p>
            <div className="d-flex justify-content-center gap-3">
              <button
                className="btn px-4 py-2"
                style={{
                  background: "#ff85a2",
                  color: "white",
                  borderRadius: "30px",
                }}
              >
                <i className="bi bi-envelope-fill me-2"></i>
                ส่งอีเมล
              </button>
              <button
                className="btn px-4 py-2"
                style={{
                  background: "#7ec4cf",
                  color: "white",
                  borderRadius: "30px",
                }}
              >
                <i className="bi bi-chat-fill me-2"></i>
                แชทกับฉัน
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}