import React, {useEffect, useState} from 'react';

const Element = ({time, tag}) => {
    const [isChange, setIsChange] = useState(false);
    useEffect(() => {
        setIsChange(true);

        const timeout = setTimeout(() => {
            setIsChange(false);
        }, 500); // Adjust the duration of the hover animation (in milliseconds)
    
        return () => clearTimeout(timeout);
    }, [time])

    const timeStyle = {
        transform: isChange ? 'hidden' : 'block',
        transition: isChange ? 'transform 0.5s' : 'transform 0s',
    };

    const cardStyle = {
        transform: isChange ? 'rotateX(180deg)' : 'rotateX(0deg)',
        transformOrigin: 'bottom', // Set the transform origin to the top edge
        transition: isChange ? 'transform 0.5s' : 'transform 0s',
    };
    
  return (
    // hover:transform hover:-scale-y-100 hover:duration-500
    <div>
            <div className="relative flex items-center justify-center bg-purple-700 shadow-2xl rounded-lg p-8" >
            <div className='absolute inset-0 grid grid-rows-2 p-1 rounded-lg' >
                <div className='bg-gray-900 ' style={cardStyle}></div>
                <div className='bg-gray-800'></div>
            </div>
            <span className='relative z-10 font-bold text-6xl text-red-400 flex items-center justify-center' style={timeStyle}>{time}</span>

            <div className='absolute inset-0 flex items-center'>
                <div className='h-[2px] w-full bg-black'/>
            </div>
        </div>

        <div className="flex items-center justify-center mt-5 p-1">
            <p className='text-gray-400 font-bold uppercase text-xs tracking-[5px]'>{tag}</p>
        </div>
    </div>
  )
}

export default Element