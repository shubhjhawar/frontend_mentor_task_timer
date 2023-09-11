import React, { useState, useEffect } from 'react';
import Element from './Element';

const Timer = () => {
  const [days, setDays] = useState(14);
  const [hours, setHours] = useState(24);
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(59);

  
  useEffect(() => {
    const timeout = setInterval(() => {
     setSeconds((prevSeconds) => prevSeconds-1);
      
     if(seconds === 0)
     {
        setMinutes((prevMinutes) => prevMinutes -1);
        setSeconds(59);
     }

     if(minutes === 0)
     {
      setHours((prevHours) => prevHours -1);
      setMinutes(59);
     }

     if(hours === 0)
     {
      setDays((prevDays) => prevDays -1);
      setHours(59);
     }
    

    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(timeout);
  }, [seconds, minutes, hours, days]);

  return (
    <div className="flex flex-row w-full">
      <div className='grid grid-cols-4 gap-6'>
        <Element time={days} tag={"Days"}/>
        <Element time={hours} tag={"Hours"}/>
        <Element time={minutes}  tag={"Minutes"}/>
        <Element time={seconds}  tag={"Seconds"}/>
      </div>
    </div>
  );
};

export default Timer;
