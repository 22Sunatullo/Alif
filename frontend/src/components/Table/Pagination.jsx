import React from 'react'
import { Wrapper } from '../Wroper/Wraper';

export const Pagination = ({firstPage,totalP, paginate}) => {
    const pageNumber = [];
    for(let i = 1; i <= Math.ceil(totalP/firstPage); i++){
        pageNumber.push(i)
    }
  return (
    <div>
        <ul className='flex justify-between items-center'>
            {pageNumber.map(number =>(
                <li key={number}>
                    <a href="!#" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=>paginate(number)}>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    
    </div>
  )
}
