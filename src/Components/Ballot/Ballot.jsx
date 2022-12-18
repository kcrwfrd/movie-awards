import classNames from 'classnames';
import React, { useEffect, useReducer } from 'react';

import Api from '../../Api/Api';
import ballotReducer, { initialState } from './ballotReducer';

import Award from './Award';

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

  // If any selection is null we can't submit
  const canSubmit = !Object.values(state.selection).some(id => id === null)

  return (
    <div className='ballot'>
      <main className="container mx-auto">
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
      
      <footer className={classNames(
        'sticky bottom-0 w-full',
        'bg-white dark:bg-slate-900/75 backdrop-blur',
        'border-t border-slate-700'
      )}>
        <div className='container mx-auto py-3 flex flex-row-reverse'>
          <button
            disabled={!canSubmit}
            aria-disabled={!canSubmit}
            title={canSubmit
              ? 'Submit vote'
              : 'Please select a nominee for each award'
            }
            className={classNames(
              'py-1 px-3 bg-indigo-500',
              'text-sm text-white uppercase',
              'rounded-md shadow transition', {
                'hover:text-slate-100 hover:bg-indigo-600': canSubmit,
                'opacity-30 cursor-not-allowed': !canSubmit,
              }
            )}
          >Submit</button>
          <p
            aria-hidden={canSubmit}
            className={classNames(
              'text-sm py-1 mx-2 text-slate-300 transition',
              canSubmit ? 'opacity-0' : 'opacity-100',
            )}
          >Please select a nominee for each award</p>
        </div>
      </footer>
    </div>
  )
}

export default Ballot;