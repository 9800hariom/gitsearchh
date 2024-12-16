// src/components/ProfileCard.jsx
import React from "react";
import { FiMapPin, FiLink, FiTwitter, FiBriefcase } from "react-icons/fi";

function ProfileCard({ profileData, theme }) {
  return (
    <div className={`profile-card ${theme}`}>
      <div className="profile-header">
        <img
          src={
            profileData
              ? profileData.avatar_url
              : "https://github.githubassets.com/images/modules/logos_page/Octocat.png"
          }
          alt="The Octocat"
          className="avatar"
        />
        <div className="profile-info">
          <h2>{profileData ? profileData.name || "Not Available" : "The Octocat"}</h2>
          <p style={{ color: "blue" }}>@octocat</p>
          <p className="join-date">
            Joined {profileData ? new Date(profileData.created_at).toLocaleDateString("en-GB") : "25 Jan 2011"}
          </p>
        </div>
      </div>
      <p className="bio">{profileData ? profileData.bio || "This profile has no bio" : "This profile has no bio"}</p>
      <div className="user-stats">
        <div>
          <h4>Repos</h4>
          <p>{profileData ? profileData.public_repos : 8}</p>
        </div>
        <div>
          <h4>Followers</h4>
          <p>{profileData ? profileData.followers : 3938}</p>
        </div>
        <div>
          <h4>Following</h4>
          <p>{profileData ? profileData.following : 9}</p>
        </div>
      </div>
      <div className="user-details">
        <div>
        <p><FiMapPin /> {profileData ? profileData.location || "Not Available" : "San Francisco"}</p>
        
        <p><FiLink /> <a href={profileData ? profileData.blog || "#" : "https://github.blog"} target="_blank" rel="noreferrer">{profileData ? profileData.blog || "Not Available" : "https://github.blog"}</a></p>
        </div>
        <div>
        <p><FiTwitter /> {profileData ? profileData.twitter_username || "Not Available" : "Not Available"}</p>
        <p><FiBriefcase /> {profileData ? profileData.company || "Not Available" : "@github"}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
