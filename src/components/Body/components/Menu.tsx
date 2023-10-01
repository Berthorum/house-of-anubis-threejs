import styled from "styled-components";
import youtubeLogo from "../../../assets/youtubeLogo.svg";
import twitterLogo from "../../../assets/twitterLogo.svg";
import instagramLogo from "../../../assets/instagramLogo.svg";
import artstationLogo from "../../../assets/artstationLogo.svg";
import githubLogo from "../../../assets/githubLogo.svg";

export default function menu() {
  const Wrapper = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px 5px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    @media (max-width: 1024px) {
      display: none;
    }
  `;
  return (
    <Wrapper>
      <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        <img src={youtubeLogo} alt="Youtube Logo" width={42} height={42} />
      </a>
      <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        <img src={twitterLogo} alt="Twitter Logo" width={42} height={42} />
      </a>
      <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        <img src={instagramLogo} alt="Instagram Logo" width={42} height={42} />
      </a>
      <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        <img src={artstationLogo} alt="Artstation Logo" width={42} height={42} />
      </a>
      <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        <img src={githubLogo} alt="Github Logo" width={42} height={42} />
      </a>
    </Wrapper>
  );
}
