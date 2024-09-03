import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, className }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [text]);

  return <h1 className={className}>{displayedText}</h1>;
};

export default TypingEffect;
