import React from 'react';
import Product from '../Product';

function MapProduct({ data }) {
    return (
        <div className='w-full best-seeling container mb-5 mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-2 lg:grid-cols-4 mt-5 items-center'>
            {
                data.map((ele, ind) => {
                    return (
                        <div className="flex justify-center items-center">
                            <Product id={ele.id} img={ele.img} offerPercentage={ele.offerPercentage}
                                oldPrice={ele.oldPrice} price={ele.price} rating={ele.rating} ratingCount={ele.ratingCount}
                                title={ele.title} key={ind} Loved={ele.Loved} />
                        </div>
                    );
                })
            }
        </div>
    );
}

export default MapProduct;