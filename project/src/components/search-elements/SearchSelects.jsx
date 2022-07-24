import { useState } from 'react';

const columns = [
  { name: 'name', text: 'Название' },
  { name: 'quantity', text: 'Количество' },
  { name: 'distance', text: 'Дистанция' },
];
const condition = [
  { name: 'equal', text: 'Равно' },
  { name: 'contain', text: 'Содержит' },
  { name: 'more', text: 'Больше' },
  { name: 'less', text: 'Меньше' },
];

const SearchSelects = ({ setColumnsFilter, setConditionFilter }) => {
  const [columnsData] = useState(columns);
  const [conditionData] = useState(condition);

  return (
    <>
      <select
        onChange={(e) => setColumnsFilter(e.target.value)}
        defaultValue='default'
        className='search-panel__select input-style select-style'
        name='columns'
        id='columns'
      >
        <option value='default' className='search-panel-option--default'>
          По названию
        </option>
        {columnsData.map(({ name, text }) => (
          <option key={name} value={name}>
            {text}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => setConditionFilter(e.target.value)}
        defaultValue='default'
        className='search-panel__select input-style select-style'
        name='condition'
        id='condition'
      >
        <option value='default' className='search-panel-option--default'>
          По равенству
        </option>
        {conditionData.map(({ name, text }) => (
          <option key={name} value={name}>
            {text}
          </option>
        ))}
      </select>
    </>
  );
};

export default SearchSelects;
