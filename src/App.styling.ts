import styled from 'styled-components';
import { ANIMATION_MAX_HEIGHT, ANIMATION_MIN_HEIGHT } from './constants';

export const Wrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const Box = styled.div`
  width: 7em;
  height: 7em;
  position: relative;
  border: 3px dotted red;
  animation: verticalMove 2s linear infinite;

  @keyframes verticalMove {
    from {
      top: ${ANIMATION_MIN_HEIGHT}px;
    }
    to {
      top: ${ANIMATION_MAX_HEIGHT}px;
    }
  }
`;
