import React from 'react';
import Countdown from 'react-countdown';

const SingleDate = ({ type, date }) => {
    return (
        <div className='flex justify-center'>
            <div className='flex flex-col font-inter font-bold'>
                <p className='text-[12px]'>{type}</p>
                <h1 className='text-[30px]'>{date.toString().length == 1 ? `0${date}` : date}</h1>
            </div>
        </div>
    );
};


const CountdownTimer = ({ targetDate }) => {
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        console.log(hours.length);
        if (completed) {
            return 0;
        } else {
            return (
                <div className='flex gap-2 items-center'>
                    {days >= 0 && <SingleDate type='Days' date={days} />}
                    <p className='text-[16px] text-primary text-center'>:</p>
                    {hours >= 0 && <SingleDate type='Hours' date={hours} />}
                    <p className='text-[16px] text-primary text-center'>:</p>
                    {minutes >= 0 && <SingleDate type='Minutes' date={minutes} />}
                    <p className='text-[16px] text-primary text-center'>:</p>
                    {seconds >= 0 && <SingleDate type='Seconds' date={seconds} />}
                </div>
            );
        }
    };

    return (
        <Countdown
            date={targetDate}
            renderer={renderer}
        />
    );
};

export default CountdownTimer;
