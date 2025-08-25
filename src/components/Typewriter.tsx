import React, { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number; // ms per character
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 0, className }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (speed <= 0) {
      setDisplayed(text);
      return;
    }
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className={className} dangerouslySetInnerHTML={{ __html: displayed }} />;
};

export default Typewriter;