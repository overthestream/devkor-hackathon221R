/* eslint-disable react/jsx-curly-newline */
import React, { useRef, useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  background-color: red;
`;

const Typography = styled.div`
  position: fixed;
  font-size: 20px;
  top: ${(props) => {
    return `${50 + props.y}px`;
  }};
  left: ${(props) => {
    return `${100 + props.x}px`;
  }};
  color: white;
`;

const YoutubePlayer = styled(ReactPlayer)``;

const SongPage = () => {
  const location = useLocation();
  const { url, typoArr } = location.state;
  const [processedTypos, setProcessedTypos] = useState([]);
  const player = useRef();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    typoArr.forEach((item) => {
      processedTypos[item.time] = item.typo;
    });
  }, []);
  return (
    <Wrapper>
      <YoutubePlayer
        ref={player}
        url={url}
        width="100%"
        height="100%"
        muted
        playing
        onProgress={() => {
          setProgress(Math.ceil(player.current.getCurrentTime()));
        }}
        config={{
          youtube: {
            playerVars: { modestbranding: 1, controls: 1 },
          },
        }}
      />
      <Typography
        x={Math.floor(Math.random() * 1000) % 650}
        y={Math.floor(Math.random() * 1000)}
      >
        {processedTypos[progress] ? processedTypos[progress] : ''}
      </Typography>
    </Wrapper>
  );
};

export default SongPage;
