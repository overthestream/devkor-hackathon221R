import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import FadeIn from 'react-fade-in';
import json from '../songs.json';
import SongItemCard from './SongItemCard';

const Wrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
  padding: 20px;
`;

const SongList = () => {
  const [songItemList, setSongItemList] = useState([]);
  useEffect(() => {
    setSongItemList(json);
  }, []);

  const cardList = songItemList.map((item, index) => {
    return (
      <SongItemCard
        key={index}
        title={item.title}
        descStrings={item.descStrings}
        emp={item.emp}
        url={item.url}
        typoArr={item.typoArr}
      />
    );
  });

  return (
    <Wrapper>
      <FadeIn>{cardList}</FadeIn>
    </Wrapper>
  );
};

export default SongList;
