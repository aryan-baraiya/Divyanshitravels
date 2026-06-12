import './FullScreenHero.css';

export default function FullScreenHero() {
  return (
    <section id="home" className="fullscreen-hero" role="region" aria-label="Hero">
      <div className="hero-bg" aria-hidden="true" role="presentation" />
      <div className="hero-overlay" aria-hidden="true" role="presentation" />
      <div className="hero-content">
        <h1 className="fs-hero-title">
          DISCOVER DESTINATIONS.
          <br />
          CREATE MEMORIES.
        </h1>
      </div>
    </section>
  );
}
