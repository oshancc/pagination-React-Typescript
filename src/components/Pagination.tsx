import React from 'react';

type PaginteProp = {
  postsPerPage: number;
  totalPosts: number;
  paginate:(number:number) => void;
}

const Pagination = ({ postsPerPage, totalPosts, paginate }:PaginteProp) => {
  const pageNumbers:number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
      <nav aria-label="Page navigation example">
</nav>
    </nav>
  );
};

export default Pagination;
