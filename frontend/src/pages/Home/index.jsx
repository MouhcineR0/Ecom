import React from 'react';
import { HomeContainer } from './styled';
import Header from '../../components/Header';
import FirstContainer from '../../components/Home/FirstContainer';

function Home() {
    return (
        <HomeContainer>
            <Header />
            <FirstContainer />
        </HomeContainer>
    );
}


export default Home;