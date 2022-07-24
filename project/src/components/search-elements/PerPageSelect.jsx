const PerPageSelect = ({ dataPerPage, onChangeDataPerPage }) => {
  return (
    <select
      className='search-panel__select input-style'
      defaultValue={dataPerPage}
      onChange={onChangeDataPerPage}
    >
      <option value='10'>10</option>
      <option value='15'>15</option>
      <option value='20'>20</option>
      <option value='25'>25</option>
    </select>
  );
};

export default PerPageSelect;
