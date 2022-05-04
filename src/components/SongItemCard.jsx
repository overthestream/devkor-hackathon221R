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
  margin-top: 20px;
  font-size: 25px;
  color: #862633;
`;

const SongItemCard = (props) => {
  return (
    <CardLayout>
      <SongTitle>뱃노래</SongTitle>
      <Divider />
      <SongDescription>
        함께하겠습니다. <br />
        민족의 노래! 승리의 노래!
      </SongDescription>
      <SongDescEmphasis>뱃 노 래 !</SongDescEmphasis>
    </CardLayout>
  );
};

export default SongItemCard;
