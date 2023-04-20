import React from 'react';

type CardProps = {
  borderColor: String;
  textColor: String;
  label: String;
  number: String;
};

export default function Card({
  borderColor,
  textColor,
  label,
  number,
}: CardProps) {
  return (
    <div className='shadow-md'>
      <div className='flex border-2 border-white shadow-inner bg-my-board-full-white h-full'>
        <div className={`border-l-2 ${borderColor}`} />
        <div className='py-4 px-4 '>
          <h3 className={`text-sm font-bold ${textColor}`}>{label}</h3>
          <p className='text-xl font-bold'>{number}</p>
        </div>
      </div>
    </div>
  );
}
