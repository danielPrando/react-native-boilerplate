import { Bird } from './../../store/birds/birds.types';

export interface NewBirdProps {
  newBird: (...args: any) => any;
}

export interface NewBirdState {
  bird: Bird;
}