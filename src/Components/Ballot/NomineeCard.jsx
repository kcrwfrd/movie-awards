import React from 'react';
import classNames from 'classnames';

const NomineeCard = ({nominee, selected, onClick }) => {
  const { photoUrL, title } = nominee
  
  return (
    <div 
      className={classNames('border-solid', 'border-4', {
        'border-slate-300': selected,
        'border-slate-600': !selected,
      })}
      onClick={onClick}
    >
      <img
        src={photoUrL}
        alt={title}
        className='object-cover h-96 min-w-full object-center'
      />
      {title}
    </div>
  )
}

export default NomineeCard;