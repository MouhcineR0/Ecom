import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../utils/Button';

function ShowAllButton() {
    return (
        <div className='w-full mx-auto flex justify-center mt-[50px]'>
            <Button To={'AllProducts'} Name={'View All Products'} />
        </div>
    );
}

export default ShowAllButton;