import React from "react";
import styled from "styled-components";


const VertNav = styled.div`
  text-align: right;
  position: absolute;
  right: 1vw;
  top: 3vh;
  font-weight: 700;
  z-index: 100;
`;

const Logo = styled.div`
    width: 100px;
    height: 80px;
    padding-top:10px;
    text-align: center;
    background-color: black;
    border-radius: 100%;
    margin-left: 25vh;
    margin-bottom: 2.5vh;
`;


const NavBar = () => {
    return (
        <VertNav>
            <Logo>
                <a href="https://www.columbiaspectator.com/" style={{
                }}><img style={{
                    height: "60px",
                    width: "55px",
                }} src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/LC75RL476NFG3P677LOBAW2MXE.png"></img></a>
            </Logo>
            
        </VertNav >
    );
};

export default NavBar;
