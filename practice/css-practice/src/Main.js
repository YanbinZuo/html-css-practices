import React from "react";

export default function Main() {
  return (
    <main>
      <section className="video-grid">
        <div className="video-preview">
          <div className="thumbnail-row">
            <a
              href="https://www.youtube.com/watch?v=n2RNcPRtAiY"
              target="_blank"
              rel="noreferrer"
            >
              <img />
            </a>
            <div>14:20</div>
          </div>
          <div className="info-container">
            <div className="profile">
              <img />
            </div>
            <div className="info">
              <p>Talking ....</p>
              <p>Marques Brownlee</p>
              <p>3.3M views . 6 months ago</p>
            </div>
          </div>
        </div>

        <div></div>
      </section>
    </main>
  );
}
