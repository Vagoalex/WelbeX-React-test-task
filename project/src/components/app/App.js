import Search from '../search-panel/Search';
import Table from '../table/Table';
import Pagination from '../pagination/Pagination';

import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <Search />
      <Table />
      <Pagination />
    </div>
  );
};

export default App;
