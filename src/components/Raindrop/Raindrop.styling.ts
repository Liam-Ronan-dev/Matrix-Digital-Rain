import styled from 'styled-components';
import { ANIMATION_MAX_HEIGHT, ANIMATION_MIN_HEIGHT } from './constants';
import { getRandomSpeed } from './utils';

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
