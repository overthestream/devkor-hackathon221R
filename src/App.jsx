import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import LogoUrl from './background.png';
import CheerUrl from './leader.png';

import SongList from './components/SongList';
import SongPage from './pages/SongPage';

const Container = styled.div`
  position: fixed;
  z-index: -5;
  background: url(${LogoUrl});
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const ButtonText = styled.div`
  margin: 0 auto;
  margin-top: 100%;
  width: 80%;
  height: 20%;
  border-radius: 10px;
  background-color: white;
`;

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 0.5
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 0.5
  }
  to {
    opacity: 0
  }
`;

const CheerLogo = styled.img`
  width: 100%;
  height: 100%;
`;

const BackG = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: -1;
  background-color: #862633;
  top: 20px;
  border-radius: 20px;
`;

const MainButton = styled.div`
  width: 20%;

  font-size: 30px;

  text-align: center;

  position: fixed;
  top: 10%;
  left: 50%;

  transform: translateY(-50%);
  transform: translateX(-50%);

  &:hover {
    cursor: pointer;
  }
`;

const CloseButton = styled.button`
  width: fit-content;
  height: fit-content;
  font-size: 20px;
  margin: 0;
  position: absolute;
  top: 70%;
  transform: translateY(-50%);
  left: 50%;
  transform: translateX(-50%);

  animation-duration: 0.3s;
  animation-timing-function: ease-in;
  animation-name: ${fadeOut};
  animation-fill-mode: forwards;
`;

const DarkBg = styled.div`
  z-index: -1;
  position: fixed;
  background-color: #862633;
  opacity: 70%;
  width: 100%;
  height: 100%;
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

const App = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <GlobalStyle />
      <Container />
      {isClicked ? (
        <>
          <BrowserRouter>
            <DarkBg>
              <CloseButton />
            </DarkBg>
            <Routes>
              <Route path="/" element={<SongList />} />
              <Route path="/player" element={<SongPage />} />
            </Routes>
          </BrowserRouter>
        </>
      ) : (
        <MainButton
          onClick={() => {
            setIsClicked(true);
          }}
        >
          <CheerLogo src={CheerUrl} />
          <br />
          KU
          <br />
          응원 아카이브
          <BackG>
            <ButtonText />
          </BackG>
        </MainButton>
      )}
    </>
  );
};

export default App;
