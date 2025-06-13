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

    // dispatching products and passing it in the states

    // need fix : instead error raise something went wrong !

    const { products, error, Loading } = useSelector(state => state.product);
    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(GetProducts());
    // }, []);

    // handle loading animations here while on

    // add reducers to filter products by its type : (cover, product, categories)

    // modify also db tests

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