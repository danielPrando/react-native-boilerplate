import { Bird, DELETE_BIRD, NEW_BIRD } from './birds.types';

export const newBird = (bird: Bird) => {
  return {
    type: NEW_BIRD,
    payload: {
      bird
    }
  };
}

export const deleteBird = (birdId: string) => {
  return {
    type: DELETE_BIRD,
    payload: {
      birdId,
    }
  };
}