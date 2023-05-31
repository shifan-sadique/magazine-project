import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

function LandingPage() {
  const [showAbout, setShowAbout] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition > windowHeight * 0.5 && scrollPosition < documentHeight - windowHeight * 1.5) {
        setShowAbout(true);
      } else {
        setShowAbout(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCreateWritingClick = () => {
    navigate("/write");
  };

  const handleVisualArtsClick = () => {
    navigate("/write");
  };

  const handleJoinCommitteeClick = () => {
    navigate("/register");
  };

  return (
    <div className="container">
      <h1 className="heading">Welcome!</h1>
      <p className="subheading">Explore, Create, and Inspire</p>
      <div className="features-container">
        {/* <img
          className="magazine-img"
          src="https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt="College Magazine"
        /> */}
        <div className="features">
          <div className="feature-item" onClick={handleCreateWritingClick}>
            <i className="feature-icon fas fa-pen"></i>
            <h2 className="feature-title">Creative Writing</h2>
            <p className="feature-description">
              Unleash your imagination and express your thoughts through captivating articles and stories.
            </p>
          </div>
          <div className="feature-item" onClick={handleVisualArtsClick}>
            <i className="feature-icon fas fa-camera"></i>
            <h2 className="feature-title">Visual Arts</h2>
            <p className="feature-description">
              Showcase your artistic talents and bring life to your ideas with stunning visuals and designs.
            </p>
          </div>
          <div className="feature-item">
            <i className="feature-icon fas fa-eye"></i>
            <h2 className="feature-title">View Our Magazines</h2>
            <p className="feature-description">
              Discover captivating articles and stories in our collection of magazines.
            </p>
          </div>
        </div>
      </div>
      <button className="cta-button" onClick={handleJoinCommitteeClick}>
        Join Our Committee
      </button>
      
      <footer className="footer">&copy; 2023 Our College Magazine. All rights reserved.</footer>
    </div>
  );
}

export default LandingPage;
