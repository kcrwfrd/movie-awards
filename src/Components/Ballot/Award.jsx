import React from 'react';

import NomineeCard from './NomineeCard';

const Award = ({ award, selection, dispatch }) => {
  return (
    <div>
      <h2 className='text-3xl font-bold my-2'>{award.title}</h2>

      <ul className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4'>
        {award.items.map((nominee) =>
          <li key={nominee.id} className=''>
            <NomineeCard
              nominee={nominee}
              selected={selection === nominee.id}
              onClick={() => dispatch({
                type: 'toggle',
                payload: {
                  awardId: award.id,
                  nomineeId: nominee.id,
                }
              })}
            />
          </li>
        )}
      </ul>
    </div>
  )
}

export default Award;