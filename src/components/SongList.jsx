import React, { useEffect, useState } from 'react';
import json from '../songs.json';
import SongItemCard from './SongItemCard';

const SongList = () => {
  const [songItemList, setSongItemList] = useState([]);
  useEffect(() => {
    setSongItemList(json);
    console.log(json);
  }, []);

  const cardList = songItemList.map((item, index) => {
    return (
      <SongItemCard
        title={item.title}
        descStrings={item.descStrings}
        emp={item.emp}
      />
    );
  });

  return cardList;
};

export default SongList;
