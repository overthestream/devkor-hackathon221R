import React from 'react';
import styled from 'styled-components';

const CardLayout = styled.div`
  width: 300px;
  height: 170px;
  padding: 15px;
  border-radius: 15px;
  background-color: #d7ccbd;
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
`;

const SongDescription = styled.div`
  margin-top: 10px;
  font-size: 20px;
`;

const SongDescEmphasis = styled.div`
  margin-top: 15px;
  font-size: 25px;
  color: #862633;
`;

const SongItemCard = (props) => {
  const { title, descStrings, emp } = props;
  const descElements = descStrings.map((item) => {
    return <SongDescription>{item}</SongDescription>;
  });
  return (
    <CardLayout>
      <SongTitle>{title}</SongTitle>
      <Divider />
      {descElements}
      <SongDescEmphasis>{emp}</SongDescEmphasis>
    </CardLayout>
  );
};

export default SongItemCard;
