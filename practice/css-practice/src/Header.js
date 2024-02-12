import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="left-section">
        <img
          className="hamburger-menu"
          src="icons/hamburger-menu.svg"
          alt="hamburger menu"
        />
        <img
          className="youtube-logo"
          title="YouTube Home"
          src="./icons/youtube-logo.svg"
          alt="youtube logo"
        />
      </div>
      <div className="middle-section">
        <input className="search-bar" placeholder="Search" type="text" />
        <button className="search-button">
          <img className="search-icon" src="./icons/search.svg" alt="search" />
          <div className="tooltip">Search</div>
        </button>
        <button className="voice-search-button">
          <img
            className="voice-search-icon"
            src="./icons/voice-search-icon.svg"
            alt="voice search"
          />
          <div className="tooltip">Search with your voice</div>
        </button>
      </div>
      <div className="right-section">
        <div className="upload-icon-container">
          <img className="upload-icon" src="./icons/upload.svg" alt="upload" />
          <div className="tooltip">Create</div>
        </div>
        <div className="youtube-apps-icon-container">
          <img
            className="youtube-apps-icon"
            src="icons/youtube-apps.svg"
            alt="youtube apps icon"
          />
          <div className="tooltip">Youtube apps</div>
        </div>
        <div className="notifications-icon-container">
          <img
            className="notifications-icon"
            src="icons/notifications.svg"
            alt="notifications"
          />
          <div className="notifications-count">3</div>
          <div className="tooltip">notifications</div>
        </div>
        <img
          className="current-user-picture"
          src="channel-pictures/my-channel.jpg"
          alt="channel"
        />
      </div>
    </header>
  );
}
