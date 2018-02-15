import { AddAction, RemoveAction, SubscribeAction, TypeKeys  } from '../action/subscribe';
import { Subscribe } from '../model';

const makeEmptySubscribeState = (): Subscribe[] => ([]);

export const SubscribeReducer = (state: Subscribe[] = makeEmptySubscribeState()  , action: SubscribeAction): Subscribe[] => {
  switch (action.type) {
    case TypeKeys.ADD:
      for (let val of state) {
        // TODO error
        if (val.id === action.id) {
            return state;
        }
      }
      return [
        ...state,
        {
          name: action.name,
          id: action.id,
        },
      ];
    case TypeKeys.REMOVE:
      for (let i = 0; i < state.length; i ++) {
        if (state[i].id === action.id) {
          state = state.splice(i, 1);
        }
      }
      return state;
    default:
        return state;
  }
};
