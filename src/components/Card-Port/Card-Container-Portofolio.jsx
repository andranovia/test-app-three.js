import React from 'react';
import CardComponent from './Card-Portofolio';

const CardPortofolio = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  };

  return (
    <div style={containerStyle}>
      <CardComponent
        title="Project 1"
        description="Description of Project 1"
        imageUrl="https://example.com/project1-image.jpg"
        githubLink="https://github.com/your-username/project1"
        liveLink="https://your-project1-live-url.com"
      />
    </div>
  );
};

export default CardPortofolio;
