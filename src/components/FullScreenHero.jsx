import vanImg from '../assets/van.png';
import './FullScreenHero.css';

export default function FullScreenHero() {
  return (
    <section id="home" className="fullscreen-hero" role="region" aria-label="Hero">
      <div className="hero-bg" aria-hidden="true" role="presentation" />
      <div className="hero-overlay" aria-hidden="true" role="presentation" />
      <div className="hero-content">
        <h1 className="fs-hero-title">
          <span className="fs-hero-discover">DISCOVER DESTINATIONS.</span>
          <span className="fs-hero-memories-wrapper">
            <span className="fs-hero-memories">CREATE MEMORIES</span>
            <img src={vanImg} className="fs-hero-van" alt="Traveling Van" />
          </span>
        </h1>
      </div>
    </section>
  );
}
