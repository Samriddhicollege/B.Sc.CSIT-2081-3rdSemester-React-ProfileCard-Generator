import React from 'react';
import ProfileCard from './ProfileCard';

const ProfileList = ({ profiles, onDeleteProfile }) => {
  if (profiles.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--text-muted)' }}>
        <p style={{ fontSize: '1.125rem' }}>No profiles yet.</p>
        <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Your generated cards will appear here.</p>
      </div>
    );
  }

  return (
    <div className="profile-grid">
      {profiles.map((profile) => (
        <ProfileCard 
          key={profile.id} 
          profile={profile} 
          onDelete={onDeleteProfile} 
        />
      ))}
    </div>
  );
};

export default ProfileList;
