import './Search.scss';

const Search = ({ onFilterData }) => {
  return (
    <div className='search-panel'>
      <input
        className='search-panel__input input-style'
        type='text'
        placeholder='Что ищем?'
        onChange={(e) => onFilterData(e.target.value)}
      />
      <select
        className='search-panel__select input-style'
        name='columns'
        id='columns'
      >
        <option value='name'>Название</option>
        <option value='quantity'>Количество</option>
        <option value='distance'>Дистанция</option>
      </select>
      <select
        className='search-panel__select input-style'
        name='condition'
        id='condition'
      >
        <option value='equal'>Равно</option>
        <option value='contain'>Содержит</option>
        <option value='more'>Больше</option>
        <option value='less'>Меньше</option>
      </select>
    </div>
  );
};

export default Search;
