import React, { useEffect, useRef } from 'react';
import './SnowFlakes.css'; // Import your CSS file for styles

const Snowflakes = () => {
    const snowflakesContainerRef = useRef(null);

    useEffect(() => {
        const createSnowflake = () => {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.textContent = '❄️'; // Snowflake emoji

            // Randomize the position and duration of the snowflake
            snowflake.style.left = Math.random() * 100 + 'vw';
            snowflake.style.animationDuration = Math.random() * 3 + 5 + 's'; // Random duration between 2s and 5s
            snowflake.style.fontSize = Math.random() * 0.5 + 1 + 'em'; // Random size between 1em and 3em

            // Append snowflake to the container
            snowflakesContainerRef.current.appendChild(snowflake);

            // Remove the snowflake after the animation is done
            snowflake.addEventListener('animationend', () => {
                snowflake.remove();
            });
        };
        // Create snowflakes at intervals
        const intervalId = setInterval(createSnowflake, 500); // Adjust the interval as needed

        // Cleanup on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array to run once on mount

    return <div className="snowflakes" ref={snowflakesContainerRef} aria-hidden="true" />;
};

export default Snowflakes;
