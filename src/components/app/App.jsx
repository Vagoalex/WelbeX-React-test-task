import { useState, useEffect } from 'react';
import { useHttp } from '../../hooks/http.hook';
import Table from '../table/Table';
import SearchInput from '../search-elements/SearchInput';
import SearchSelects from '../search-elements/SearchSelects';
import PerPageSelect from '../search-elements/PerPageSelect';
import Pagination from '../pagination/Pagination';
import sortData from '../../helpers/sortData';
import './App.scss';

const URL = 'https://welbex-test-task-project.herokuapp.com/api';
// const URL = 'http://localhost:5000';
// const url = 'http://localhost:3000';

function App() {
  const { request, process, setProcess } = useHttp();

  const [data, setData] = useState([]);

  const [dataPerPage, setDataPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const [term, setTerm] = useState('');

  const [columnsFilter, setColumnsFilter] = useState('default');
  const [conditionFilter, setConditionFilter] = useState('default');

  // ================================================================

  const filterConditionData = (items, inputTerm, activeFilter, filter) => {
    const lowerTerm = inputTerm.toLowerCase();

    switch (filter) {
      case 'default':
        return items;
      case 'equal':
        return items.filter((item) => {
          const lowerName = String(item[activeFilter]).toLowerCase();
          return lowerName === lowerTerm;
        });
      case 'contain':
        return items.filter((item) => {
          const lowerName = String(item[activeFilter]).toLowerCase();
          return lowerName.indexOf(lowerTerm) > -1;
        });
      case 'more':
        return items.sort((a, b) => sortData(a, b, activeFilter));
      case 'less':
        return items.sort((a, b) => sortData(a, b, activeFilter));

      default:
        return items;
    }
  };

  useEffect(() => {
    request(`${URL}/data`)
      .then(setData)
      .then(() => setProcess('confirmed'));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeDataPerPage = (e) => {
    setProcess('loading');
    setDataPerPage(+e.target.value);
    setTimeout(() => {
      setProcess('confirmed');
    }, 300);
  };

  const visibleData = filterConditionData(
    data,
    term,
    columnsFilter,
    conditionFilter
  );

  const indexOfLastPost = currentPage * dataPerPage;
  const indexOfFirstPost = indexOfLastPost - dataPerPage;

  const currentData = visibleData.slice(indexOfFirstPost, indexOfLastPost);

  const paginatePage = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='App'>
      <div className='App-container'>
        <section className='search-panel'>
          <SearchInput term={term} setTerm={setTerm} />
          <SearchSelects
            setColumnsFilter={setColumnsFilter}
            setConditionFilter={setConditionFilter}
          />
          <PerPageSelect
            dataPerPage={dataPerPage}
            onChangeDataPerPage={onChangeDataPerPage}
          />
        </section>

        <Table data={currentData} process={process} />
        <Pagination
          dataPerPage={dataPerPage}
          totalData={data.length}
          paginatePage={paginatePage}
        />
      </div>
    </div>
  );
}

export default App;
