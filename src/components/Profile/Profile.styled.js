import styled from 'styled-components';

export const ProfileContainer = styled.div`
  padding-top: 70px;
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 350px;
  min-height: 360px;
  box-shadow: 0 0 6px;
  border-radius: 4px;
  outline: 1px solid blue;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AvatarInfo = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: 600;

  &:not(:last-of-type) {
    margin-bottom: 5px;
  }
`;

export const Avatar = styled.img`
  width: 150px;
  margin-bottom: 25px;
`;

export const StatsList = styled.ul`
  width: 100%;
  height: 100px;

  display: flex;
  margin-top: auto;
`;

export const StatsItem = styled.li`
  width: calc(100% / 3);
  /* min-height: 100px; */

  border: 1px solid lightblue;
  /* border-radius: 30px; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
