import React from 'react'

export const Pagination = ({countePage,totalP }) => {
    const pageNumber = [];
    for(let i = 1; i< Math.ceil(totalP/countePage); i++){
        pageNumber.push(1)
    }
  return (
    <div>
        <ul>
            {pageNumber.map(number =>(
                <li key={number}>
                    <a href="#">
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}
