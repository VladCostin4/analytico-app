import { useState } from 'react';

import './LandingPage.css'
import StepCard from './StepCard/StepCard.jsx'

function LandingPage() {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleClearInput = () => {
    setEmail('');
  };

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="top-header">
        <div className="container">
          <div className="logo">
            <img className="logo-icon" src="src/assets/logo.png" alt="Analytico" />
            <span className="logo-text">Analytico</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-left">
              <h1 className="hero-title">Know what sells next before it happens</h1>
              <p className="hero-description">
                Just upload your Excel or CSV, and get clear insights to plan your day, week, or season.
              </p>
              <div className="hero-cta">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="email-input"
                  value={email}
                  onChange={handleInputChange}
                />
                <button className="btn-primary" onClick={handleClearInput}>Get Early Access</button>
              </div>
              <p className="hero-note">Coming soon to help your business make smarter decisions.</p>
            </div>
            <div className="hero-right">
              <div className="hero-assets">
                <div className="hero-asset-big">
                  <img className="" src="src/assets/donut_shop.png" alt="Donut Shop" />
                </div>
                <div className="hero-asset-small">
                  <img className="" src="src/assets/chat_bubble.png" alt="Chat Bubble" />
                </div>
                <div className="chat-overlay-text">
                  <p>PSSST..<br/>Tomorrow's best-seller: <b>chocolate-donuts (↑ 15%)</b></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How it works</h2>
          <div className="steps-grid">
            <StepCard
              number={1}
              title="Upload your sales data"
              description="Just drag & drop your Excel or CSV file."
              images={{ src: "src/assets/how_it_works_1.png", alt: "How it works 1" }}
            />
            <StepCard
              number={2}
              title="Ask in plain language"
              description='"What will sell best in the weekend?" → Instant answer'
              images={{ src: "src/assets/how_it_works_2.png", alt: "How it works 2" }}
            />
            <StepCard
              number={3}
              title="See predictions"
              description="Clear insights anyone can understand"
              images={[
                { src: "src/assets/how_it_works_3_1.png", alt: "How it works 3.1" },
                { src: "src/assets/how_it_works_3_2.png", alt: "How it works 3.2" }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>Analytico © 2025</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
