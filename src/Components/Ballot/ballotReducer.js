export const initialState = {
  data: {
    items: []
  },
  selection: {}
}

export default function ballotReducer(state = initialState, action) {
  switch (action.type) {
    case 'init':
      return {
        data: action.payload,
        selection: action.payload.items.reduce((memo, award) => {
          memo[award.id] = null

          return memo
        }, {})
      }
    
    case 'toggle':
      return {
        ...state,
        selection: {
          ...state.selection,
          [action.payload.awardId]: (
              state.selection[action.payload.awardId] === action.payload.nomineeId
            ) ? null : action.payload.nomineeId,
        },
      }
    
    default:
      return state
  }
}