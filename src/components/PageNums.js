import React from 'react'

const PageNums = ( {paginate}) => {

    const pageNumbers = [1,2,3,4,5,6,7,8,9];

    
  return (
    <nav className="pageNums">
        <ul className="pagination">
            {pageNumbers.map(number => 
            (
                <li key = {number} className="page-item">
                    <p onClick={() => paginate(number)} className="page-link">{number}</p>
                    
                </li>

            ))}
        </ul>
    </nav>
  )
}

export default PageNums