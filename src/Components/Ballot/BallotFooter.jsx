import classNames from 'classnames';

import Spinner from '../Spinner';

export default function BallotFooter({ state, dispatch}) {
  // If any selection is null we can't submit
  const isValid = !Object.values(state.selection).some(id => id === null)
  const canSubmit = isValid && !state.submission.pending

  return (
    <footer className={classNames(
      'sticky bottom-0 w-full',
      'bg-gray-900/75 backdrop-blur',
      'border-t border-gray-700'
    )}>
      <div className='container mx-auto py-3 px-2 flex flex-row justify-end'>
        <p
          aria-hidden={isValid}
          className={classNames(
            'text-xs sm:text-sm py-1 text-slate-300 transition',
            (isValid) ? 'opacity-0' : 'opacity-100',
          )}
        >
          Please select a nominee for each award
        </p>
        <div className='flex flex-row-reverse'>
          <button
            disabled={!canSubmit}
            aria-disabled={!canSubmit}
            onClick={() => {
              dispatch({ type: 'submit' })
              setTimeout(() => dispatch({ type: 'submit.success'}), 900)
            }}
            className={classNames(
              'py-1 px-3',
              'text-sm text-white uppercase',
              'bg-[#009B86]',
              'rounded-md shadow transition', {
                'hover:text-slate-100 hover:bg-[#34AC9C]': canSubmit,
                'opacity-30 cursor-not-allowed': !canSubmit,
              }
            )}
          >
            Submit
          </button>
          <div className={classNames(
            'py-1 mx-2 transition duration-300',
            {
              'opacity-100': state.submission.pending,
              'opacity-0': !state.submission.pending,
            }
          )}>
            <Spinner />
          </div>
        </div>
      </div>
    </footer>
  )
}