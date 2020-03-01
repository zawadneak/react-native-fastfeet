import { produce } from 'immer';

const INITIAL_STATE = {
  pending: [],
  delivered: [],
};

export default function deliveries(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@deliveries/GET': {
        draft.pending = action.payload.pending;
        draft.delivered = action.payload.delivered;
        break;
      }
      default:
    }
  });
}
