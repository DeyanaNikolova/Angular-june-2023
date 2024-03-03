import { Action } from '@ngrx/store';

export function translateReducer(state: string = 'Hello!', action: Action) {
  console.log(action.type, state);

  switch (action.type) {
    case 'BULGARIAN':
      return (state = 'Здрасти!');
    case 'ENGLISH':
      return (state = 'Hello!');
    case 'DEUTSCH':
      return (state = 'Guten Taag!');
      case 'ITALIAN':
        return (state = 'Buongiorno!');
    default:
      return state;
  }
}
