import React, { useEffect, useReducer } from 'react';

import Api from '../../Api/Api';
import ballotReducer, { initialState } from './ballotReducer';

import Award from './Award';
import BallotFooter from './BallotFooter';
import SubmissionModal from './SubmissionModal';

const Ballot = () => {
  const [state, dispatch] = useReducer(ballotReducer, initialState)

  useEffect(() => {
    (async () => {
      try {
        const data = await Api.getBallotData();
        dispatch({
          type: 'init',
          payload: data
        })
      } catch (e) {
        console.error(e);
        throw e;
      }
    })()
  }, [])

  return (
    <div className='ballot'>
      <main className="container mx-auto px-2">
        <ul>
          {state.data.items.map((award) =>
            <li key={award.id} className='mb-12'>
              <Award
                award={award}
                selection={state.selection[award.id]}
                dispatch={dispatch}
              />
            </li>
          )}
        </ul>
      </main>
      
      <BallotFooter { ...{state, dispatch} }/>

      <SubmissionModal show={state.showModal} dispatch={dispatch} />
    </div>
  )
}

export default Ballot;