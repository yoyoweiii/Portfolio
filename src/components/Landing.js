import React from 'react';
import './Landing.css';
import avatar from './avatar.jpg'; // Make sure you have an avatar image in the correct path

function Landing() {
  return (
    <section id="landing">
      <div className="landing-content">
        <img src={avatar} alt="Avatar" className="avatar" />
        <h1>Yu-Wei (Kevin) Hsu</h1>
        <p>Hello! I am Yu-Wei(Kevin), a recent graduate from Auburn University with a Bachelor's in Computer Science and a Master's in Management Information Systems.</p>
        <p>I am seeking software developer and data analyst positions. My education has provided me with a strong foundation in programming, data mining, and analytics.</p>
        <p>I have hands-on experience from projects like GlassCell, an award-winning accessibility hack that addresses emergency situations using Python, JavaScript, and Django, and an interactive bot that delivers real-time traffic updates using Python, OpenStreetMap, and Flask.</p>

      </div>
    </section>
  );
}

export default Landing;
