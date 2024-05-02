import React from 'react';
import NewBar from './NewBar';
import Header from './Header';
import RHeader from './RHeader';
import useWidth from '../../hooks/useWidth';

function index() {

    const Width = useWidth();
    console.log(Width);

    return (
        <>
            <NewBar />
            {Width > 768 ? <Header /> : <RHeader />}
        </>
    );
}

export default index;