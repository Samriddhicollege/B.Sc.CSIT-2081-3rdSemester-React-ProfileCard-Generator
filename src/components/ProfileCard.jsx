import React from 'react';

const ProfileCard = ({ profile, onDelete }) => {
  return (
    <div className="card-base profile-card">
      <img 
        src={profile.image} 
        alt={profile.name} 
        className="avatar"
      />
      
      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{profile.name}</h3>
      <p style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        {profile.role}
      </p>
      
      <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '1rem', flexGrow: 1, textAlign: 'center' }}>
        {profile.bio || 'No bio provided.'}
      </p>

      <button 
        onClick={() => onDelete(profile.id)} 
        className="secondary" 
        style={{ width: '100%', marginTop: '1.5rem', padding: '0.5rem' }}
      >
        Remove Card
      </button>
    </div>
  );
};

export default ProfileCard;
