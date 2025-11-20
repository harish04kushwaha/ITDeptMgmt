import React, { useState, useEffect } from "react";

const QuoteTyper = () => {
  const [displayText, setDisplayText] = useState("");

  const typeText = (text) => {
    setDisplayText("");
    let index = -1; // FIXED

    const interval = setInterval(() => {
      if (index < text.length-1) {
        setDisplayText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);
  };

  const quotes = [
    "The best time to start was yesterday. The next best time is now.",
    "Success is not final, failure is not fatal.",
    "Believe you can and you're halfway there.",
    "Act as if what you do makes a difference. It does.",
    "Do something today that your future self will thank you for.",
    "Every artist was first an amateur.",
    "You have to believe in yourself when no one else does.",
    "Do one thing every day that scares you.",
    "It is better to be hated for what you are than to be loved for what you are not.",
  ];

  const fetchQuote = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    typeText(random);
  };

  useEffect(() => {
    fetchQuote(); // run once on load
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <p>{displayText}</p>
      <button className="quoteBtn" onClick={fetchQuote}>
        Quote of the Day
      </button>
    </div>
  );
};

export default QuoteTyper;
