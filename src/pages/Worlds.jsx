import React from 'react';
import { Link } from 'react-router-dom';

export default function Worlds() {
  return (
    <div className="text-center">
      <h1 className="mb-4">🌍 Horizon Worlds</h1>
      <p className="lead text-muted">
        At Dadbod Studios, we’re building dad-vibe VR mini-games and social experiences inside Horizon Worlds.
      </p>

      <div className="row mt-5">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">🗑️ Trash Pickup Challenge</h5>
              <p className="card-text">
                Carry more trash, move slower — a dad-inspired take on chores as gameplay. 
                Built during the Meta Horizon Creator Program.
              </p>
            </div>
          </div>
        </div>


<div className="col-md-4 mb-4">
  <div className="card h-100 shadow-sm">
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">⏫ Time Climb</h5>
      <p className="card-text">
        A vertical platformer designed to be fun, challenging, and accessible. 
        Players climb higher with every attempt.
      </p>
      <div className="mt-auto">
        <a 
          href="https://horizon.meta.com/world/10101872243361176/?locale=en_US"  // 🔗 replace with actual link
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary"
        >
          Go!!!
        </a>
      </div>
    </div>
  </div>
</div>




        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">🎮 Dadbod Worlds</h5>
              <p className="card-text">
                A growing collection of dad-vibe mini-games — chores, challenges, and plenty of laughs.
              </p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
