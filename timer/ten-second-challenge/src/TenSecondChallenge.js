import React, { useState, useEffect } from 'react';

const TenSecondChallenge = () => {
  const [countdown, setCountdown] = useState(10);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsRunning(false);
      alert('Time is up!');
    }
    return () => clearTimeout(timer);
  }, [isRunning, countdown]);

  const startTimer = () => {
    setIsRunning(true);
    setCountdown(10);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  return (
    <div>
      <h1>10-Second Challenge</h1>
      <p>Time remaining: {countdown} seconds</p>
      {!isRunning && (
        <button onClick={startTimer}>Start Challenge</button>
      )}
      {isRunning && (
        <button onClick={stopTimer}>Stop Challenge</button>
      )}
    </div>
  );
};

export default TenSecondChallenge;