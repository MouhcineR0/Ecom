import React from 'react';
import Product from '../../Product';

function BestSell({ data }) {
    return (
        <div className='w-full container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 items-center'>
            {
                data.map((ele, ind) => {
                    return (
                        <Product id={ele.id} img={ele.img} offerPercentage={ele.offerPercentage}
                            oldPrice={ele.oldPrice} price={ele.price} rating={ele.rating} ratingCount={ele.ratingCount}
                            title={ele.title} key={ind} Loved={ele.Loved} />
                    );
                })
            }
        </div>
    );
}

export default BestSell;