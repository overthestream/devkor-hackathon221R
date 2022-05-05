import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import FadeIn from 'react-fade-in';
import json from '../songs.json';
import SongItemCard from './SongItemCard';

const Wrapper = styled(FadeIn)`
  width: 650px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  padding-top: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
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

  return <Wrapper>{cardList}</Wrapper>;
};

export default SongList;
