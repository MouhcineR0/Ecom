import React from 'react';
import { HomeContainer } from './styled';
import Header from '../../components/Header';
import FirstContainer from '../../components/Home/FirstContainer';
import SecondContainer from '../../components/Home/SecondContainer/';
import Categories from '../../components/Home/Categories';
import BestSeeling from '../../components/Home/Best';
import Hr from '../../components/utils/Hr';
import Explore from '../../components/Home/Explore';
import Service from '../../components/Home/Services/index';
import Footer from '../../components/Footer';


function Home() {
    return (
        <HomeContainer>
            <FirstContainer />
            <SecondContainer />
            <Hr />
            <Categories />
            <Hr />
            <BestSeeling />
            <Hr />
            <Explore />
            <Hr />
            <Service />
        </HomeContainer>
    );
}


export default Home;