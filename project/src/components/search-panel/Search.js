import './Search.scss';

const Search = () => {
  return (
    <div className='search-panel'>
      <input className='table-input' type='text' placeholder='Поиск...' />
      <select name='' id=''>
        <option value='name'>Название</option>
        <option value='quantity'>Количество</option>
        <option value='distance'>Дистанция</option>
      </select>
      <select name='' id=''>
        <option value='equel'>Равно</option>
        <option value='contain'>Содержит</option>
        <option value='more'>Больше</option>
        <option value='less'>Меньше</option>
      </select>
    </div>
  );
};

export default Search;
