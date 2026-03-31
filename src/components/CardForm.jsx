import React, { useState } from 'react';

const CardForm = ({ onAddProfile }) => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    bio: '',
    image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${Math.random().toString(36).substring(7)}`,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRandomize = () => {
    setFormData((prev) => ({
      ...prev,
      image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${Math.random().toString(36).substring(7)}`,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.role) return;

    onAddProfile({
      ...formData,
      id: Date.now(),
    });

    // Reset form
    setFormData({
      name: '',
      role: '',
      bio: '',
      image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${Math.random().toString(36).substring(7)}`,
    });
  };

  return (
    <div className="card-base" style={{ padding: '2rem', maxWidth: '480px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '1.5rem', textAlign: 'center', fontSize: '1.25rem' }}>Create Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'center', justifyContent: 'center' }}>
          <img 
            src={formData.image} 
            alt="Avatar" 
            className="avatar"
            style={{ marginBottom: 0 }}
          />
          <button type="button" onClick={handleRandomize} className="secondary">
            Randomize Avatar
          </button>
        </div>
        
        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Doe"
            required
          />
        </div>

        <div>
          <label>Occupation / Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Software Developer"
            required
          />
        </div>

        <div>
          <label>Short Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="A short description..."
            rows="3"
          />
        </div>

        <button type="submit" style={{ width: '100%' }}>
          Add Profile Card
        </button>
      </form>
    </div>
  );
};

export default CardForm;
