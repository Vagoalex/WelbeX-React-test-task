const SearchInput = ({ term, setTerm }) => {
  return (
    <input
      className='search-panel__input input-style'
      type='text'
      placeholder='Что ищем?'
      onChange={(e) => setTerm(e.target.value)}
      value={term}
    />
  );
};

export default SearchInput;
