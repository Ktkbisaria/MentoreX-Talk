import React, { useState } from 'react';
import '../App.css';
import PeersImage from '../Assets/WhatsApp Image 2024-08-29 at 11.56.32_4e000f09.jpg'; // Import the Peers image
import MentorsImage from '../Assets/Screenshot 2024-08-29 115123.png'; // Import the Mentors image

const Inbox = () => {
    const [activeTab, setActiveTab] = useState('Peers');
    const [showModal, setShowModal] = useState(false); // State to manage modal visibility

    return (
        <div className="container">
            {/* Header */}
            <div className="header">
                <h2 className="title">Messages</h2>
                <button className="edit-button" onClick={() => setShowModal(!showModal)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="icon"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                </button>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>New Message</h3>
                            <button className="close-button" onClick={() => setShowModal(false)}>X</button>
                        </div>
                        <div className="modal-content">
                            <ul>
                                <li onClick={() => { /* Add Create Group functionality here */ }}>
                                    Create Group
                                </li>
                                <li onClick={() => { /* Add Start New Chat functionality here */ }}>
                                    Start a new chat
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {/* Tabs */}
            <div className="tabs">
                <button className={`tab ${activeTab === 'Peers' ? 'active' : ''}`} onClick={() => setActiveTab('Peers')}>Peers</button>
                <button className={`tab ${activeTab === 'Mentors' ? 'active' : ''}`} onClick={() => setActiveTab('Mentors')}>Mentors</button>
            </div>

            {/* Content based on active tab */}
            {activeTab === 'Peers' ? (
                <div className="card">
                    <div className="card-content">
                        <div className="hash-icon"></div>
                        <h3 className="card-title">Community Groups</h3>
                        <p className="card-subtitle">Explore Communities: Diverse Community Groups</p>
                    </div>
                    <div className="card-image">
                        <img src={PeersImage} alt="Community Groups" className="image medium-size" /> {/* Medium size class applied */}
                    </div>
                    <p className="card-description">
                        Start talking, connect, and unlock the potential of meaningful interactions. Your adventure begins with the first <span className="highlight">message!</span>
                    </p>
                </div>
            ) : (
                <div className="card">
                    <div className="card-content">
                        <div className="hash-icon"></div>
                        <h3 className="card-title">Community Groups</h3>
                        <p className="card-subtitle">Explore Communities: Diverse Community Groups</p>
                    </div>
                    <div className="card-image">
                        <img src={MentorsImage} alt="Mentor Session" className="image medium-size" /> {/* Medium size class applied */}
                    </div>
                    <p className="card-description">
                        Book a session with a Mentor and watch this space come alive with discussions that shape your professional journey.
                    </p>
                    <button className="mentor-button blue-button">Book a Session</button> {/* Blue button class applied */}
                </div>
            )}
        </div>
    );
}

export default Inbox;
