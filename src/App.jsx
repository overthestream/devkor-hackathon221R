import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import LogoUrl from './background.png';

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

const MainButton = styled.button`
  width: 200px;
  height: 60px;
  border-radius: 15px;
  font-size: 20px;
  margin: 0;
  position: absolute;
  top: 70%;
  transform: translateY(-50%);
  left: 50%;
  transform: translateX(-50%);
`;

const CloseButton = styled.button`
  width: 200px;
  height: 60px;
  border-radius: 15px;
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
          입장하기
        </MainButton>
      )}
    </>
  );
};

export default App;
