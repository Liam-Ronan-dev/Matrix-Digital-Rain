import styled from 'styled-components';
import {
  ANIMATION_MAX_HEIGHT,
  ANIMATION_MIN_HEIGHT,
  MAX_ANIMATION_SPEED,
  MIN_ANIMATION_SPEED,
} from './constants';

export const getRandomSpeed = (): number => {
  const minSpeed = Math.ceil(MIN_ANIMATION_SPEED);
  const maxSpeed = Math.floor(MAX_ANIMATION_SPEED);

  return Math.floor(Math.random() * (maxSpeed - minSpeed + 1) + minSpeed);
};

export const Wrapper = styled.div`
  display: flex;
  gap: 50px;
`;

export const Box = styled.div`
  width: 7em;
  height: 7em;
  position: relative;
  border: 3px dotted red;
  animation: verticalMove ${getRandomSpeed}s linear infinite;

  @keyframes verticalMove {
    from {
      top: ${ANIMATION_MIN_HEIGHT}px;
    }
    to {
      top: ${ANIMATION_MAX_HEIGHT}px;
    }
  }
`;
