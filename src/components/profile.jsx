import React, { useState, useEffect } from "react"
import "../styles/profile.css"
import { Icon } from '@iconify/react'

const Profile = () => {
  const [profileData] = useState({
    username: "fiki",
    email: "fikii@example.com",
    phone: "1234567890",
    location: "Malang, Jawa Timur",
  })

  const [profileImage, setProfileImage] = useState(
    "https://i.pinimg.com/736x/99/d0/7f/99d07f72ea74f29fe21833964704cdc9.jpg"
  )

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, [])

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setProfileImage(reader.result)
      };
      reader.readAsDataURL(file)
    }
  };

  const handleSave = () => {
    localStorage.setItem("profileImage", profileImage)
    alert("Profile changes saved!")
  }

  return (
    <div className="profile-container">
      <div className="navbar">
        <div className="logo">WAOW</div>
        <div className="nav-links">
          <a href="home">Home</a>
          <a href="profile" className="active">Profile</a>
          <a href="settings">Category</a>
        </div>
      </div>

      <div className="profile-card">
        <h2>Profile</h2>
        <div className="profile-card-content">
          <div className="profile-info">
            <div className="profile-field">
              <strong>Username</strong>
              <span>{profileData.username}</span>
            </div>
            <div className="profile-field">
              <strong>Email</strong>
              <span>{profileData.email}</span>
            </div>
            <div className="profile-field">
              <strong>Phone</strong>
              <span>{profileData.phone}</span>
            </div>
            <div className="profile-field">
              <strong>Location</strong>
              <span>{profileData.location}</span>
            </div>
          </div>

          <div className="profile-picture">
            <img
              className="profile-img"
              src={profileImage}
              alt="Profile"
            />
            <div className="camera-icon">
              <label htmlFor="imageUpload">
                <Icon icon="mdi:camera" width="25" height="25" />
              </label>
              <input
                type="file"
                id="imageUpload"
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>
        </div>
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  )
}
export default Profile