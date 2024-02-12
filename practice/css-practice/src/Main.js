import React from "react";

export default function Main() {
  const thumbnailsRootPath = "thumbnails/";
  const profilesRootPath = "channel-pictures/";
  const videos = [
    {
      videoLink: "https://www.youtube.com/watch?v=n2RNcPRtAiY",
      thumbnailSrc: "thumbnail-1.webp",
      time: "14:20",
      profileLink: "https://www.youtube.com/c/mkbhd",
      profileSrc: "channel-1.jpeg",
      author: "Marques Brownlee",
      subscription: "15M subscribers",
      videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
      // note: use <></> to show entity (special character) of html
      videoStats: <>3.4M views &#183; 6 months ago</>,
    },
    {
      videoLink: "https://www.youtube.com/watch?v=mP0RAo9SKZk",
      thumbnailSrc: "thumbnail-2.webp",
      time: "8:22",
      profileLink: "https://www.youtube.com/c/markiplier",
      profileSrc: "channel-2.jpeg",
      author: "markiplier",
      subscription: "19M subscribers",
      videoTitle: "Try Not To laugh Challenge #9",
      videoStats: <>19M views &#183; 4 years ago</>,
    },
    {
      videoLink: "https://www.youtube.com/watch?v=FgjPQQeTh1w",
      thumbnailSrc: "thumbnail-3.webp",
      time: "9:13",
      profileLink: "https://www.youtube.com/user/SSSniperWolf",
      profileSrc: "channel-3.jpeg",
      author: "SSSniperWolf",
      subscription: "12M subscribers",
      videoTitle: "Crazy Tik Toks Taken Moments Before DISASTER!",
      videoStats: <>12M views &#183; 1 year ago</>,
    },
    {
      videoLink: "https://www.youtube.com/watch?v=094y1Z2wpJg",
      thumbnailSrc: "thumbnail-4.webp",
      time: "14:20",
      profileLink: "https://www.youtube.com/c/mkbhd",
      profileSrc: "channel-4.jpeg",
      author: "Veritasium",
      subscription: "18M subscribers",
      videoTitle: "The Simplest Math Problem No One Can Solve -Collatz...",
      videoStats: <>18M views &#183; 4 months ago</>,
    },
    {
      videoLink: "https://www.youtube.com/watch?v=86CQq3pKSUw",
      thumbnailSrc: "thumbnail-5.webp",
      time: "11:17",
      profileLink: "https://www.youtube.com/c/CSDojo",
      profileSrc: "channel-5.jpeg",
      author: "CS Dojo",
      subscription: "15M subscribers",
      videoTitle: "Kadane's Algorithm to Maximum Sum Subarray...",
      videoStats: <>519k views &#183; 5 years ago</>,
    },
    {
      videoLink: "https://www.youtube.com/watch?v=yXWw0_UfSFg",
      thumbnailSrc: "thumbnail-6.webp",
      time: "19:59",
      profileLink: "https://www.youtube.com/channel/UCX6OQ3DkcsbYNE6H8uQQuVA",
      profileSrc: "channel-6.jpeg",
      author: "MrBeast",
      subscription: "152M subscribers",
      videoTitle: "Anything You Can Fit In The Circle I'll Pay For",
      videoStats: <>141M views &#183; 1 year ago</>,
    },
    {
      videoLink: "https://www.youtube.com/watch?v=n2RNcPRtAiY",
      thumbnailSrc: "thumbnail-1.webp",
      time: "14:20",
      profileLink: "https://www.youtube.com/c/mkbhd",
      profileSrc: "channel-1.jpeg",
      author: "Marques Brownlee",
      subscription: "15M subscribers",
      videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
      videoStats: <>3.4M views &#183; 6 months ago</>,
    },
    {
      videoLink: "https://www.youtube.com/watch?v=n2RNcPRtAiY",
      thumbnailSrc: "thumbnail-1.webp",
      time: "14:20",
      profileLink: "https://www.youtube.com/c/mkbhd",
      profileSrc: "channel-1.jpeg",
      author: "Marques Brownlee",
      subscription: "15M subscribers",
      videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
      videoStats: <>3.4M views &#183; 6 months ago</>,
    },
    {
      videoLink: "https://www.youtube.com/watch?v=n2RNcPRtAiY",
      thumbnailSrc: "thumbnail-1.webp",
      time: "14:20",
      profileLink: "https://www.youtube.com/c/mkbhd",
      profileSrc: "channel-1.jpeg",
      author: "Marques Brownlee",
      subscription: "15M subscribers",
      videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
      videoStats: <>3.4M views &#183; 6 months ago</>,
    }
  ];

  return (
    <main>
      <section className="video-grid">
        {videos.map((video) => (
          <div className="video-preview" key={video.videoLink}>
            <div className="thumbnail-row">
              <a
                href={video.videoLink}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="thumbnail"
                  src={`${thumbnailsRootPath}${video.thumbnailSrc}`}
                  alt={video.thumbnailSrc}
                />
              </a>
              <div className="video-time">{video.time}</div>
            </div>
            <div className="video-info-grid">
              <div className="channel-picture">
                <div className="profile-picture-container">
                  <a
                    href={video.profileLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="profile-picture"
                      src={`${profilesRootPath}${video.profileSrc}`}
                      alt={video.profileSrc}
                    />
                  </a>
                  <div className="channel-tooltip">
                    <img
                      className="channel-tooltip-picture"
                      src={`${profilesRootPath}${video.profileSrc}`}
                      alt={video.profileSrc}
                    />
                    <div className="channel-tooltip-infos">
                      <p className="channel-tooltip-name">{video.author}</p>
                      <p className="channel-tooltip-stats">{video.subscription}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="video-info">
                <a
                  href={video.videoLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="video-title">
                    {video.videoTitle}
                  </p>
                </a>
                <a
                  href={video.profileLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="video-author">{video.author}</p>
                </a>
                <a
                  href={video.videoLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="video-stats">{video.videoStats}</p>
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
