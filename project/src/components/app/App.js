import { useState, useEffect } from 'react';
import { useHttp } from '../../hooks/http.hook';
import Table from '../table/Table';
import Search from '../search-panel/Search';
import Pagination from '../pagination/Pagination';
// import axios from 'axios';
import './App.scss';

// Если нужно изменить количество лишек в пагинации, то меняем dataPerPage
// dataPerPage = 20 (будет 20 лишек в пагинации)
const dataPerPage = 10;

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const { request, process, setProcess } = useHttp();

  const onFilterData = (value) => {
    const newData = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredData(newData);
  };

  // Можно использовать мой кастомный хук useHttp() или оставить axios, тут по желанию

  useEffect(() => {
    // Это если бы мы использовали axios. Также нужно было бы создать state loading
    // const fetchPosts = async () => {
    //   setLoading(true);
    //   const res = await axios.get('http://localhost:3001/data');
    //   setPosts(res.data);
    //   setLoading(false);
    // };
    // fetchPosts();

    request('http://localhost:3001/data')
      .then(setData)
      .then(() => setProcess('confirmed'));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtredData = filteredData.length === 0 ? data : filteredData;

  const indexOfLastPost = currentPage * dataPerPage;
  const indexOfFirstPost = indexOfLastPost - dataPerPage;

  const currentData = filtredData.slice(indexOfFirstPost, indexOfLastPost);

  const paginatePage = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='App'>
      <div className='App-container'>
        <Search data={data} onFilterData={onFilterData} />
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
