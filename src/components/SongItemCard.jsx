import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardLayout = styled.div`
  width: 300px;
  height: fit-content;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 15px;
  background-color: #d7ccbd;
  margin-left: 10px;

  &:hover {
    background-color: #dcd1c2;
    cursor: pointer;
  }
  &:active {
    background-color: #d1c7b8;
  }
`;

const Divider = styled.div`
  margin: 3px auto;
  margin-bottom: 10px;
  width: 100%;
  height: 2px;
  background-color: #862633;
`;

const SongTitle = styled.div`
  font-size: 30px;
  color: black;
`;

const SongDescription = styled.div`
  margin-top: 10px;
  font-size: 20px;
  color: black;
`;

const SongDescEmphasis = styled.div`
  margin-top: 15px;
  font-size: 25px;
  color: #862633;
`;

const SongItemCard = (props) => {
  const { title, descStrings, emp, url, typoArr } = props;
  const descElements = descStrings.map((item) => {
    return <SongDescription>{item}</SongDescription>;
  });
  return (
    <CardLayout>
      <Link to="player" state={{ url, typoArr }}>
        <SongTitle>{title}</SongTitle>
        <Divider />
        {descElements}
        <SongDescEmphasis>{emp}</SongDescEmphasis>
      </Link>
    </CardLayout>
  );
};

export default SongItemCard;
