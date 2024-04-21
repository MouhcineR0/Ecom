import React from 'react';
import NewBar from './NewBar';
import Header from './Header';
import useWidth from '../../tools/useWidth';
import RHeader from './RHeader';

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