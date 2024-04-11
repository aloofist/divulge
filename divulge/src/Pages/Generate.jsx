import React, { useState, useEffect } from 'react';  //
import { useSpring, animated } from '@react-spring/web'; //
import { Navbar, Footer } from '../components';
import './Generate.css';

const Generate = () => {
  const ideas = [
    "Draw a serene landscape",
    "Illustrate a mythical creature",
    "Sketch a futuristic cityscape",
    "Create a portrait of a loved one",
    "Design a pattern inspired by nature",
    "Draw a still life arrangement",
    "Render a fantasy character",
    "Illustrate a scene from your favorite book",
    "Create a self-portrait in a unique style",
    "Draw a surreal dreamlike composition",
    // story telling ideas
    "Write a short horror story",
    "Craft a fantasy tale about a quest",
    "Create a sci-fi story set in space",
    "Tell a story from the perspective of an animal",
    "Write a mystery story with a surprising twist",
    "Compose a romantic narrative in a historical setting",
    "Develop a children's story about friendship",
    "Create a dystopian story of a post-apocalyptic world",
    "Write a comedy script for a short skit",
    "Craft a suspenseful thriller story",
    // programming ideas
    "Develop a weather app",
    "Create a task management tool",
    "Build a recipe search and recommendation engine",
    "Design a multiplayer online game",
    "Develop a chatbot for customer support",
    "Create a personal finance tracker",
    "Build a social media analytics dashboard",
    "Develop a language learning app",
    "Design a recommendation system for movies or books",
    "Create an e-commerce website for handmade crafts"
  ];

  const [idea, setIdea] = useState("Is your mind blank?");

  const generateIdea = () => {
    const randomIndex = Math.floor(Math.random() * ideas.length);
    setIdea(ideas[randomIndex]);
  };

  //for blob
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('pointermove', handleMouseMove);

    return () => {
      document.removeEventListener('pointermove', handleMouseMove);
    };
 }, []);

  const animatedProps = useSpring({
    left: cursorPosition.x,
    top: cursorPosition.y,
    config: { tension: 100, friction: 100 },
  });

  return (
    <>
    
      <Navbar />
      <Footer />
      <div className="generate">
      <animated.div
        id="gallery-blob"
        style={{
          position: 'absolute',
          ...animatedProps,
        }}
      ></animated.div>
        <h1 id="idea" className='magic-words'>{idea}</h1>
        <button id="generate-btn" onClick={generateIdea}>
          Generate
        </button>
      </div>
    </>
  );
};

export default Generate;