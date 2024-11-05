import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function IndustriesServe() {
  const items = [
    {
      id: 1,
      title: "FMCG",
      image:
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXE1cXplZXQxZjZlYnR5MnFyN3hncjIzMGthNndrbWgwaGY3eXk1bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ghCZxkkgKIc6qOLOu8/giphy.webp",
    },
    {
      id: 2,
      title: "Apparel",
      image:
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXE1cXplZXQxZjZlYnR5MnFyN3hncjIzMGthNndrbWgwaGY3eXk1bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ghCZxkkgKIc6qOLOu8/giphy.webp",
    },
    {
      id: 3,
      title: "Pharma",
      image:
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXE1cXplZXQxZjZlYnR5MnFyN3hncjIzMGthNndrbWgwaGY3eXk1bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ghCZxkkgKIc6qOLOu8/giphy.webp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through items every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 6000); // Changes every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [items.length]);

  // Handle "Next" button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div style={{ height: "55vh" }} className="IndustriesServe-page">
      <h2 className="IndustriesServe-heading" style={{fontFamily:"pirulen"}}>Industries We Serve</h2>
      {/* <Container>
        <div class="image-container">
          <div class="image-item">
            <img src="../Assets/cpg.jpg" alt="" className="ms-5" />
            <span>FMCG</span>
          </div>
          <div class="image-item">
            <img src="../Assets/FB.jpg" alt="" className="ms-5" />
            <span>F & B</span>
          </div>
          <div class="image-item">
            <img src="../Assets/apparel.jpg" alt="" className="ms-5" />
            <span>Apparel</span>
          </div>
          <div class="image-item">
            <img src="../Assets/pharma.PNG" alt="" className="ms-5" />
            <span>Pharma</span>
          </div>
        </div>
        <svg width="100" height="100">
          <img src="../Assets/eco.jpg" alt="" />
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="white"
          >
            SVG
          </text>
        </svg>
      </Container> */}

      {/* <div className="industries-container" style={{ display: 'flex', alignItems: 'center', position: 'relative', width: '100%' }}>
  <div style={{ width: '90%', textAlign: 'center' }}>
    {items.map((item, index) => (
      <div
        key={item.id}
        className="fmcg-div"
        style={{ display: index === currentIndex ? 'block' : 'none' }}
      >
        <img className="fmcg-img" src={item.image} alt={item.title} style={{ width: '100%' }} />
        <h1 className="fmcg-h1">{item.title}</h1>
      </div>
    ))}
  </div>

  <div style={{ width: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <button
      onClick={handleNext}
      style={{
        fontSize: '24px',
        cursor: 'pointer',
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        marginTop:"-9px",
        borderRadius: '0px',
        width: '100%', 
        height: '52vh', 
      }}
    >
      &gt;
    </button>
  </div>
</div> */}

      <Carousel data-bs-theme="light" indicators={false} controls={false} interval={3000}>
        <Carousel.Item >
          
            <div style={{ width: "100%", textAlign: "center" }}>
              <div className="fmcg-div">
              <video autoplay preload muted loop src="https://drive.google.com/file/d/1T_vVAFpSPyK0C2c7NcFiIMD0-E13AwMc/view"></video>
                {/* <img
                  className="fmcg-img"
                  src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXE1cXplZXQxZjZlYnR5MnFyN3hncjIzMGthNndrbWgwaGY3eXk1bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ghCZxkkgKIc6qOLOu8/giphy.webp"
                  style={{ width: "100%" }}
                /> */}
                <h1 className="fmcg-h1 ">FMCG</h1>
              </div>
            </div>
         
        </Carousel.Item>

        <Carousel.Item>
         
            <div style={{ width: "100%", textAlign: "center" }}>
              <div className="fmcg-div">
                <img
                  className="fmcg-img"
                  src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXE1cXplZXQxZjZlYnR5MnFyN3hncjIzMGthNndrbWgwaGY3eXk1bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ghCZxkkgKIc6qOLOu8/giphy.webp"
                  style={{ width: "100%" }}
                />
                <h1 className="fmcg-h1 "> <span className="py-5">APPAREL</span></h1>
              </div>
            </div>
         
        </Carousel.Item>
        <Carousel.Item>
        
            <div style={{ width: "100%", textAlign: "center" }}>
              <div className="fmcg-div">
                <img
                  className="fmcg-img"
                  src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXE1cXplZXQxZjZlYnR5MnFyN3hncjIzMGthNndrbWgwaGY3eXk1bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ghCZxkkgKIc6qOLOu8/giphy.webp"
                  style={{ width: "100%" }}
                />
                <h1 className="fmcg-h1">PHARMA</h1>
              </div>
            </div>
        
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default IndustriesServe;
