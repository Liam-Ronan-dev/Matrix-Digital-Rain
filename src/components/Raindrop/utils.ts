import { MIN_ANIMATION_SPEED, MAX_ANIMATION_SPEED } from './constants';

export const getRandomSpeed = (): number => {
  const minSpeed = Math.ceil(MIN_ANIMATION_SPEED);
  const maxSpeed = Math.floor(MAX_ANIMATION_SPEED);

  return Math.floor(Math.random() * (maxSpeed - minSpeed + 1) + minSpeed);
};
