'use client';
import { useEffect, useState } from 'react';
import Image from "next/image";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Import Bootstrap JS
    const bootstrap = import('bootstrap/dist/js/bootstrap.bundle.min.js');
    
    // Setup event listener for carousel
    bootstrap.then(() => {
      const carouselElement = document.getElementById('carouselExample');
      if (carouselElement) {
        carouselElement.addEventListener('slide.bs.carousel', (event) => {
          setActiveIndex(event.to);
        });
      }
    });

    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Carousel captions data
  const captions = [
    {
      title: "Sweet Dreams Collection",
      description: "Discover our magical new arrivals!",
      buttonText: "Shop Now",
      color: "#ff85a2"
    },
    {
      title: "Summer Vibes",
      description: "Bright colors for sunny days!",
      buttonText: "Explore",
      color: "#7ec4cf"
    },
    {
      title: "Cute & Cozy",
      description: "Perfect for relaxing at home",
      buttonText: "See More",
      color: "#b892ff"
    }
  ];

  return (
    <div className="carousel-container" style={{ position: 'relative', overflow: 'hidden', borderRadius: '0px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', margin: '20px 0' }}>
      {/* Cute decorative elements - hide some on mobile */}
      <div className="decorative-elements">
        <div style={{ 
          position: 'absolute', 
          top: '15px', 
          left: '15px', 
          zIndex: 10, 
          animation: 'float 3s ease-in-out infinite',
          display: isMobile ? 'none' : 'block' 
        }}>
          <div style={{ width: '50px', height: '50px', background: 'rgba(255, 133, 162, 0.7)', borderRadius: '50%', backdropFilter: 'blur(5px)' }}></div>
        </div>
        <div style={{ 
          position: 'absolute', 
          bottom: '25px', 
          right: '25px', 
          zIndex: 10, 
          animation: 'float 4s ease-in-out infinite',
          display: isMobile ? 'none' : 'block'
        }}>
          <div style={{ width: '30px', height: '30px', background: 'rgba(126, 196, 207, 0.7)', borderRadius: '50%', backdropFilter: 'blur(5px)' }}></div>
        </div>
        <div style={{ 
          position: 'absolute', 
          top: '80px', 
          right: '40px', 
          zIndex: 10, 
          animation: 'float 5s ease-in-out infinite',
          display: isMobile ? 'none' : 'block'
        }}>
          <div style={{ width: '20px', height: '20px', background: 'rgba(184, 146, 255, 0.7)', borderRadius: '50%', backdropFilter: 'blur(5px)' }}></div>
        </div>
      </div>

      <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
        {/* Carousel indicators - cute dots */}
        <div className="carousel-indicators" style={{ bottom: isMobile ? '10px' : '20px' }}>
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to={index}
              className={activeIndex === index ? "active" : ""}
              aria-current={activeIndex === index ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              style={{
                width: activeIndex === index ? (isMobile ? '20px' : '30px') : (isMobile ? '8px' : '12px'),
                height: isMobile ? '8px' : '12px',
                borderRadius: '20px',
                background: captions[index].color,
                opacity: activeIndex === index ? 1 : 0.5,
                transition: 'all 0.5s ease',
                margin: '0 5px',
                border: 'none'
              }}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div style={{ position: 'relative' }}>
              <Image 
                src="/images/carousel-1.jpg" 
                className="d-block w-100" 
                alt="Sweet Dreams Collection" 
                width={1920} 
                height={690} 
                style={{ 
                  objectFit: 'cover', 
                  height: isMobile ? '400px' : '600px',
                  filter: 'brightness(0.9)'
                }} 
                priority
              />
              <div className="carousel-caption" style={{
                position: 'absolute',
                bottom: 'auto',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                padding: isMobile ? '15px 20px' : '30px 40px',
                borderRadius: isMobile ? '15px' : '20px',
                width: 'auto',
                maxWidth: isMobile ? '90%' : '80%'
              }}>
                <h2 style={{ 
                  color: 'white', 
                  fontWeight: 'bold', 
                  fontSize: isMobile ? '1.5rem' : '2.5rem',
                  marginBottom: isMobile ? '8px' : '15px',
                  fontFamily: 'Poppins, sans-serif',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                }}>{captions[0].title}</h2>
                <p style={{ 
                  color: 'white', 
                  fontSize: isMobile ? '0.9rem' : '1.2rem',
                  marginBottom: isMobile ? '12px' : '20px',
                  fontFamily: 'Poppins, sans-serif',
                  display: isMobile ? 'none' : 'block'
                }}>{captions[0].description}</p>
                <button style={{
                  background: 'white',
                  color: captions[0].color,
                  border: 'none',
                  padding: isMobile ? '8px 20px' : '10px 25px',
                  borderRadius: '30px',
                  fontWeight: 'bold',
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease'
                }}>{captions[0].buttonText}</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div style={{ position: 'relative' }}>
              <Image 
                src="/images/carousel-2.jpg" 
                className="d-block w-100" 
                alt="Summer Vibes" 
                width={1920} 
                height={690} 
                style={{ 
                  objectFit: 'cover', 
                  height: isMobile ? '400px' : '600px',
                  filter: 'brightness(0.9)'
                }} 
              />
              <div className="carousel-caption" style={{
                position: 'absolute',
                bottom: 'auto',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                padding: isMobile ? '15px 20px' : '30px 40px',
                borderRadius: isMobile ? '15px' : '20px',
                width: 'auto',
                maxWidth: isMobile ? '90%' : '80%'
              }}>
                <h2 style={{ 
                  color: 'white', 
                  fontWeight: 'bold', 
                  fontSize: isMobile ? '1.5rem' : '2.5rem',
                  marginBottom: isMobile ? '8px' : '15px',
                  fontFamily: 'Poppins, sans-serif',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                }}>{captions[1].title}</h2>
                <p style={{ 
                  color: 'white', 
                  fontSize: isMobile ? '0.9rem' : '1.2rem',
                  marginBottom: isMobile ? '12px' : '20px',
                  fontFamily: 'Poppins, sans-serif',
                  display: isMobile ? 'none' : 'block'
                }}>{captions[1].description}</p>
                <button style={{
                  background: 'white',
                  color: captions[1].color,
                  border: 'none',
                  padding: isMobile ? '8px 20px' : '10px 25px',
                  borderRadius: '30px',
                  fontWeight: 'bold',
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease'
                }}>{captions[1].buttonText}</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div style={{ position: 'relative' }}>
              <Image 
                src="/images/carousel-3.jpg" 
                className="d-block w-100" 
                alt="Cute & Cozy" 
                width={1920} 
                height={690} 
                style={{ 
                  objectFit: 'cover', 
                  height: isMobile ? '400px' : '600px',
                  filter: 'brightness(0.9)'
                }} 
              />
              <div className="carousel-caption" style={{
                position: 'absolute',
                bottom: 'auto',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                padding: isMobile ? '15px 20px' : '30px 40px',
                borderRadius: isMobile ? '15px' : '20px',
                width: 'auto',
                maxWidth: isMobile ? '90%' : '80%'
              }}>
                <h2 style={{ 
                  color: 'white', 
                  fontWeight: 'bold', 
                  fontSize: isMobile ? '1.5rem' : '2.5rem',
                  marginBottom: isMobile ? '8px' : '15px',
                  fontFamily: 'Poppins, sans-serif',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                }}>{captions[2].title}</h2>
                <p style={{ 
                  color: 'white', 
                  fontSize: isMobile ? '0.9rem' : '1.2rem',
                  marginBottom: isMobile ? '12px' : '20px',
                  fontFamily: 'Poppins, sans-serif',
                  display: isMobile ? 'none' : 'block'
                }}>{captions[2].description}</p>
                <button style={{
                  background: 'white',
                  color: captions[2].color,
                  border: 'none',
                  padding: isMobile ? '8px 20px' : '10px 25px',
                  borderRadius: '30px',
                  fontWeight: 'bold',
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease'
                }}>{captions[2].buttonText}</button>
              </div>
            </div>
          </div>
        </div>

        {/* Cute navigation buttons - smaller on mobile */}
        <button 
          className="carousel-control-prev" 
          type="button" 
          data-bs-target="#carouselExample" 
          data-bs-slide="prev"
          style={{
            width: isMobile ? '40px' : '50px',
            height: isMobile ? '40px' : '50px',
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '50%',
            top: '50%',
            transform: 'translateY(-50%)',
            left: isMobile ? '10px' : '20px',
            opacity: 0.8,
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease'
          }}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" style={{ 
            filter: 'invert(1)',
            width: isMobile ? '20px' : '24px',
            height: isMobile ? '20px' : '24px'
          }} />
          <span className="visually-hidden">Previous</span>
        </button>
        <button 
          className="carousel-control-next" 
          type="button" 
          data-bs-target="#carouselExample" 
          data-bs-slide="next"
          style={{
            width: isMobile ? '40px' : '50px',
            height: isMobile ? '40px' : '50px',
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '50%',
            top: '50%',
            transform: 'translateY(-50%)',
            right: isMobile ? '10px' : '20px',
            opacity: 0.8,
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease'
          }}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" style={{ 
            filter: 'invert(1)',
            width: isMobile ? '20px' : '24px',
            height: isMobile ? '20px' : '24px'
          }} />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Add CSS for animations and responsive design */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .carousel-control-prev:hover, .carousel-control-next:hover {
          opacity: 1;
          transform: translateY(-50%) scale(1.1);
        }
        
        button:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 15px rgba(0,0,0,0.15);
        }

        @media (max-width: 768px) {
          .carousel-control-prev:hover, .carousel-control-next:hover {
            transform: translateY(-50%) scale(1.05);
          }
          
          button:hover {
            transform: scale(1.03);
          }
        }

        @media (max-width: 480px) {
          .carousel-caption {
            padding: 10px 15px !important;
          }
          
          .carousel-caption h2 {
            font-size: 1.2rem !important;
            margin-bottom: 5px !important;
          }
          
          .carousel-caption button {
            padding: 6px 15px !important;
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </div>
  );
}