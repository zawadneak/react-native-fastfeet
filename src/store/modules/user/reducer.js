import { produce } from 'immer';

const INITIAL_STATE = {
  user: [],
  signed: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/SIGN_IN': {
        draft.user = action.payload.user;
        draft.signed = false;
        break;
      }
      case '@user/SIGN_OUT': {
        draft.user = [];
        draft.signed = true;
        break;
      }
      default:
    }
  });
}
