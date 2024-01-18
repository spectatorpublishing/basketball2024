import React from "react";
import styled from "styled-components";
import NavigationSec from "../components/Navigation";
import "../index.css";
import SmallArticle from "../components/SmallArticle";
import Heading from "./Heading";
import MobileNav from '../components/MobileNav';

const SectionWrap1 = styled.div`
  background: #01304C;
  padding-left: 9%;
  padding-right: 9%;
  @media (max-width: 500px) {
    padding-left: 4%;
    padding-right: 4%;
  }
`;

const TwoColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const ArticlesWrap = styled.div`
  display: flex;
  margin-right: 2vh;
  flex-wrap: wrap;
  position: center;
`;

const GenderColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const GenderWrap = styled.div`
  display: flex;
  background-color: #01304C;
  justify-content: center;
  margin-top: 5vw;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 7vw;
  }
  
`;

const Filter = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  padding: 1vh 2.5vh 1vh 2.5vh;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  @media (max-width: 500px) {
    left: 0%;
    padding: 2vw;
    :after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #0102c1;
      transform-origin: 100% 0;
      transform: skew(-10deg);
      z-index: -1;
    }
  }
  :hover {
    color: black;
    background-color:#F69D4D; 
    cursor: pointer;
  }
`;

const Women = styled.div`
  color: "black";
  background-color: ${(props) =>
    props.section === "womens" ? "#F69D4D" : "#5574C4"};
  border-radius: 14px;
  width:50vh;
  margin-left: 8%;
  margin-top: 5px;
  text-align: center;
  font-size: 20px;
  @media(max-width:1090px){
    width: 30%;
  }
  @media (max-width: 768px) {
    width: 35%;
    margin-left: 0;
  }
`;

const Men = styled.div`
  color: "black";
  background-color: ${(props) =>
    props.section === "mens" ? "#F69D4D" : "#5574C4"};
  font-size: 20px;
  width:50vh;
  margin-top: 5px;
  text-align: center;
  border-radius: 14px;
  @media(max-width:1090px){
    width: 30%;
  }
  @media (max-width: 768px) {
    width: 35%;
    margin-right: 0;
  }
`;

const Section = ({ id, mendata, womendata, color, sportsdata}) => {
  
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [isMobile, setMobile] = React.useState(false);

  const [section, setSection] = React.useState("all");
  console.log(section);
  React.useEffect(() => {
    if (dimensions.width < 500) setMobile(true);

    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      if (window.innerWidth < 500) setMobile(true);
      else setMobile(false);
    }

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <MobileNav current = {"all"} />
      <Heading/>
      <GenderWrap id="section1">
        <Men section={section}>
          {" "}
          <Filter onClick={() => section != "mens" ? setSection("mens") : setSection("all")}>Men's Basketball</Filter>
        </Men>
        <Women section={section}>
          {" "}
          <Filter onClick={() => section != "womens" ? setSection("womens") : setSection("all")}>
            Women's Basketball
          </Filter>
        </Women>
      </GenderWrap>

      <SectionWrap1 id={id} color={color}>
        {section === "mens" && (
          <TwoColumn>
            {" "}
            {mendata.map((article) => {
              return <SmallArticle article={article} />;
            })}{" "}
          </TwoColumn>
        )}

        {section === "womens" && (
          <TwoColumn>
            {" "}
            {womendata.map((article) => {
              return <SmallArticle article={article} />;
            })}{" "}
          </TwoColumn>
        )}

        {section === "all" && (
          <ArticlesWrap>
            <TwoColumn>
              {" "}
              {sportsdata.map((article) => {
                return <SmallArticle article={article} />;
              })}{" "}
            </TwoColumn>
          </ArticlesWrap>
        )}
        <NavigationSec first={false} next="Home" link="/" />
      </SectionWrap1>
    </div>
  );
};

export default Section;
