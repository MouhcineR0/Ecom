import React from 'react';

function NewBar() {
    return (
        <div className='w-full bg-black text-white font-poppins text-[8px] sm:text-[11px] md:text-[12px]'>
            <div className='p-2 flex gap-1 justify-center'>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                <a href='#Shop' className='underline bold font-semibold'>Shop Now</a>
            </div>
        </div>
    );
}

export default NewBar;