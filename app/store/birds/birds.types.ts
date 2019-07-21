export const NEW_BIRD = 'NEW_BIRD';
export const DELETE_BIRD = 'DELETE_BIRD';

export interface Bird {
  birdId: string;
  species: string;
  name?: string;
}

export interface BirdsState {
  birds: Bird[];
}

interface NewBird {
  type: typeof NEW_BIRD,
  payload: {
    bird: Bird,
  };
};

interface DeleteBird {
  type: typeof DELETE_BIRD,
  payload: {
    birdId: string,
  };
}

export type BirdActiontypes = NewBird | DeleteBird;

