import React from 'react';
import styled from 'styled-components';
import VerticalNav from '../components/VerticalNav';

const CoverWrapper = styled.div`
    background:url(https://cloudfront-us-east-1.images.arcpublishing.com/spectator/67TKSDXV3FE6TKZTS4KBVD7WNI.png) #01304C;
    background-size: cover;
    background-position: top;
    width:100%;
    height: 100vh;
    
    @media (max-width: 500px) {
        width:100%;
        height: 110vh;
    }

    @media (max-width: 768px) {
        height:25vh;
        position: relative;
    }
`;

const Title = styled.div`
    font-family: 'Faster One', system-ui;
    color: white;
    font-size: 9em;
    position: absolute;
    bottom: 0;
    left: 5%;

    @media (max-width: 500px) {
        font-size: 4em;
    }

    @media (max-width: 768px) {
        font-size: 3em;
    }
    `;

const Heading = () => {
    return (
        <div>
            <CoverWrapper id="home">
                <div>
                    <VerticalNav color="white" />
                </div>
            </CoverWrapper>
        </div>
    );
};

export default Heading;