import React from 'react'
import { worryList } from "../../../constants/CONST";
import Worry from './Worry'

const WorryList = () => {
  return (
    <ul className='flex-col flex gap-2'>
      {worryList.map((worry, index) => (
        <Worry key={index} worry={worry} />
      ))}
    </ul>
  );
}

export default WorryList