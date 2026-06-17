import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../styles/AllActivity.css';

const DEFAULT_PROFILE_PIC =
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face';

const DEFAULT_BANNER =
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=150&fit=crop';

const POSTS = [
  {
    id: 1,
    time: '4h',
    content: (
      <>
        I am looking to hire talented and ambitious <strong>Flutter developer</strong> to join our
        growing team at SUUVO. If you are passionate about building innovative mobile applications
        and want to work in a fast-paced startup environment, let's connect!
        <br />
        <br />
        DM me or comment below if interested. 🚀
      </>
    ),
    reactions: 47,
    comments: 12,
    showReactions: true,
  },
  {
    id: 2,
    time: '1mo',
    content: (
      <>
        Excited to share our latest insights on the evolving landscape of social media. The future
        is being shaped by AI, short-form content, and authentic community building.
        <br />
        <br />
        Read more on our blog 👇
      </>
    ),
    linkPreview: {
      image:
        'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=300&fit=crop',
      title: 'The Future of Social Media',
      domain: 'suuvo.com',
    },
    reactions: 128,
    comments: 34,
    showReactions: true,
  },
  {
    id: 3,
    time: '1mo',
    content: (
      <>
        Productivity isn't about doing more — it's about doing what matters. Here are 5 principles
        that have transformed how I approach my work as a tech entrepreneur:
        <br />
        <br />
        1. Start with the end in mind
        <br />
        2. Batch similar tasks
        <br />
        3. Protect your deep work time
        <br />
        4. Say no more often
        <br />
        5. Review and reflect weekly
      </>
    ),
    postImage:
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop',
    reactions: 89,
    comments: 21,
    showReactions: true,
  },
];

const PEOPLE = [
  {
    name: 'Sarah Chen',
    headline: 'Senior Product Manager at SUUVO',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Marcus Johnson',
    headline: 'Lead Software Engineer at SUUVO',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Emily Rodriguez',
    headline: 'UX Designer at SUUVO',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'David Kim',
    headline: 'Marketing Director at SUUVO',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Lisa Thompson',
    headline: 'Data Analyst at SUUVO',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
  },
];

const FILTERS = ['Posts', 'Comments', 'Videos', 'Images', 'Reactions'];

const LinkedInLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" fill="#0a66c2">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const NavIcon = ({ children, label, active, badge }) => (
  <button className={`li-nav-item ${active ? 'active' : ''}`}>
    <span className="li-nav-icon-wrap">
      {children}
      {badge && <span className="li-nav-badge">{badge}</span>}
    </span>
    <span className="li-nav-label">{label}</span>
  </button>
);

const ReactionIcons = () => (
  <span className="reaction-icons">
    <span className="reaction-icon like">👍</span>
    <span className="reaction-icon celebrate">👏</span>
    <span className="reaction-icon love">❤️</span>
  </span>
);

const PostCard = ({ post, profilePic, name, headline }) => (
  <article className="li-post-card">
    <div className="post-header">
      <img src={profilePic} alt={name} className="post-avatar" />
      <div className="post-author-info">
        <div className="post-author-row">
          <span className="post-author-name">{name}</span>
          <span className="post-connection">· 1st</span>
        </div>
        <p className="post-author-headline">{headline}</p>
        <span className="post-time">{post.time}</span>
      </div>
      <button className="post-more-btn" aria-label="More options">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
          <path d="M6 12a2 2 0 11-4 0 2 2 0 014 0z" />
          <path d="M22 12a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </button>
    </div>

    <div className="post-body">{post.content}</div>

    {post.linkPreview && (
      <div className="link-preview" role="button" tabIndex={0}>
        <img src={post.linkPreview.image} alt={post.linkPreview.title} />
        <div className="link-preview-text">
          <h4>{post.linkPreview.title}</h4>
          <span>{post.linkPreview.domain}</span>
        </div>
      </div>
    )}

    {post.postImage && (
      <img src={post.postImage} alt="Post" className="post-image" />
    )}

    {post.showReactions && (
      <div className="post-stats">
        <ReactionIcons />
        <span className="reaction-count">{post.reactions}</span>
        <span className="comment-count">{post.comments} comments</span>
      </div>
    )}

    <div className="post-actions">
      <button className="post-action-btn">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M19.46 11l-3.91-3.91a7.48 7.48 0 00-1.69-2.34V2h-2v2.75A7.48 7.48 0 0010.54 8.09L6.63 12l3.91 3.91a7.48 7.48 0 002.34 1.69V22h2v-2.75a7.48 7.48 0 001.69-2.34L19.46 13V11z" transform="rotate(0)" />
        </svg>
        Like
      </button>
      <button className="post-action-btn">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M7 9h10v1H7V9zm0 4h7v1H7v-1zm14-2c0 3.31-2.69 6-6 6h-1l-3.5 3.5c-.39.39-1.02.39-1.41 0s-.39-1.02 0-1.41L12.17 17H15c2.21 0 4-1.79 4-4s-1.79-4-4-4H8c-.55 0-1-.45-1-1s.45-1 1-1h7c3.31 0 6 2.69 6 6z" />
        </svg>
        Comment
      </button>
      <button className="post-action-btn">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 9H7v-3l-4 4 4 4v-3h12v-6h-2v4z" />
        </svg>
        Repost
      </button>
      <button className="post-action-btn">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z" />
        </svg>
        Send
      </button>
    </div>
  </article>
);

const AllActivity = () => {
  const fileInputRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('Posts');
  const [profilePic, setProfilePic] = useState(
    () => localStorage.getItem('linkedin_profile_pic') || DEFAULT_PROFILE_PIC
  );
  const [isEditingPic, setIsEditingPic] = useState(false);

  const name = 'Andrew Wilson';
  const headline =
    'Chairperson @ SUUVO, INC | Experienced tech entrepreneur & leader | 13+ year in tech, 8+ years in social media, mobile apps';

  const handleProfilePicClick = () => {
    fileInputRef.current?.click();
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePic(reader.result);
      localStorage.setItem('linkedin_profile_pic', reader.result);
      toast.success('Profile picture updated');
      setIsEditingPic(false);
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  return (
    <div className="linkedin-page">
      {/* Top Navigation */}
      <header className="li-navbar">
        <div className="li-navbar-inner">
          <div className="li-navbar-left">
            <Link to="/activity" className="li-logo">
              <LinkedInLogo />
            </Link>
            <div className="li-search">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="#666">
                <path d="M14.56 13.44l-3.28-3.28A5.5 5.5 0 101.5 8.5a5.48 5.48 0 003.78 1.44 5.5 5.5 0 003.78-1.44l3.28 3.28a.75.75 0 101.06-1.06zM8 12.5A4.5 4.5 0 118 3.5a4.5 4.5 0 010 9z" />
              </svg>
              <input type="text" placeholder="Search" />
            </div>
          </div>

          <nav className="li-navbar-center">
            <NavIcon label="Home" active>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 11 7z" />
              </svg>
            </NavIcon>
            <NavIcon label="My Network">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12 16v6H3v-6a3 3 0 013-3h4a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.5 4.5 0 007.5 2z" />
              </svg>
            </NavIcon>
            <NavIcon label="Jobs">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M20 7h-4V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H4a1 1 0 00-1 1v11a3 3 0 003 3h12a3 3 0 003-3V8a1 1 0 00-1-1zM10 5h4v2h-4V5z" />
              </svg>
            </NavIcon>
            <NavIcon label="Messaging">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M16 4H8a7 7 0 100 14h4v4l8.2-8.2A5 5 0 0016 4z" />
              </svg>
            </NavIcon>
            <NavIcon label="Notifications" badge="19">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 005 14h14a1 1 0 00.707-1.707L19 11.586V8a6 6 0 00-6-6zM12 22a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </NavIcon>
            <button className="li-nav-item li-nav-me">
              <span className="li-nav-icon-wrap">
                <img src={profilePic} alt="Me" className="li-nav-avatar" />
                <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" className="li-nav-caret">
                  <path d="M8 11L3 6h10l-5 5z" />
                </svg>
              </span>
              <span className="li-nav-label">Me</span>
            </button>
            <div className="li-nav-divider" />
            <NavIcon label="For Business">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
              </svg>
            </NavIcon>
            <button className="li-nav-premium">Try Premium for $0</button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="li-main">
        <div className="li-container">
          {/* Left Column - Profile Card */}
          <aside className="li-sidebar-left">
            <div className="li-profile-card">
              <div className="profile-banner">
                <img src={DEFAULT_BANNER} alt="Banner" onError={(e) => { e.target.style.background = '#1b1f23'; e.target.src = ''; }} />
              </div>
              <div className="profile-avatar-wrap">
                <div
                  className="profile-avatar-container"
                  onMouseEnter={() => setIsEditingPic(true)}
                  onMouseLeave={() => setIsEditingPic(false)}
                  onClick={handleProfilePicClick}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handleProfilePicClick()}
                  aria-label="Edit profile picture"
                >
                  <img src={profilePic} alt={name} className="profile-avatar" />
                  {isEditingPic && (
                    <div className="profile-avatar-overlay">
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                        <path d="M21 19V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                      </svg>
                      <span>Edit photo</span>
                    </div>
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePicChange}
                  className="profile-pic-input"
                  aria-hidden="true"
                />
              </div>
              <div className="profile-info">
                <h2 className="profile-name">
                  {name}
                  <svg viewBox="0 0 16 16" width="16" height="16" fill="#E7A33E" className="premium-badge">
                    <path d="M8 1l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4L8 1z" />
                  </svg>
                </h2>
                <p className="profile-headline">{headline}</p>
              </div>
              <div className="profile-stats">
                <span>Followers</span>
                <span className="profile-stat-value">4,868</span>
              </div>
              <button className="profile-message-btn">Message</button>
            </div>
          </aside>

          {/* Middle Column - Activity Feed */}
          <section className="li-feed">
            <h1 className="feed-title">All activity</h1>
            <div className="feed-filters">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  className={`filter-pill ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

            {activeFilter === 'Posts' ? (
              <div className="feed-posts">
                {POSTS.map((post) => (
                  <PostCard
                    key={post.id}
                    post={post}
                    profilePic={profilePic}
                    name={name}
                    headline={headline}
                  />
                ))}
              </div>
            ) : (
              <div className="feed-empty">
                <p>No {activeFilter.toLowerCase()} to show</p>
              </div>
            )}
          </section>

          {/* Right Column - Sidebar */}
          <aside className="li-sidebar-right">
            <div className="li-promo-card">
              <div className="promo-content">
                <LinkedInLogo />
                <p>Your job search powered by your network</p>
                <button className="promo-btn">Explore jobs</button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop"
                alt="People networking"
                className="promo-image"
              />
            </div>

            <div className="li-people-card">
              <h3>People you may know</h3>
              <p className="people-subtitle">From Andrew's company</p>
              <ul className="people-list">
                {PEOPLE.map((person) => (
                  <li key={person.name} className="people-item">
                    <img src={person.avatar} alt={person.name} className="people-avatar" />
                    <div className="people-info">
                      <span className="people-name">{person.name}</span>
                      <span className="people-headline">{person.headline}</span>
                    </div>
                    <button className="connect-btn">
                      <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                        <path d="M14 8h-3V5a1 1 0 00-2 0v3H6a1 1 0 000 2h3v3a1 1 0 002 0V10h3a1 1 0 000-2z" />
                      </svg>
                      Connect
                    </button>
                  </li>
                ))}
              </ul>
              <button className="show-more-btn">Show more</button>
            </div>
          </aside>
        </div>
      </main>

      {/* Messaging Widget */}
      <div className="li-messaging-widget">
        <img src={profilePic} alt="" className="messaging-avatar" />
        <span className="messaging-label">Messaging</span>
        <div className="messaging-actions">
          <button aria-label="More options">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
              <path d="M6 12a2 2 0 11-4 0 2 2 0 014 0z" />
              <path d="M22 12a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
          <button aria-label="Compose">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </button>
          <button aria-label="Minimize">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M19 13H5v-2h14v2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllActivity;
