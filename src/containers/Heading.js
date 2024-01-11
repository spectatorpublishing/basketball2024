import React from 'react';
import styled from 'styled-components';

import { device } from '../device';

import VerticalNav from '../components/VerticalNav';
import MobileNav from '../components/MobileNav';


const CoverWrapper = styled.div`
    background:url(https://cloudfront-us-east-1.images.arcpublishing.com/spectator/CBMHUPQ56ZGDXDVOJIRGAUBMWQ.jpg) #6B6BA2;
    background-size: cover;
    background-position: top;
    width:100%;
    height: 110vh;

    @media (max-width: 500px) {
        width:100%;
        height: 110vh;
    }

    @media (max-width: 768px) {
        height:35vh;
    }
    `;

const NavWrap = styled.div`
    display: none;

    @media ${device.tablet} {
        display: inherit;
    }
`;

const Heading = ({ section, setSection }) => {
    return (
        <div>
            <MobileNav current = {section} setSection = {setSection}/>
            <CoverWrapper id="home">
                <NavWrap>
                    <VerticalNav color="white" current={section} setSection={setSection} />
                </NavWrap>
            </CoverWrapper>
        </div>
    );
};

export default Heading;