import React from 'react';
import DevlogList from '../components/DevlogList';
import './Home.css';

const steamUrl = process.env.REACT_APP_REDBOX_STEAM_URL
  || 'https://store.steampowered.com/search/?term=Project%20Redbox';
const itchUrl = 'https://dadbodstudios.itch.io/project-redbox';

const screenshots = [
  { number: '01', title: 'Enter the box', className: 'shot-one' },
  { number: '02', title: 'Break the pattern', className: 'shot-two' },
  { number: '03', title: 'Find the signal', className: 'shot-three' },
];

export default function Home() {
  return (
    <div className="redbox-page">
      <section className="redbox-hero">
        <div className="redbox-grid" aria-hidden="true" />
        <div className="container position-relative">
          <p className="redbox-kicker">A new game from DadBod Studios</p>
          <h1>PROJECT<br /><span>REDBOX</span></h1>
          <p className="redbox-lead">
            Step inside. Learn the rules. Then find a way to break them.
          </p>
          <div className="d-flex flex-wrap gap-3">
            <a className="btn redbox-primary" href="#demo">Play in your browser</a>
            <a className="btn redbox-secondary" href={steamUrl} target="_blank" rel="noopener noreferrer">
              Wishlist on Steam
            </a>
          </div>
        </div>
      </section>

      <section className="redbox-section" id="demo">
        <div className="container">
          <div className="redbox-section-heading">
            <p className="redbox-kicker">Project Redbox</p>
            <h2>Play the latest build</h2>
            <p>
              A dark sci-fi action roguelite built around fast combat,
              rare loot, and persistent progression.
            </p>
          </div>
          <div className="game-embed-shell">
            <div className="game-embed-wrap">
              <iframe
                frameBorder="0"
                src="https://itch.io/embed-upload/18347166?color=080b10"
                allowFullScreen
                width="1295"
                height="755"
                title="Play Project Redbox"
              >
                <a href={itchUrl}>Play Project Redbox on itch.io</a>
              </iframe>
            </div>

            <div className="game-guidance">
              <div>
                <p className="redbox-kicker mb-2">Before you play</p>
                <p className="mb-0">Click inside the game before using keyboard controls.</p>
                <p className="mobile-game-note mb-0">
                  For the best experience, open Project Redbox on a larger screen.
                </p>
              </div>
              <div className="game-links">
                <a
                  className="btn site-button-primary itch-cta"
                  href={itchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Play on itch.io
                </a>
                <a className="btn site-button-secondary" href={steamUrl} target="_blank" rel="noopener noreferrer">
                  Wishlist on Steam
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="redbox-section redbox-section-dark" id="screenshots">
        <div className="container">
          <div className="redbox-section-heading">
            <p className="redbox-kicker">From inside</p>
            <h2>Screenshots</h2>
          </div>
          <div className="row g-4">
            {screenshots.map((shot) => (
              <div className="col-lg-4" key={shot.number}>
                <div className={`redbox-shot ${shot.className}`} role="img" aria-label={`${shot.title} preview artwork`}>
                  <span>{shot.number}</span>
                  <strong>{shot.title}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="redbox-section" id="devlogs">
        <div className="container">
          <div className="redbox-section-heading">
            <p className="redbox-kicker">Behind the build</p>
            <h2>Development logs</h2>
            <p>Updates mirrored here so the story of the game lives alongside the game itself.</p>
          </div>
          <DevlogList />
        </div>
      </section>

      <section className="wishlist-section">
        <div className="container text-center">
          <p className="redbox-kicker">Stay in the loop</p>
          <h2>Put Project Redbox on your radar.</h2>
          <p>Wishlisting helps an independent game get seen.</p>
          <a className="btn redbox-primary" href={steamUrl} target="_blank" rel="noopener noreferrer">
            Wishlist on Steam
          </a>
        </div>
      </section>
    </div>
  );
}
