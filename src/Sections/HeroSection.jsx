import React from "react"
import styled from "styled-components";
import Zahra from "../assets/icons/Zahra";

const StyledHero = styled.div`
    margin-top: 40px;
    text-align: center;
`

const StyledIntro = styled.div`
    font-weight: 300;
    font-size: 24px;
    >p {
        display: flex;
        justify-content: center;
        align-items: end;
        gap: 8px;
    }
`

const StyledName = styled.span`
    background-color: #D3DBFF;
    padding: 4px 12px;
    border-radius: 56px;
    font-size: 24px !important;
    font-weight: 600;
`

const StyledInfo = styled.div`
    background-color: #fff;
    padding: 40px 8px;
    border-radius: 56px;
    margin-top: 24px;
    width: 65%;
    margin-right: auto;
    margin-left: auto;
`

const StyledInfoP = styled.p`
    width: 100%;
    font-size: 32px;
`

const StyledInfoPBold = styled.span`
    font-weight: 700;
`

const HeroSection = () => {
  return (
    <StyledHero>

        <StyledIntro>
            <p>
                Hi, This is
                <StyledName>Zahra</StyledName>
                <Zahra />
                <StyledName>Jafarinasab</StyledName>
            </p>
        </StyledIntro>

        <StyledInfo>

            <StyledInfoP>
                <StyledInfoPBold> product designer </StyledInfoPBold> with a creative mindset, passionate about
                crafting <StyledInfoPBold> innovative and enhanced user experiences. </StyledInfoPBold>
            </StyledInfoP>
            
        </StyledInfo>

    </StyledHero>
  )
};

export default HeroSection;
