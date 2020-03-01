import { produce } from 'immer';

const INITIAL_STATE = {
  data: [],
  signed: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/SIGN_IN': {
        draft.data = action.payload.user;
        draft.signed = true;
        break;
      }
      case '@user/SIGN_OUT': {
        draft.data = [];
        draft.signed = false;
        break;
      }
      default:
    }
  });
}
