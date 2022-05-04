import React, { useEffect, useState } from 'react';
import json from '../songs.json';
import SongItemCard from './SongItemCard';

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

  return cardList;
};

export default SongList;
