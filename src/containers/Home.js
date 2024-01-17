import React from 'react';
import styled from 'styled-components';

import CreditsSec from './Credits';
import LetterSec from './LetterEditor';
import NavigationSec from '../components/Navigation';
import Heading from './Heading';
import MobileNav from '../components/MobileNav';
  
const Wrapper1 = styled.div`
    padding-left:7%;
    padding-right:7%;
    overflow-x:hidden;
    overflow-y: hidden;
    @media (max-width: 768px) {
        
    }
`;

const Wrapper = styled.div`
    width: 100%;
    overflow-x:hidden;
    background: #01304C;
    @media (max-width: 768px) {
        height:100vh;
        padding-left:0%;
        padding-right:0%;
    }
`;

const Home = () => {
    return (
        <Wrapper>
        <MobileNav current = {"home"} />
        <Heading/>
        <Wrapper1>     
            <LetterSec />
            <NavigationSec first={true} next="all basketball" link="/all" />
            <CreditsSec />
        </Wrapper1>
        </Wrapper>
    );
};

export default Home;