import styled from "styled-components";
import anubis from "../../assets/anubis.svg";
import ank from "../../assets/ank.svg";

export default function footer() {
  const Wrapper = styled.div`
   margin-top: auto;
  `;

  const Box = styled.section`
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Egyptian+Hieroglyphs&family=Tangerine&display=swap");
    font-family: "Noto Sans Egyptian Hieroglyphs", sans-serif;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const Sibuna = styled.span`
    font-size: 2em;
  `;

  return (
    <Wrapper>
      <Box>
        <img src={anubis} alt="Anubis Logo" width={50} height={50} />
        <Sibuna>&#78585;&#78231;&#77904;&#78685;&#78323;&#77874;</Sibuna>
        <img src={ank} alt="Anubis Logo" width={50} height={50} />
      </Box>
    </Wrapper>
  );
}
