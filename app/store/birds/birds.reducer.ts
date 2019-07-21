import {
  Bird,
  BirdActiontypes,
  BirdsState,
  DELETE_BIRD,
  NEW_BIRD
} from './birds.types';

const initialState: BirdsState = {
  birds: [],
};

export const birdsReducer = <BirdsState>(state = initialState, action: BirdActiontypes) => {
  switch (action.type) {
    case NEW_BIRD:
      return {
        ...state,
        birds: [...state.birds, action.payload.bird],
      };
    case DELETE_BIRD:
      const birds = [...state.birds.filter((bird: Bird) => bird.birdId !== action.payload.birdId)];
      return {
        ...state,
        birds: [...state.birds, birds],
      };
    default:
      return state;
  }
};