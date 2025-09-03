import React, { useState, useEffect, useMemo } from "react";

const Typewriter: React.FC<{ text: string; speed?: number }> = ({
  text,
  speed = 50,
}) => {
  const [displayedText, setDisplayedText] = useState("");

  const tokens = useMemo(() => {
    // This regex splits the string by HTML tags, keeping the tags and the text content.
    const parts = text.split(/(<[^>]+>)/g).filter(Boolean);
    const tokenList: string[] = [];
    parts.forEach((part) => {
      // If it's a tag, add it as a single token.
      if (part.startsWith("<") && part.endsWith(">")) {
        tokenList.push(part);
      } else {
        // Otherwise, split the text content into individual characters.
        tokenList.push(...part.split(""));
      }
    });
    return tokenList;
  }, [text]);

  useEffect(() => {
    setDisplayedText("");
    if (tokens.length === 0) return;

    let i = 0;
    const intervalId = setInterval(() => {
      if (i < tokens.length) {
        setDisplayedText((current) => current + tokens[i]);
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [tokens, speed]);

  return (
    <div className="relative">
      {/* This hidden element acts as a sizer, reserving the full height */}
      <span
        className="invisible"
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: text }}
      />
      {/* This absolutely positioned element displays the animated text */}
      <span
        className="absolute top-0 left-0 w-full h-full"
        dangerouslySetInnerHTML={{ __html: displayedText }}
      />
    </div>
  );
};

export default Typewriter;