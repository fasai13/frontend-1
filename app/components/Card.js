'use client';

import { useState } from 'react';

export default function Card(){
    const [hoveredCard, setHoveredCard] = useState(null);
    
    const handleMouseEnter = (index) => {
        setHoveredCard(index);
    };
    
    const handleMouseLeave = () => {
        setHoveredCard(null);
    };
    
    const cards = [
      {
        image: "/images/card-1.jpg",
        title: "วัดพระสิงห์วรมหาวิหาร",
        description: "พระพุทธรูปศักดิ์สิทธิ์คู่เมืองเชียงใหม่",
        gradient: "linear-gradient(to bottom, #ffe6f2, #fff)",
        titleColor: "#d291bc",
        buttonColor: "#d291bc",
      },
      {
        image: "/images/card-2.jpg",
        title: "พระบรมราชานุสาวรีย์สามกษัตริย์",
        description:
          "พระบรมราชานุสาวรีย์ของพระมหากษัตริย์สามพระองค์ผู้สร้างเวียงเชียงใหม่",
        gradient: "linear-gradient(to bottom, #e0c3fc, #fff)",
        titleColor: "#9d7cd8",
        buttonColor: "#9d7cd8",
      },
      {
        image: "/images/f7.jpg",
        title: "ผาช่อ",
        description:
          "การเปลี่ยนแปลงทางธรณีวิทยา ซึ่งเป็นทางเดินของสายน้ำปิงเมื่อหลายพันปีมาแล้ว",
        gradient: "linear-gradient(to bottom, #b5ead7, #fff)",
        titleColor: "#5bae9e",
        buttonColor: "#5bae9e",
      },
    ];
    
    return (
        <div className="container my-5">
            <h3 className="mb-4 text-center" style={{color:'#d291bc', fontWeight:'600', fontFamily:'Poppins, sans-serif'}}>Our Collection</h3>
            <div className="row g-4 justify-content-center">
                {cards.map((card, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div 
                            className="card shadow-sm h-100" 
                            style={{ 
                                borderRadius: '1rem', 
                                background: '#fff', 
                                border: 'none',
                                overflow: 'hidden',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                transform: hoveredCard === index ? 'translateY(-5px)' : 'none',
                                boxShadow: hoveredCard === index ? '0 10px 20px rgba(0,0,0,0.1)' : '0 4px 6px rgba(0,0,0,0.05)'
                            }}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div 
                                className="card-img-container" 
                                style={{
                                    overflow: 'hidden', 
                                    height: '240px'
                                }}
                            >
                                <img
                                    src={card.image}
                                    className="card-img-top"
                                    alt={`Card ${index + 1}`}
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s',
                                        transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)'
                                    }}
                                />
                            </div>
                            <div 
                                className="card-body text-center" 
                                style={{
                                    background: card.gradient,
                                    padding: '1.5rem 1rem'
                                }}
                            >
                                <h5 style={{color: card.titleColor, fontFamily:'Poppins, sans-serif', fontWeight: '500', marginBottom: '0.5rem'}}>
                                    {card.title}
                                </h5>
                                <p className="card-text" style={{color:'#888', fontSize: '0.9rem', marginBottom: '1rem'}}>
                                    {card.description}
                                </p>
                                <button 
                                    className="btn btn-sm" 
                                    style={{
                                        background: 'white',
                                        color: card.buttonColor,
                                        borderRadius: '2rem',
                                        padding: '0.25rem 1rem',
                                        fontSize: '0.85rem',
                                        border: `1px solid ${card.buttonColor}`,
                                        transition: 'all 0.3s',
                                        opacity: hoveredCard === index ? 1 : 0.8
                                    }}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
