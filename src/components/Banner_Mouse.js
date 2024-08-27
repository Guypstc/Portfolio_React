import { useState, useEffect } from 'react';
import HeadderImg from "../assets/image/Headder.png";

const Character = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    const maxMovement = 20; // ระยะการเคลื่อนไหวสูงสุด

    const newPosX = mouseX * maxMovement;
    const newPosY = mouseY * maxMovement;

    setPosition({ x: newPosX, y: newPosY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="character"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <img src={HeadderImg} className="responsive-img" alt="Headder Img" />
    </div>
  );
};

export default Character;