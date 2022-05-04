import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import LogoUrl from './background.png';

const Container = styled.div`
  background: url(${LogoUrl});
  height: 100vh;
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
    opacity: 0.7
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
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  left: 50%;
  -ms-transform: translateX(-50%);
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
  /* animation-timing-function: ease-out; */
  animation-name: ${fadeOut};
  animation-fill-mode: forwards;
`;

const DarkBg = styled.div`
  background-color: darkred;
  opacity: 50%;
  width: 100vw;
  height: 100vh;

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
      <Container>
        {isClicked ? (
          <DarkBg>
            <CloseButton />
          </DarkBg>
        ) : (
          <MainButton
            onClick={() => {
              setIsClicked(true);
            }}
          >
            입장하기
          </MainButton>
        )}
      </Container>
    </>
  );
};

export default App;
