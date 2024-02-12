import React from 'react';

export default function SideBar() {
  return (
    <nav className='sidebar'>
      <div class="sidebar-link">
        <img src="icons/home.svg" alt='home' />
        <div>Home</div>
      </div>
      <div class="sidebar-link">
        <img src="icons/explore.svg" alt='explore'/>
        <div>Explore</div>
      </div>
      <div class="sidebar-link">
        <img src="icons/subscriptions.svg" alt='subscriptions'/>
        <div>Subscriptions</div>
      </div>
      <div class="sidebar-link">
        <img src="icons/originals.svg" alt='originals'/>
        <div>Originals</div>
      </div>
      <div class="sidebar-link">
        <img src="icons/youtube-music.svg" alt='music'/>
        <div>YouTube Music</div>
      </div>
      <div class="sidebar-link">
        <img src="icons/library.svg" alt='library'/>
        <div>Library</div>
      </div>
    </nav>
  )
}
