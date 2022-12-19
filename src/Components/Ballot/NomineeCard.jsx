import React from 'react';
import classNames from 'classnames';

const NomineeCard = ({nominee, selected, onClick }) => {
  const { photoUrL, title } = nominee
  
  return (
    <li
      className={classNames(
        'card bg-base-100 card-compact cursor-pointer transition',
        'opacity-80 hover:opacity-100',
        'shadow-md hover:ring-4', {
          'ring-4 ring-[#009B86]': selected,
          'hover:ring-[#34AC9C]': !selected,
        }
      )}
      onClick={onClick}
    >
      <figure>
        <img
          src={photoUrL}
          alt={title}
          className='object-cover object-center w-full h-64 sm:h-96'
        />
      </figure>
      <div className='card-body'>
        <h4>{title}</h4>
      </div>
    </li>
  )
}

export default NomineeCard;