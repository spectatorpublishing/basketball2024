import React from 'react';
import styled from 'styled-components';
import '../index.css';
import SocialSpec from '../components/SocialSpec';

const LetterWrap = styled.div`
    padding-bottom:5vh;
    
    @media (max-width: 768px) {
        padding-left:4%;
        padding-right:4%;
    }

`;

const Title = styled.div`
    font-size: 5em;
    letter-spacing: 0.05em;
    font-family: 'Graduate', serif;
    color:#F69D4D;
    padding:1vh 0 1vh 0;
    word-wrap:break-word;

    @media (max-width: 768px) {
        font-size: 2em;
    }

`;

const Body = styled.div`
    font-size: 1.5em; 
    color: white;
    word-wrap:break-word;
    width:100%;
    font-family: 'Barlow', sans-serif;
    @media (max-width: 768px) {
        font-size: 1em;
    }
`;

const LetterEditor = () => {
    return (
        <LetterWrap>
            <SocialSpec/>
            <Title>LETTER FROM THE EDITOR</Title>
            <Body>
                <p>Dear readers, </p>
                <p>This year’s special edition comes at an exciting time for the Columbia basketball program. After making history last season, the reigning Ivy League women’s basketball champions have roared into conference play, currently riding a 10-game win streak. 
                The men’s program, which has struggled with a shoddy record for the past few seasons, has had its best campaign of non-conference play since 2015 this season. While the road ahead will be challenging for both teams, there is no better time to follow 
                Columbia Lions basketball.</p>
                <p>From a deep dive into the growing popularity of the women’s team to a men’s basketball player’s serendipitous journey to the United States, our staff has put together a lineup of stories that will not only take you closer to the court, but will also 
                help you understand the playing field that the Light Blue is facing. Whether you’re new to the crowd at Levien Gymnasium or a seasoned spectator, this edition has something for everyone.</p>

Happy Reading!

                <p>Heather Chen, sports editor</p>
            </Body>

            
         
            </LetterWrap>
    );
};

export default LetterEditor;