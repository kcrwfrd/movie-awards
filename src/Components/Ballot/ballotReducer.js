export const initialState = {
  data: {
    items: []
  },
  selection: {},
  submission: {
    pending: false,
    error: false,
    success: false,
  },
  showModal: false,
}

export default function ballotReducer(state = initialState, action) {
  switch (action.type) {
    case 'init':
      return {
        ...state,
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
    
    case 'submit':
      return {
        ...state,
        submission: {
          ...state.submission,
          pending: !state.submission.pending,
        }
      }

    case 'submit.success':
      return {
        ...state,
        submission: {
          ...state.submission,
          pending: false,
          success: true,
        },
        showModal: true,
      }

    case 'modal.close':
      return {
        ...state,
        showModal: false,
      }

    default:
      return state
  }
}