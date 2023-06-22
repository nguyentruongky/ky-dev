import React, { useState } from 'react';

export default function SectionHeader(props: {
  title: string;
  subView?: JSX.Element;
}) {
  return (
    <div className='absolute top-24 z-50	'>
      <h3 className='font-bold uppercase tracking-[20px] text-gray-500 text-2xl text-center'>
        {props.title}
      </h3>
      {props.subView}
    </div>
  );
}
