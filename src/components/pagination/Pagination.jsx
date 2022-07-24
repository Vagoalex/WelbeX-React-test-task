import './Pagination.scss';

const Pagination = ({ dataPerPage, totalData, paginatePage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='pagination-container'>
      <ul className='pagination-list'>
        {pageNumbers.map((number) => (
          <li key={number} className='pagination-list__item'>
            <a
              onClick={(e) => {
                e.preventDefault();
                paginatePage(number);
              }}
              href='!#'
              className='pagination-list-link'
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
