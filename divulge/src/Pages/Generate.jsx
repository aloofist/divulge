import React, { useState, useEffect } from 'react';  //
import { useSpring, animated } from '@react-spring/web'; //
import { Navbar, Footer } from '../components';
import './Generate.css';

const Generate = () => {
  const ideas = [
    //drawing ideas
    "Draw a serene landscape",
    "Illustrate a mythical creature",
    "Sketch a futuristic cityscape",
    "Create a portrait of a loved one",
    "Design a pattern inspired by nature",
    "Draw a still life arrangement",
    "Render a fantasy character",
    "Draw a self-portrait in a unique style",
    "Draw a surreal dreamlike composition",
    "Sketch a whimsical underwater scene",
    "Illustrate a superhero in action",
    "Create a nature-inspired mandala design",
    "Render a steampunk-inspired machinery",
    "Draw a majestic mountain peak.",
    "Sketch a whimsical fairy tale castle.",
    "Create a detailed illustration of a roaring lion.",
    "Draw a serene beach landscape at sunset.",
    "Sketch a delicate blooming flower.",
    "Illustrate a mystical unicorn in a magical forest.",
    "Create a vibrant cityscape with towering skyscrapers.",
    "Draw a graceful dancer in motion.",
    "Sketch a mouth-watering plate of delicious food.",
    "Illustrate a charming cottage nestled in the countryside.",

    // story telling ideas
    "Craft a fantasy tale about a quest",
    "Create a sci-fi story set in space",
    "Tell a story from the perspective of an animal",
    "Write a mystery story with a surprising twist",
    "Compose a romantic narrative in a historical setting",
    "Develop a children's story about friendship",
    "Create a dystopian story of a post-apocalyptic world",
    "Write a comedy script for a short skit",
    "Craft a suspenseful thriller story",
    "Write a coming-of-age story set in a small town.",

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
    "Create an e-commerce website for handmade crafts",
    "Build a budget tracking app.",
    "Create a recipe-sharing website.",
    "Develop a weather forecast application.",
    "Design a note-taking web app.",
    "Build a cryptocurrency portfolio tracker.",
    "Create a task management API.",
    "Develop a music streaming service.",
    "Build a real-time chat application.",
    "Design a car rental booking system.",
    "Create a quiz app for educational purposes.",
    "Develop a barcode scanning mobile app.",
    "Build a job search platform.",
    "Create a stock market analysis tool.",
    "Design a calorie counter and meal planner app.",
    "Develop a social media scheduling tool."

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
    left: cursorPosition.x - 700,
    top: cursorPosition.y - 400,
    config: { tension: 100, friction: 100 },
  });

  return (
    <>
    
      <div className='generate-wrapper'>
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
            <button className='special-button' id="generate-btn" onClick={generateIdea}>
              Generate
            </button>
        </div>

      </div>
    </>
  );
};

export default Generate;