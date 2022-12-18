import classNames from 'classnames'

export default function SubmissionModal({ show, dispatch }) {
  return (
    <div className={classNames(
      'modal', {
        'modal-open': show
      }
    )}>
      <div className='modal-box'>
        <div className='alert alert-success shadow-lg'>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <span>Submission successful! Thank you for voting.</span>
          </div>
        </div>

        <div className='modal-action'>
          <button
            className='btn btn-sm'
            onClick={() => dispatch({ type: 'modal.close' })}
          >Close</button>
        </div>
      </div>
    </div>
  )
}