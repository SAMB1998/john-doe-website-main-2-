// src/Profile.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile({ username }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios.get(`https://api.github.com/users/${username}`)
      .then(response => {
        setProfile(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Profile not found');
        setLoading(false);
      });
  }, [username]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="profile">
      <img src={profile.avatar_url} alt={`${profile.login}'s avatar`} />
      <h2>{profile.name}</h2>
      <p>{profile.bio}</p>
      <ul>
        <li><strong>Followers:</strong> {profile.followers}</li>
        <li><strong>Following:</strong> {profile.following}</li>
        <li><strong>Public Repos:</strong> {profile.public_repos}</li>
      </ul>
    </div>
  );
}

export default Profile;
