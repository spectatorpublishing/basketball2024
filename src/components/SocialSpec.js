import React, { useState, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useOnClickOutside } from "../scripts/useOnClickOutside";

const StyledShareButton = styled.button`
  background-color: #A4EAEA;
  color: black;
  border-radius: 1.5rem;
  border: 0;
  padding: 0.5rem 0.7rem;
  cursor: pointer;
  margin-left: -0.25rem;
  font-weight: bold;
  font-size:20px;
  font-family: "Merriweather" "Bitter";
  transform: translateX(0);
  transition: 300ms ease-in-out;
  margin-top: 3em;
  @media (max-width: 768px) {
    margin-left: 40%;

  }
  
`;

const ShareCircle = styled.div`
  height: 3rem;
  width: 3rem;
  margin-left: -0.75rem;
  filter: drop-shadow(0 0 0.25rem rgba(68, 68, 68, 0.36));
  background-color: #2681ef;
  border-radius: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    margin-right: 1vh;

  }
`;
const fadeIn1 = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  0% {
    opacity: 0;
  }
  33%{
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;
const fadeIn3 = keyframes`
  0% {
    opacity: 0;
  }
  40%{
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;
const fadeIn4 = keyframes`
  0% {
    opacity: 0;

  }
  50%{
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const ShareLink = styled.a`
  position: absolute;
  transform: translate(
    ${props => props.translateX},
    ${props => props.translateY}
  );
  opacity: 1;
  animation: ${fadeIn1} 300ms linear;
  ${props =>
    props.order === 1 &&
    css`
      animation: ${fadeIn1} 300ms linear;
      transform: translate(-6.65rem, -32.5%);
    `}

  ${props =>
    props.order === 2 &&
    css`
      animation: ${fadeIn2} 450ms linear;
      transform: translate(-4.35rem, -135%);
    `}

  ${props =>
    props.order === 3 &&
    css`
      animation: ${fadeIn3} 600ms linear;
      transform: translate(-0.65rem, -135%);
    `}

  ${props =>
    props.order === 4 &&
    css`
      animation: ${fadeIn4} 750ms linear;
      transform: translate(1.75rem, -32.5%);
    `}

  ${props =>
    props.order === 2 &&
    css`
      animation: ${fadeIn2} 450ms linear;
      transform: translate(-4.35rem, -135%);
    `}

  ${props =>
    props.order === 3 &&
    css`
      animation: ${fadeIn3} 600ms linear;
      transform: translate(-0.65rem, -135%);
    `}

  ${props =>
    props.order === 4 &&
    css`
      animation: ${fadeIn4} 750ms linear;
      transform: translate(1.75rem, -32.5%);
    `}

  ${props =>
    props.order === 2 &&
    css`
      animation: ${fadeIn2} 450ms linear;
      transform: translate(-4.35rem, -135%);
    `}

  ${props =>
    props.order === 3 &&
    css`
      animation: ${fadeIn3} 600ms linear;
      transform: translate(-0.65rem, -135%);
    `}

  ${props =>
    props.order === 4 &&
    css`
      animation: ${fadeIn4} 750ms linear;
      transform: translate(1.75rem, -32.5%);
    `}

  ${props =>
    props.order === 2 &&
    css`
      animation: ${fadeIn2} 450ms linear;
      transform: translate(-4.35rem, -135%);
    `}

  ${props =>
    props.order === 3 &&
    css`
      animation: ${fadeIn3} 600ms linear;
      transform: translate(-0.65rem, -135%);
    `}

  ${props =>
    props.order === 4 &&
    css`
      animation: ${fadeIn4} 750ms linear;
      transform: translate(1.75rem, -32.5%);
    `}

  ${props =>
    props.order === 2 &&
    css`
      animation: ${fadeIn2} 450ms linear;
      transform: translate(-4.35rem, -135%);
    `}

  ${props =>
    props.order === 3 &&
    css`
      animation: ${fadeIn3} 600ms linear;
      transform: translate(-0.65rem, -135%);
    `}

  ${props =>
    props.order === 4 &&
    css`
      animation: ${fadeIn4} 750ms linear;
      transform: translate(1.75rem, -32.5%);
    `}

  ${props =>
    props.order === 2 &&
    css`
      animation: ${fadeIn2} 450ms linear;
      transform: translate(-4.35rem, -135%);
    `}

  ${props =>
    props.order === 3 &&
    css`
      animation: ${fadeIn3} 600ms linear;
      transform: translate(-0.65rem, -135%);
    `}

  ${props =>
    props.order === 4 &&
    css`
      animation: ${fadeIn4} 750ms linear;
      transform: translate(1.75rem, -32.5%);
    `}

  ${props =>
    props.order === 2 &&
    css`
      animation: ${fadeIn2} 450ms linear;
      transform: translate(-4.35rem, -135%);
    `}

  ${props =>
    props.order === 3 &&
    css`
      animation: ${fadeIn3} 600ms linear;
      transform: translate(-0.65rem, -135%);
    `}

  ${props =>
    props.order === 4 &&
    css`
      animation: ${fadeIn4} 750ms linear;
      transform: translate(1.75rem, -32.5%);
    `}

  ${props =>
    props.order === 2 &&
    css`
      animation: ${fadeIn2} 450ms linear;
      transform: translate(-4.35rem, -135%);
    `}

  ${props =>
    props.order === 3 &&
    css`
      animation: ${fadeIn3} 600ms linear;
      transform: translate(-0.65rem, -135%);
    `}

  ${props =>
    props.order === 4 &&
    css`
      animation: ${fadeIn4} 750ms linear;
      transform: translate(1.75rem, -32.5%);
    `}
`;

function ShareButton(props) {
  const linkUrl = encodeURIComponent(
    `https://www.columbiaspectator.com${props.canonical_url}`
  );
  const headline = encodeURIComponent(props.headline);
  const [isShowingShareCircles, setIsShowingShareCircles] = useState(false);
  const shareButtonRef = useRef(null);
  useOnClickOutside(shareButtonRef, () => setIsShowingShareCircles(false));

  return (
    <StyledShareButton
      onClick={() => setIsShowingShareCircles(!isShowingShareCircles)}
      isShowingShareCircles={isShowingShareCircles}
      ref={shareButtonRef}
    >
      Share
      {isShowingShareCircles && (
        <>
          <ShareLink
            href={`https://twitter.com/intent/tweet?url=${linkUrl}`}
            animationDelay="0ms"
            order={1}
          >
            <ShareCircle>
              <FontAwesomeIcon
                icon={faTwitter}
                fixedWidth
                style={{ height: "2.15rem"}}
                color={"white"}
              />
            </ShareCircle>

            {/* <ShareCircle src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/ZKW6YJBYEZDVTOOZCGVUJ2ED6E.png" /> */}
          </ShareLink>
          <ShareLink
            href={`https://www.facebook.com/sharer.php?u=${linkUrl}`}
            animationDelay="150ms"
            order={2}
          >
            <ShareCircle>
              <FontAwesomeIcon
                icon={faFacebookF}
                fixedWidth
                style={{ height: "1.5rem" }}
                color={"white"}
              />
            </ShareCircle>
          </ShareLink>
          <ShareLink
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${linkUrl}&title=${headline}`}
            animationDelay="300ms"
            order={3}
          >
            <ShareCircle>
              <FontAwesomeIcon
                icon={faLinkedin}
                fixedWidth
                style={{ height: "2.15rem" }}
                color={"white"}
              />
            </ShareCircle>
          </ShareLink>
          <ShareLink
            href={`mailto:test@gmail.com?subject=${props.headline}&body=${linkUrl}`}
            animationDelay="450ms"
            order={4}
          >
            <ShareCircle>
              <FontAwesomeIcon
                icon={faEnvelope}
                fixedWidth
                style={{ height: "2.15rem" }}
                color={"white"}
              />
            </ShareCircle>
          </ShareLink>
        </>
      )}
    </StyledShareButton>
  );
}

export default ShareButton;