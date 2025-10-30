import { useState } from "react";
import "./App.css";
import Header from "./Header";
import styled from "styled-components";
import HeroSection from "./Sections/HeroSection";

const Main = styled.div`
  padding: 32px 160px;
  background-color: #F7F8F9;
  height: 100vh;
`

function App() {
  return (
    <Main>
      <Header />
      <HeroSection /> 
    </Main>
  );
}

export default App;
