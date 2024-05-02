import React from 'react';
import { HomeContainer } from './styled';
import Header from '../../components/Header';
import FirstContainer from '../../components/Home/FirstContainer';
import SecondContainer from '../../components/Home/SecondContainer/';
import Categories from '../../components/Home/Categories';

function Home() {
    return (
        <HomeContainer>
            <Header />
            <FirstContainer />
            <SecondContainer />
            <Categories />
        </HomeContainer>
    );
}


export default Home;