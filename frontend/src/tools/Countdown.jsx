import React from 'react';
import Countdown from 'react-countdown';

const SingleDate = ({ type, date }) => {
    return (
        <div className='flex justify-center'>
            <div className='flex flex-col font-inter font-bold'>
                <p className='text-[12px]'>{type}</p>
                <h1 className='md:text-[30px] text-[24px]'>{date.toString().length == 1 ? `0${date}` : date}</h1>
            </div>
        </div>
    );
};

const TwoPoints = () => {
    return (
        <p className='text-[16px] text-primary text-center'>:</p>
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
                    <TwoPoints />
                    {hours >= 0 && <SingleDate type='Hours' date={hours} />}
                    <TwoPoints />
                    {minutes >= 0 && <SingleDate type='Minutes' date={minutes} />}
                    <TwoPoints />
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
