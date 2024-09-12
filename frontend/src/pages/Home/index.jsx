import React, { useEffect } from 'react';
import { HomeContainer } from './styled';
import FirstContainer from '../../components/Home/FirstContainer';
import SecondContainer from '../../components/Home/SecondContainer/';
import Categories from '../../components/Home/Categories';
import BestSeeling from '../../components/Home/Best';
import Hr from '../../components/utils/Hr';
import Explore from '../../components/Home/Explore';
import Service from '../../components/Home/Services/index';
import { useDispatch, useSelector } from 'react-redux';
import { GetProducts } from '../../features/Product/ProductFunctions';


function Home() {
    // need fix this

    const obj = useSelector(state => state.product);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetProducts());
    }, [dispatch]); // dispatch as a dependency

    useEffect(() => {
        console.log(obj); // This will log the updated state after every state change
    }, [obj]); // obj as a dependency

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